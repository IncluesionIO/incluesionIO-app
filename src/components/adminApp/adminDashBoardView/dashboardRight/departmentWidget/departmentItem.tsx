import "./departmentItem.css";

const DepartmentsItem = (props: any) => {
  return (
    <div className="department">
      <div className="department-name">{props.department.name}</div>
      <div className="department-users">{props.department.users}</div>
    </div>
  );
};

export default DepartmentsItem;
