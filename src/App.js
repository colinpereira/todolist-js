import React from "react";
import "./App.css";
import { useState } from "react";
import ToDoItem from "./Components/ToDoItem";
import searchIcon from "./Assets/search.png";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [toDoItem, setToDoItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [anyTaskCompleted, setAnyTaskCompleted] = useState(false);

  const addToList = () => {
    let currId = taskList.length + 1;
    setTaskList([
      ...taskList,
      { id: currId, taskName: toDoItem, completed: false },
    ]);
  };

  const filterTasks = taskList.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteTask = (id) => {
    let updatedTasks = taskList.filter((task) => task.id != id);
    setTaskList(updatedTasks);
  };

  const completeTask = (id) => {
    let updatedList = taskList.map((task) => {
      if (task.id === id) {
        const updatedItem = {
          ...task,
          completed: !task.completed,
        };
        return updatedItem;
      }
      return task;
    });
    setTaskList(updatedList);

    setAnyTaskCompleted(true);
  };

  return (
    <div className="appContainer">
      <div className="toDoListContainer">
        <h1 className="toDoListContainerHeader">Colin's To-Do List</h1>
        <div className="addItemContainer">
          <div className="addItem">
            <input
              onChange={(event) => {
                setToDoItem(event.target.value);
              }}
              placeholder="Add an item here..."
            />
            <button onClick={addToList}>+</button>
          </div>
          <img
            className="searchIcon"
            src={searchIcon}
            onClick={() => {
              showSearch ? setShowSearch(false) : setShowSearch(true);
            }}
          />
          {showSearch && (
            <div className="searchContainer">
              <input
                className="searchBar"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                placeholder="Search for a task..."
              />
            </div>
          )}
        </div>
        <div className="uncompletedListContainer">
          {filterTasks.map((item, key) => {
            return (
              !item.completed && (
                <ToDoItem
                  key={key}
                  name={item.taskName}
                  deleteTask={() => deleteTask(item.id)}
                  completeTask={() => completeTask(item.id)}
                />
              )
            );
          })}
        </div>

        <div className="completedListContainer">
          <h1 className="toDoListContainerHeader">Completed Tasks</h1>
          {filterTasks.map((item, key) => {
            return (
              item.completed && (
                <ToDoItem
                  key={key}
                  name={item.taskName}
                  deleteTask={() => deleteTask(item.id)}
                  completeTask={() => completeTask(item.id)}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
