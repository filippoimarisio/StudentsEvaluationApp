import * as React from 'react'
import { connect } from 'react-redux'
import {fetchStudent} from '../../actions/actions.students'
import CreateEvaluationForm from './EvaluationForm'
import {addEvaluation, storeEvaluation} from '../../actions/actions.students'
import Moment from 'react-moment'
import Paper from "@material-ui/core/Paper";



class StudentPage extends React.PureComponent {

    componentWillMount() {
        this.props.fetchStudent(this.props.studentId);
    }

    addEvaluation = (evaluation) => {
        const studentId = this.props.studentId
        const lastEvaluation = evaluation.grade
        this.props.addEvaluation({studentId, lastEvaluation});
      };

    storeEvaluation = (evaluation) => {
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
                <Paper className="styles" elevation={4}>
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
                                <Moment format="YYYY/MM/DD">
                                <td>{score.date}</td>
                                </Moment>
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
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      studentId: state.student.studentId,
      student: state.fetchstudent,
      teacher: state.currentUser
    }
  }
  
export default connect(mapStateToProps, {fetchStudent, addEvaluation, storeEvaluation})(StudentPage)


