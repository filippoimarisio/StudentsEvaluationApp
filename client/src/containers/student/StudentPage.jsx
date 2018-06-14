import * as React from 'react'
import { connect } from 'react-redux'
import {fetchStudent} from '../../actions/actions.students'
import CreateEvaluationForm from './EvaluationForm'
import {addEvaluation, storeEvaluation} from '../../actions/actions.students'


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

    storeEvaluation = (evaluation) => {
        console.log('in the storeevaluation function', evaluation)
        const student = this.props.studentId
        const grade = evaluation.grade
        const remark = evaluation.remark
        this.props.storeEvaluation({student, grade, remark})
    }


    render() {
        if(!this.props.student.evaluation) {
        this.componentWillMount()
            return  <div>Loading...</div>
          } 
      
        const { student } = this.props
        console.log({student})

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                Grade
                            </th>
                            <th>
                                Remark
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.evaluation.map(score => (
                            <tr key={score.id} >
                                <td>{score.date}</td>
                                <td>{score.grade}</td>
                                <td>{score.remark}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='studentBio'>
                    <div>Student Page</div>
                    <div>Name: {student.firstName}</div>
                    <div>Surname: {student.lastName}</div>
                    <img src={student.photo}/>
                    <div>Last Evaluation: {student.lastEvaluation}</div>
                </div>
                <CreateEvaluationForm addEvaluation={this.addEvaluation} storeEvaluation={this.storeEvaluation}/>         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('in SP mstp', state.studentId)
    return {
      studentId: state.student.studentId,
      student: state.fetchstudent,
      teacher: state.currentUser
    }
  }
  
export default connect(mapStateToProps, {fetchStudent, addEvaluation, storeEvaluation})(StudentPage)


