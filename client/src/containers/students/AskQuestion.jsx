import * as React from 'react'
import { connect } from 'react-redux'
// import {fetchStudent} from '../../actions/actions.students'



class AskQuestion extends React.PureComponent {

    // componentWillMount() {
    //     this.props.fetchStudent(this.props.randomStudent);
    // }

    // addEvaluation = (evaluation) => {
    //     const studentId = this.props.studentId
    //     const lastEvaluation = evaluation.grade
    //     this.props.addEvaluation({studentId, lastEvaluation});
    //     console.log('in the addevaluation function', {studentId, lastEvaluation})

    //   };


    render() {
        if(!this.props.randomStudent) {
        // this.componentWillMount()
            return  <div>Loading...</div>
          } 
      
        const { randomStudent } = this.props

        return (
            <div>
                Ask a question to:
                <div className='studentBio'>
                    <h1>{randomStudent.firstName} {randomStudent.lastName}</h1>
                    <img src={`${randomStudent.photo}`}/>
                    <div>Last Evaluation: {randomStudent.lastEvaluation}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
      randomStudent: state.randomstudent.chosenStudent
    }
  }
  
export default connect(mapStateToProps)(AskQuestion)