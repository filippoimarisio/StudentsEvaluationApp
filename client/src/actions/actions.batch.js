export const SELECT_BATCH = 'SELECT_BATCH'

export const selectBatch = (batchId) => {
  console.log('in the selectbatch action creator', batchId)
    return {
      type: SELECT_BATCH,
      payload: {batchId}
    }
  }