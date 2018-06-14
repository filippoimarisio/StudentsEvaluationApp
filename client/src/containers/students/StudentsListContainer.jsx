import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {fetchBatchStudents, randomStudent} from '../../actions/actions.students'
import AddAStudent from './CreateStudentForm'
import {addAStudent} from '../../actions/actions.students'
import Button from "material-ui/Button/Button.js";
import {deleteStudent} from '../../actions/actions.students'
import {selectStudent} from '../../actions/actions.student'
import './StudentsListContainer.css'


class StudentsListContainer extends React.PureComponent {


  componentWillMount() {
    this.props.fetchBatchStudents(this.props.batchId);
    console.log(this.props.batchId)
  }

  addAStudent = (student) => {
    const { batchId } = this.props.batchId

    student = {...student, batch : batchId}
    this.props.addAStudent(student);
    console.log('in the addastudent function', batchId, student)

  };

  deleteStudent(studentId) {
    this.props.deleteStudent(studentId);
  }

  selectStudent(studentId) {
    this.props.selectStudent(studentId);
  }

  randomStudent(batchId) {
    this.props.randomStudent(batchId);
  }
 

  render() {

    if(!this.props.students) {
      console.log(this.props.students)
    this.componentWillMount()
        return  <div>Loading...</div>
    } 

    const { students } = this.props

    return <div>
    <h1>Students</h1>
    <div className='batchLevelOverview'>
      <table>
        <tbody>
          <tr>
            {students.map(student => {
            if (student.lastEvaluation == 'green')
            return (
              <td key={student.id} className='greenTable'>
              </td>
            )
            if (student.lastEvaluation == 'yellow')
            return (
              <td key={student.id} className='yellowTable'>
              </td>
            )
            if (student.lastEvaluation == 'red')
            return (
              <td key={student.id} className='redTable'>
              </td>
            )
            })}
          </tr>
        </tbody>
      </table>
    </div>
    
    <div>
      
    </div>

    <ul>
      { students.map(student =>
        <li key={student.id} >
          <Link to={`/students/${student.id}`} onClick={() => this.selectStudent(student.id)}>
            <div>First Name: { student.firstName }</div>
            <div>Last Name: { student.lastName }</div>
            <img src={ student.photo }/>
            <div>Last Evaluation: { student.lastEvaluation }</div>
          </Link>
        <Button className="deleteButton" onClick={() => this.deleteStudent(student.id)}>Delete</Button>
        </li>
      )}
    </ul>
    <div className='askQuestion'>
      <Button><Link to={`/randomstudent`} className="questionButton" onClick={() => this.randomStudent(this.props.batchId)}>Pick a student!</Link></Button>
    </div>
    <div className='addStudent'>
      <AddAStudent addAStudent={this.addAStudent} />
    </div>
  </div>
  }
}


const mapStateToProps = (state) => {
  console.log('in the maspstatetoprops', state.students.studentsByBatch)

    return {
    batchId: state.batchId,
    students: state.students.studentsByBatch
  }
}

export default connect(mapStateToProps, {fetchBatchStudents, addAStudent, deleteStudent, selectStudent,randomStudent})(StudentsListContainer)
