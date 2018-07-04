import * as React from 'react'
import { connect } from 'react-redux'
import './AskQuestion.css'

class AskQuestion extends React.PureComponent {

    render() {
        if(!this.props.randomStudent) {
            return  <div>Loading...</div>
        } 
      
        const { randomStudent } = this.props

        return (
            <div>
                Ask a question to:
                <div className='studentBio'>
                    <h1>{randomStudent.firstName} {randomStudent.lastName}</h1>
                    <img className='askquestionpic' alt='student' src={`${randomStudent.photo}`}/>
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