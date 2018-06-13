import * as React from 'react'
import { connect } from 'react-redux'
import {fetchStudent} from '../../actions/actions.students'


class StudentPage extends React.PureComponent {

    componentWillMount() {
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
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
  
    return {
      studentId: state.studentId,
      student: state.student
    }
  }
  
export default connect(mapStateToProps, {fetchStudent})(StudentPage)


