import React from "react";
import './dashboardRight.css'

const DashboardRight = () => {
    return (
        <div className='dashboardRight'>
            <div className='dashboardRight-top'>
                <div className='component-main'>
                    <h4>Main</h4>
                </div>
            </div>
            <div className='dashboardRight-bottom'>
                <div className='component-comments'>
                    <h4>Comments</h4>
                </div>
            </div>
        </div>
    )
}

export {DashboardRight}