import "./topBar.css";
import Logo from "../../../img/Incluesion_Logo/PNG/IncluesionLogo_secondary_white.png";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-logo">
        <img
          src={Logo}
          alt="Incluesion Logo"
          role="presentation"
          className="topbar-logo-image"
        ></img>
      </div>
      <div className="topbar-search">
        <input
          type="text"
          placeholder="Search"
          className="topbar-search-input"
        />
      </div>
    </div>
  );
};

export default TopBar;
