import React from "react";
import './dashboardLeft.css'

const DashboardLeft = () => {
    return (
        <div className='dashboardLeft'>
            <div className='dashboardLeft-top'>
                <div className='component-overview'>
                    <h4>Overview</h4>
                </div>
            </div>
            <div className='dashboardLeft-bottom'>
                <div className='component-graph'>
                    <h4>Graph</h4>
                </div>
            </div>
        </div>
    )
}

export {DashboardLeft}