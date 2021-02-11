import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Default.styles.css";

const TaskDetails = (props) => {
  const taskList = [...props.location.state.taskList];
  const newTaskList = [...taskList];
  const currentTaskId = parseInt(props.match.params.id);
  const filteredTaskList = taskList.filter((task) => task.id === currentTaskId);
  const currentTask = filteredTaskList[0];
  const [currentTaskStatus, setCurrentTaskStatus] = useState(
    currentTask.status
  );

  const handleChange = (e) => {
    setCurrentTaskStatus(e.target.value);
  };

  const updateTask = () => {
    const index = newTaskList.findIndex((task) => currentTaskId === task.id);
    newTaskList[index].status = `${currentTaskStatus}`;
  };

  return (
    <div className="EditTask">
      <h1>
        Edit Task
        <button>
          <Link
            id="save"
            onClick={updateTask}
            to={{
              pathname: `/`,
              state: { taskList: newTaskList },
            }}
          >
            Save
          </Link>
        </button>
      </h1>
      <hr />
      <div className="v1"></div>
      <div id="task-box">
        Task Text
        <p id="task-field">{currentTask.taskText}</p>
      </div>
      <form className="radio-buttons">
        Status <br />
        <label>
          <input
            type="radio"
            name="status"
            value="Completed"
            checked={currentTaskStatus === "Completed"}
            onChange={handleChange}
          />
          Completed
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="status"
            value="In Progress"
            checked={currentTaskStatus === "In Progress"}
            onChange={handleChange}
          />
          In Progress
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="status"
            value="Not Started"
            checked={currentTaskStatus === "Not Started"}
            onChange={handleChange}
          />
          Not Started
        </label>
      </form>
    </div>
  );
};

export default TaskDetails;
