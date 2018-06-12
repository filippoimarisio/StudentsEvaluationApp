import * as React from 'react'

export default function BatchesList(props) {
  return (
  <div>
    <h1>Batches</h1>
    <ul>
      { props.batches.map(batch =>
        <li key={batch.id} onClick={() => props.selectBatch(batch.id)}>
          <div>Batch number: { batch.id }</div>
          <div>Start date: { batch.startDate }</div>
          <div>End date: { batch.endDate }</div>
        </li>
      )}
    </ul>
  </div>)
}
