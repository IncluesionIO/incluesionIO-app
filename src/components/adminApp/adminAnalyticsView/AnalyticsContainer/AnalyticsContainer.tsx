import axios from 'axios'
import react, { useEffect, useState } from 'react'
import BarChart from '../../../graphs/barChart'
import './AnalyticsContainer.css'
import DataRow from './DataRow/DataRow'

const AnalyticsContainer = (props:any) =>
{
  const [assessmentList, setAssessmentList] = useState([])

  useEffect(() =>
  {
    axios.get('http://localhost:13000/assessment/list')
    .then(response =>
      {
        setAssessmentList(response.data)
      })
    .catch(err =>
      {
        console.log(err)
      })
  }, [])

  return (
    <div className='analytics-container'>
      <div className='analytics-container-left'>
        <div className='graph-group'>
          <div className='chart'>
            <BarChart dataset={assessmentList}/>
          </div>
          <div className='chart'>
            <BarChart dataset={assessmentList}/>
          </div>
          <div className='chart'>
            <BarChart dataset={assessmentList}/>
          </div>
        </div>
        <h3>Assessment Question Metrics</h3>
        <div className="data-rows-container">
          <DataRow answerAverage={2.5} />
          <DataRow answerAverage={3.7} />
        </div>
      </div>
      <div className='analytics-container-right'>
        Hello Right
      </div>
    </div>
  )
}

export default AnalyticsContainer