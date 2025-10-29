import { useState } from "react";
import Menu from "./Menu";
import "../css/MenuList.css";

const MenuList = ({ list }) => {
  const [toggleStatus, setToggleStatus] = useState({});

  const handleToggle = (currentLabel) => {
    setToggleStatus({
      ...toggleStatus,
      [currentLabel]: !toggleStatus[currentLabel],
    });
  };

  console.log(toggleStatus);
  return (
    <li className="">
      <div className="menu-item">
        <p>
            {list.label}
        </p>

        {list && list.Children && list.Children.length > 0 ? (
        <span className="toggle-btn" onClick={() => handleToggle(list.label)}>
        {toggleStatus[list.label] ? "-" : "+"}
            </span>
        ) : null}
      </div>
      {list &&
      list.Children &&
      list.Children.length > 0 &&
      toggleStatus[list.label] ? (
        <Menu list={list.Children} />
      ) : null}
    </li>
  );
};

export default MenuList;
