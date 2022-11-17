import react from 'react'
import './DataRow.css'
/**
 * @desciption - Displays the question and answer average formatted as a row.
 * @param {string} question - The question to display
 * @param {number} answerAverage - The average score of the answers
 * @returns Data Row Component
 */
const DataRow = ({question, answerAverage}: {question: string, answerAverage: number}) => {

  const answerRank = () =>
  {
    if(answerAverage >= 4)
      return 'answer-green'
    else if (answerAverage >= 2.5)
      return 'answer-yellow'
    else if (answerAverage < 2.5)
      return 'answer-red'
  }

  return (
    <div className='dataRow-container'>
      <div className='data-question'>{question || "Question"}</div>
      <div className={`data-answer ${answerRank()}`}>{answerAverage || 4.31}</div>
    </div>
  )
}

export default DataRow