import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {fetchBatchStudents} from '../../actions/actions.students'
// import CreateBatchForm from './CreateBatchForm'

class StudentsListContainer extends React.PureComponent {

  componentWillMount() {
    this.props.fetchBatchStudents(this.props.batchId);
  }


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
          <div>{ student.photo }</div>
        </li>
      )}
    </ul>
    {/* <CreateBatchForm createBatch={this.createBatch} /> */}
  </div>
  }
}


const mapStateToProps = (state) => {
    return {
    batchId: state.batchId,
    students: state.students.studentsByBatch
  }
}

export default connect(mapStateToProps, {fetchBatchStudents})(StudentsListContainer)
