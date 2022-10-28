import React, { ReactNode, useState } from "react";
import AlertsItem from "./alertsWidget/alertsItem";
import "./dashboardRight.css";
import Departments from "./departmentWidget/departmentItem";

const DashboardRight = () => {
    const [alertsList, setAlertsList] = useState<any>([
        {message: "Some alert", id:"1"},
        {message: "Update available", id:"1"},
        {message: "amber", id:"1"},
        {message: "Some alert", id:"1"},
        {message: "Update available", id:"1"},
        {message: "amber", id:"1"}
    ])
    const [alertCount, setAlertCount] = useState(alertsList.length);
  const [departments, setDepartments] = useState<any>([
    {name: "Customer Service", id: "1", users: 41},
    {name: "Grocery", id: "2", users: 62}
  ])

    const getDepartments = ():React.ReactNode =>
    {
        const dept = departments.map((department:any) =>
        {
            return <Departments department={department} />
        })
        console.log(dept)
        return dept
    }

    const getAlerts = ():React.ReactNode =>
    {
        const alerts = alertsList.map((alert:any) =>
        {
            return <AlertsItem alert={alert} />
        })
        
        return alerts
    }

  return (
    <div className="dashboardRight">
      <div className="dashboardRight-top">
        <div className="component">
          <div className="component-header">
            <h2 className="section-title">Departments (Users)</h2>
          </div>
          <div className="widget-container">
            <div className="container-department">
                {getDepartments()}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardRight-bottom">
        <div className="component">
          <div className="component-header">
            <h2 className="section-title">
              Alerts{" "}
              {alertCount > 0 ? (
                <div className="alert-background">
                  {alertCount > 100 ? (
                    <span className="alert-counter">99+</span>
                  ) : (
                    <span className="alert-counter">{alertCount}</span>
                  )}
                </div>
              ) : (
                ""
              )}
            </h2>
          </div>
          <div className="widget-container">
            <div className="container-alerts">
                {getAlerts()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export { DashboardRight };
