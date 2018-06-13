import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {fetchBatchStudents} from '../../actions/actions.students'
import AddAStudent from './CreateStudentForm'
import {addAStudent} from '../../actions/actions.students'


class StudentsListContainer extends React.PureComponent {

  componentWillMount() {
    this.props.fetchBatchStudents(this.props.batchId);
  }

  addAStudent = student => {
    this.props.addAStudent(student);
  };


  render() {

    if(!this.props.students) {
        return  <div>Loading...</div>
    } 

    const { students } = this.props

    return <div>
    <h1>Students</h1>
    <ul>
      { students.map(student =>
        <li key={student.id} onClick={() => this.selectStudent(student.id)}>
          <div>First Name: { student.firstName }</div>
          <div>Last Name: { student.lastName }</div>
          <img src={ student.photo }/>
        </li>
      )}
    </ul>
    <AddAStudent addAStudent={this.addAStudent} />
  </div>
  }
}


const mapStateToProps = (state) => {
    return {
    batchId: state.batchId,
    students: state.students.studentsByBatch
  }
}

export default connect(mapStateToProps, {fetchBatchStudents, addAStudent})(StudentsListContainer)
