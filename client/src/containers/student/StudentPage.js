import * as React from 'react'
import { connect } from 'react-redux'
import {fetchStudent} from '../../actions/actions.students'


class StudentPage extends React.PureComponent {

    componentWillMount() {
        console.log('in the componentwillmount studentpage', this.props.studentId)
        this.props.fetchStudent(this.props.studentId);
    }


    render() {
        if(!this.props.student) {
        this.componentWillMount()
            return  <div>Loading...</div>
          } 
      
        const { student } = this.props

        return (
            <div>
                <div>Student Page</div>
                <div>{student.firstName}</div>
                <div>{student.lastName}</div>
                <img src={`${student.photo}`}/>            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('in SP mstp', state.studentId)
    return {
      studentId: state.student.studentId,
      student: state.fetchstudent
    }
  }
  
export default connect(mapStateToProps, {fetchStudent})(StudentPage)


