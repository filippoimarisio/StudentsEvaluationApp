import * as React from 'react'
import { connect } from 'react-redux'
import {fetchStudent} from '../../actions/actions.students'
import CreateEvaluationForm from './EvaluationForm'
import {addEvaluation} from '../../actions/actions.students'


class StudentPage extends React.PureComponent {

    componentWillMount() {
        console.log('in the componentwillmount studentpage', this.props.studentId)
        this.props.fetchStudent(this.props.studentId);
    }

    addEvaluation = (evaluation) => {
        const studentId = this.props.studentId
        const lastEvaluation = evaluation.grade
        this.props.addEvaluation({studentId, lastEvaluation});
        console.log('in the addevaluation function', {studentId, lastEvaluation})

      };


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
                <CreateEvaluationForm addEvaluation={this.addEvaluation}/>         
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
  
export default connect(mapStateToProps, {fetchStudent, addEvaluation})(StudentPage)


