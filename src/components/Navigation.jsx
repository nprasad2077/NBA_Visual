import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Home</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/reactvtable">React_V_Table</Link>
          </li>
          <li>
            <Link to="/materialtable">Material Table</Link>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/reactvtable">React_V_Table</Link>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
