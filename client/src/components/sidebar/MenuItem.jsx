import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const MenuItem = ({getLinkName, ...props}) => {


  return (
    <li onClick={() => getLinkName(props.name)} className="menu__item">
      <Link to={props.to}>
        <div className="icon">
          <i className={props.icon}></i>
        </div>
        <a href={props.to} className="menu__link">
          {props.name}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
