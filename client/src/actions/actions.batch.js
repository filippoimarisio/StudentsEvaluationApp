export const SELECT_BATCH = 'SELECT_BATCH'

export const selectBatch = (batchId) => {
    return {
      type: SELECT_BATCH,
      payload: {batchId}
    }
  }