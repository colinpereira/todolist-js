import React from "react";
import "./Styles/ToDoItem.css";
import TickIcon from "../Assets/tick.png";

const ToDoItem = (props) => {
  return (
    <div className="toDoItemContainer">
      <div className="toDoItemContainerLeft">
        <h1>{props.name}</h1>
      </div>
      <div className="toDoItemContainerRight">
        <img
          className="toDoItemContainerIcon"
          src={TickIcon}
          onClick={props.completeTask}
        ></img>
        <div className="toDoItemContainerIcon" onClick={props.deleteTask}>
          X
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
