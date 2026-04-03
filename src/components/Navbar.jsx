import PropTypes from 'prop-types';
import { useState } from "react";


export const Navbar = ({title, subheading, handleChange, isChecked})=>{
  const [val, setVal] = useState(isChecked);
    return (
        <nav>
            <div className="logo">
              <h3>
                Hero-logo
              </h3>
            </div>

            <div className="Menu-options">
              <div className="menu__theme">
                <input type="checkbox"
                className="toggle"
                id="theme-toggle"
                onChange={handleChange}
                checked={isChecked}
                />
                <label htmlFor="theme-toggle">Dark Mode</label>
              </div>
                <h6><label htmlFor="dropdown-toggle">Menu</label>
                  <input type="checkbox" id="dropdown-toggle"
                  />
                </h6>
                <div className="dropdown">
                  <ul>

                  </ul>
                </div>
            </div>
        </nav>
    );
}

Navbar.Proptypes = {
    title : PropTypes.string.isRequired,
    subheading : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Zain-Soft",
    subheading: "Options"
}
