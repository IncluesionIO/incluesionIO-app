import react from "react";
import "./HeaderButtons.css";

const HeaderButtons = (props: any) => {
  return (
    <button className="btn-header" disabled={props.disabled || false} onClick={props.onClick || null}>
      {props.text}
    </button>
  );
};

export default HeaderButtons;
