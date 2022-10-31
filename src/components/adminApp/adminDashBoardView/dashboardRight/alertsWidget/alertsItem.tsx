import './alerts.css'

const AlertsItem = (props:any) =>
{
    return (
        <div className="alert">
          <div className="alert-message">{props.alert.message}</div>
        </div>
      );
}

export default AlertsItem