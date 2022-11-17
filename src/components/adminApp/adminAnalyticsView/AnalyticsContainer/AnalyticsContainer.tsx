import axios from "axios";
import react, { useEffect, useState } from "react";
import BarChart from "../../../graphs/barChart";
import getLifetimeAverageAnswerPerQuestion from "../../../graphs/filterMethods/getLifetimeAverageAnswerPerQuestion";
import LineChart from "../../../graphs/lineChart";
import "./AnalyticsContainer.css";
import DataRow from "./DataRow/DataRow";

const AnalyticsContainer = (props: any) => {
  const [assessmentList, setAssessmentList] = useState<any[]>([]);
  const [diagnosticsList, setDiagnosticsList] = useState<any[]>([]);
  const [questionAverages, setQuestionAverages] = useState<any[]>([]);

  useEffect(() => {
    const assessmentRequest = axios.get("http://localhost:13000/assessment/list")
    const diagnosticRequest = axios.get(`http://localhost:13000/diagnostic/all/${JSON.parse(localStorage.getItem('companyID') || "")}`)
    axios
      .all([assessmentRequest, diagnosticRequest])
      .then(axios.spread((...responses) =>
      {
        setAssessmentList(responses[0].data)
        setDiagnosticsList(responses[1].data)
      }))
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
            <BarChart dataset={assessmentList} dataTitle={"Assessment Submissions"}/>
          </div>
          <div className="chart">
            <BarChart dataset={assessmentList} dataTitle={"Assessment Submissions"}/>
          </div>
          <div className="chart">
            <BarChart dataset={assessmentList} dataTitle={"Assessment Submissions"}/>
          </div>
        </div>
        <h3 className="data-row-header">Assessment Question Metrics</h3>
        <div className="data-rows-container">{getQuestionAveragesLists()}</div>
      </div>
      <div className="analytics-container-right">
        <div className="graph-group">
          <div className="chart">
            <LineChart dataset={diagnosticsList} dataTitle={"Diagnostic Reports"}/>
          </div>
          <div className="chart">
            <LineChart dataset={assessmentList} dataTitle={"Assessment Submissions"}/>
          </div>
          <div className="chart">
            <LineChart dataset={assessmentList} dataTitle={"Assessment Submissions"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
