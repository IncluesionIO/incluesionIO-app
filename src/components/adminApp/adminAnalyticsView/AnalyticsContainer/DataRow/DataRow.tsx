import react from 'react'
import './DataRow.css'

const DataRow = (props:any) => {

  const answerRank = () =>
  {
    if(props.answerAverage >= 4)
      return 'answer-green'
    else if (props.answerAverage >= 2.5)
      return 'answer-yellow'
    else if (props.answerAverage < 2.5)
      return 'answer-red'
  }

  return (
    <div className='dataRow-container'>
      <div className='data-question'>{props.question || "Question"}</div>
      <div className={`data-answer ${answerRank()}`}>{props.answerAverage.toFixed(2) || 4.31}</div>
    </div>
  )
}

export default DataRow