import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {fetchBatchStudents} from '../../actions/actions.students'
import AddAStudent from './CreateStudentForm'
import {addAStudent} from '../../actions/actions.students'
import Button from "@material-ui/core/Button";
import {deleteStudent} from '../../actions/actions.students'
import {selectStudent} from '../../actions/actions.student'


class StudentsListContainer extends React.PureComponent {


  componentWillMount() {
    this.props.fetchBatchStudents(this.props.batchId);
    console.log(this.props.batchId)
  }

  addAStudent = (student) => {
    const { batchId } = this.props.batchId

    student = {...student, batch : batchId}
    console.log('in the addastudent function', batchId)
    this.props.addAStudent(student);
  };

  deleteStudent(studentId) {
    this.props.deleteStudent(studentId);
  }

  selectStudent(studentId) {
    this.props.selectStudent(studentId);
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
    
    <ul>
      { students.map(student =>
        <li key={student.id} >
        <div onClick={() => this.selectStudent(student.id)}>
          <div>First Name: { student.firstName }</div>
          <div>Last Name: { student.lastName }</div>
          <img src={ student.photo }/>
        </div>
        <Button className="deleteButton" onClick={() => this.deleteStudent(student.id)}>Delete</Button>
        </li>
      )}
    </ul>
    
    <AddAStudent addAStudent={this.addAStudent} />
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

export default connect(mapStateToProps, {fetchBatchStudents, addAStudent, deleteStudent, selectStudent})(StudentsListContainer)
