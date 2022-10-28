import React from "react";
import './adminDashboardTitle.css'

const AdminPageTitle = (props: any) => {
    document.title = `${props.title} | Incluesion Admin`
    return (
        <div className='admin-pageTitle'>
                <h3 className='admin-pageTitleText'>{props.title}</h3>
        </div>
    )
}

export default AdminPageTitle