import axios from "axios";
import react, { useEffect, useState } from "react";
import BarChart from "../../../graphs/barChart";
import getLifetimeAverageAnswerPerQuestion from "../../../graphs/filterMethods/getLifetimeAverageAnswerPerQuestion";
import "./AnalyticsContainer.css";
import DataRow from "./DataRow/DataRow";

const AnalyticsContainer = (props: any) => {
  const [assessmentList, setAssessmentList] = useState([]);
  const [questionAverages, setQuestionAverages] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:13000/assessment/list")
      .then((response) => {
        setAssessmentList(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setQuestionAverages(getLifetimeAverageAnswerPerQuestion(assessmentList, null))
  }, [assessmentList])
  
  const getQuestionAveragesLists = () => {
    console.log(questionAverages)
    return questionAverages.map((values) => {
      return (
        <DataRow
          key={values[0]}
          question={values[0]}
          answerAverage={values[1]}
        />
      );
    });
  };

  return (
    <div className="analytics-container">
      <div className="analytics-container-left">
        <div className="graph-group">
          <div className="chart">
            <BarChart dataset={assessmentList} />
          </div>
          <div className="chart">
            <BarChart dataset={assessmentList} />
          </div>
          <div className="chart">
            <BarChart dataset={assessmentList} />
          </div>
        </div>
        <h3 className="data-row-header">Assessment Question Metrics</h3>
        <div className="data-rows-container">{getQuestionAveragesLists()}</div>
      </div>
      <div className="analytics-container-right">Hello Right</div>
    </div>
  );
};

export default AnalyticsContainer;
