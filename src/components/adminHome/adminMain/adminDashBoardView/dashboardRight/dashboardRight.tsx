import React from "react";
import './dashboardRight.css'

const DashboardRight = () => {
    return (
        <div className='dashboardRight'>
            <div className='dashboardRight-top'>
                <div className='component-main'>
                    <h2>Main</h2>
                </div>
            </div>
            <div className='dashboardRight-bottom'>
                <div className='component-comments'>
                    <h2>Comments</h2>
                </div>
            </div>
        </div>
    )
}

export {DashboardRight}