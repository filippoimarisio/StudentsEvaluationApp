export const SELECT_STUDENT = 'SELECT_STUDENT'

export const selectStudent = (studentId) => {
    return {
      type: SELECT_STUDENT,
      payload: {studentId}
    }
  }