import react from 'react'
import './AnalyticsContainer.css'

const AnalyticsContainer = (props:any) =>
{
  return (
    <div className='analytics-container'>
      <div className='analytics-container-left'>
        Hello Left
      </div>
      <div className='analytics-container-right'>
        Hello Right
      </div>
    </div>
  )
}

export default AnalyticsContainer