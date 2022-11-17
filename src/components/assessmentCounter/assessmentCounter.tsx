import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assessmentCounter.css";

const AssessmentCounter = (props:any) => {
  const [count, setCount] = useState(0);
  useEffect(() =>
  {
    setCount(props.assessmentList.length)
  }, [props.assessmentList.length])

  return (
    <div className="counter-container">
      <h3 className="counter-title">Assessment Count</h3>
      <span className="counter-text">
        {props.loading ? "Loading..." : `${count} Total`}
      </span>
    </div>
  );
};

export default AssessmentCounter;
