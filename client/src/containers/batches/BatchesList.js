import * as React from 'react'

export default function BatchesList(props) {
  console.log('does it get here?', props)
  return (
  <div>
    <h1>Batches</h1>
    <ul>
      { props.batches.map(batch =>
        <li key={batch.id} onClick={() => props.selectBatch(batch.id)}>
          { batch.id }
        </li>
      ) }
    </ul>
  </div>)
}
