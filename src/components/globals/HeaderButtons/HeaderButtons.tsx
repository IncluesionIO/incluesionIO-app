import react from "react";
import "./HeaderButtons.css";

/**
 * 
 * @param props.disabled - Disable the button. Defaults to false.
 * @param props.onClick - The on click function to run.
 * @param props.text - The text to display on the button.
 * @returns HeaderButton
 */
const HeaderButtons = (props: any) => {
  return (
    <button className="btn-header" disabled={props.disabled || false} onClick={props.onClick || null}>
      {props.text}
    </button>
  );
};

export default HeaderButtons;
