import React, { useEffect, useState } from "react"
import axios from 'axios'
import './assessmentCounter.css'

const AssessmentCounter = () => {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => 
  {
    axios.get("http://localhost:13000/assessment/list")
      .then(response =>
        {
          setCount(response.data.length)
          setLoading(false)
        })
  })

  return (
    <div className="counter-container">
      <h3 className="counter-title">Assessment Count</h3>
        {loading === false ?
          <span className="counter-text">
            {count} Total
          </span> : 
          <span className="counter-text">
          Loading...
        </span>
        }
        
    </div>
  )

}

export default AssessmentCounter