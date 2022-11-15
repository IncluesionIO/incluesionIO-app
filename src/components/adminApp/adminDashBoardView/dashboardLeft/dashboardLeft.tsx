import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboardLeft.css";
import AssessmentCounter from "../../../assessmentCounter/assessmentCounter";
import LineChart from "../../../graphs/lineChart";
import BarChart from "../../../graphs/barChart";
const DashboardLeft = () => {
  const [assessmentList, setAssessmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:13000/assessment/list")
      .then((response) => {
        setAssessmentList(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(assessmentList)

  return (
    <div className="dashboardLeft">
      <div className="dashboardLeft-top">
        <div className="component">
          <div className="component-header">
            <h2 className="section-title">Overview</h2>
            <select className="component-filter">
              <option>All time</option>
            </select>
          </div>
          <div className="widget-container">
            <AssessmentCounter
              loading={loading}
              assessmentList={assessmentList}
            />
          </div>
        </div>
      </div>
      <div className="dashboardLeft-bottom">
        <div className="component">
          <div className="component-header">
            <h2 className="section-title">Graph</h2>
          </div>
          <div className="widget-container">
            <div className="dashboard-chart">
              <LineChart dataset={assessmentList} />
            </div>
            <div className="dashboard-chart">
              <BarChart dataset={assessmentList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardLeft };
