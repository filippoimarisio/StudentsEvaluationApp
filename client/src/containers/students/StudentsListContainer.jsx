import * as React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import {fetchBatchStudents, randomStudent} from '../../actions/actions.students'
import AddAStudent from './CreateStudentForm'
import {addAStudent} from '../../actions/actions.students'
import Button from '@material-ui/core/Button';
import {deleteStudent} from '../../actions/actions.students'
import {selectStudent} from '../../actions/actions.student'
import './StudentsListContainer.css'


class StudentsListContainer extends React.PureComponent {


  componentWillMount() {
    this.props.fetchBatchStudents(this.props.match.params.id);
  }

  addAStudent = (student) => {
    const { batchId } = this.props.batchId
    student = {...student, batch : batchId}
    this.props.addAStudent(student);
  };

  deleteStudent(studentId, batchId) {
    this.props.deleteStudent(studentId, batchId);
  }

  selectStudent(studentId) {
    this.props.selectStudent(studentId);
  }

  randomStudent(batchId) {
    this.props.randomStudent(batchId);
  }
   

  render() {

    if (!this.props.batchId) {
      return <Redirect to="/batches" />
    }

    if(!this.props.students) {
    this.componentWillMount()
        return  <div>Loading...</div>
    } 

    const { students } = this.props
    
    function compare(a,b) {
      if (a.lastEvaluation < b.lastEvaluation) return -1;
      else if (a.lastEvaluation > b.lastEvaluation) return 1; 
      else return 0;
    } 

    students.sort(compare);

    return <div className='studentsListContainer'>
    <h1>Students</h1>
    <div className='batchLevelOverview'>
      <table>
        <tbody>
          <tr>
            {students.map(student => {
            if (student.lastEvaluation === 'green')
            return (
              <td key={student.id} className='greenTable'>
              </td>
            )
            if (student.lastEvaluation === 'yellow')
            return (
              <td key={student.id} className='yellowTable'>
              </td>
            )
            if (student.lastEvaluation === 'red')
            return (
              <td key={student.id} className='redTable'>
              </td>
            )
            })}
          </tr>
        </tbody>
      </table> 
    </div>
      
    
    <div className='askQuestion'>
      <Button><Link to={`/randomstudent`} className="questionButton" onClick={() => this.randomStudent(this.props.batchId)}>Pick a student!</Link></Button>
    </div>
    

    <ul>
      { students.map(student =>
        <div className='studentElement' key={student.id} >
          <Link to={`/students/${student.id}`} onClick={() => this.selectStudent(student.id)}>
            <img src={ student.photo } alt='student'/>
            <div>{ student.firstName } { student.lastName }</div>
            <div>Last Evaluation: { student.lastEvaluation }</div>
          </Link>
        <Button className="deleteButton" onClick={() => this.deleteStudent(student.id)}>Delete</Button>
        </div>
      )}
    </ul>
    <div className='addStudent'>
      <AddAStudent addAStudent={this.addAStudent} />
    </div>
  </div>
  }
}


const mapStateToProps = (state) => {

    return {
    batchId: state.batchId,
    students: state.students.studentsByBatch
  }
}

export default connect(mapStateToProps, {fetchBatchStudents, addAStudent, deleteStudent, selectStudent,randomStudent})(StudentsListContainer)

