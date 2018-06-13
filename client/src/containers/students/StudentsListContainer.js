import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
// import {fetchAllStudents, selectBatch, createBatch} from '../../actions/actions.batches'
// import CreateBatchForm from './CreateBatchForm'

class StudentsListContainer extends React.PureComponent {

    // componentDidReceiveProps() {
    //     console.log('in the componentwillmount', this.props)
    //     const { batchId } = this.props.match.params
    
    //     if (!this.props.students) {
    //       this.props.selectBatch(batchId)
    //     }
    //   }

//   componentWillMount() {
//     this.props.fetchAllBatches();
//   }

//   selectBatch(batchId) {
//     this.props.selectBatch(batchId);
//   }

//   createBatch = batch => {
//     this.props.createBatch(batch);
//   };


  render() {




    // const { students } = this.props.students.studentsByBatch
    // const { batchId } = this.props.students.batch
    // console.log(students,'in the render function')

    if(!this.props.students) {
        return  <div>Loading...</div>
    } 

    return <div>
    <h1>Students</h1>
    {/* <ul>
      { students.map(student =>
        <li key={student.id} onClick={() => this.selectStudent(student.id)}>
          <div>First Name: { student.firstName }</div>
          <div>Last Name: { student.lastName }</div>
          <div>{ student.photo }</div>
        </li>
      )}
    </ul> */}
    {/* <CreateBatchForm createBatch={this.createBatch} /> */}
  </div>
  }
}


const mapStateToProps = (state) => {
console.log('in the mapstatetopropsofstudentslist', state.students)
    return {
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentsListContainer)
