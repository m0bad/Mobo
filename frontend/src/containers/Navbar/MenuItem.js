import React from "react";
import { Link } from "react-router-dom";

const link = (href, id, label, iconClass) => (
  <Link to={href}>
    {iconClass && <i className={`mg-r-sm fa ${iconClass}`} />}
    {label}
  </Link>
);

const MenuItem = ({
  href,
  label,
  id = "",
  className = "",
  isExternalUrl = false,
  iconClass = "",
  pulledRight = false
}) => (
  <li className={`${className} ${pulledRight ? "pulled-right" : ""}`}>
    {isExternalUrl ? (
      link(href, id, label, iconClass)
    ) : (
      <Link to={`${href}`}>{link(href, id, label, iconClass)}</Link>
    )}
  </li>
);

export default MenuItem;
