import React from "react";
import axios from "axios";
import AssessmentCounter from "../../../../../assessmentCounter/assessmentCounter";
import LineChart from "../../../../../graphs/lineChart";
import './dashboardLeft.css'
const DashboardLeft = () => {

    return (
        <div className='dashboardLeft'>
            <div className='dashboardLeft-top'>
                <div className='component-overview'>
                    <div className="component-header">
                        <h2 className="section-title">Overview</h2>
                        <select className="component-filter">
                            <option>All time</option>
                        </select>
                    </div>
                    <div className="widget-container">
                        <AssessmentCounter />
                    </div>
                </div>
            </div>
            <div className='dashboardLeft-bottom'>
                <div className='component-graph'>
                    <div className="component-header">
                        <h2 className="section-title">Graph</h2>
                    </div>
                    <div className="widget-container">
                        <LineChart />
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export {DashboardLeft}