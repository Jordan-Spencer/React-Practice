import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Default.styles.css';

const TaskDetails = (props) => {

  
  const taskList = [...props.location.state.taskList];
  const currentTaskIndex = parseInt(props.match.params.id);
  const currentTask = taskList[currentTaskIndex];
  const [currentTaskStatus, setCurrentTaskStatus] = useState(currentTask.status);

  const handleChange = (e) => {
    setCurrentTaskStatus(e.target.value)
  }

  const updateTask = () => {
    taskList.splice(currentTaskIndex, 1);
    taskList.push({
          id: currentTaskIndex,
          taskText: `${currentTask.taskText}`,
          status: `${currentTaskStatus}`
    });
  }

  return (
    <div>

        <h1>Edit Task
        <button>
          <Link id='save' onClick={updateTask} to={{
            pathname: `/`,
            state: {taskList: taskList}
              }}>
              Save
          </Link>
        </button>
        </h1>
      
      <hr />

      <div>
          {taskList[currentTaskIndex].taskText}
      </div>
      
      <div>
        <form className='radio-buttons'>
          <label>
              <input type='radio' name='status' value='Completed' 
                      checked={currentTaskStatus === 'Completed'}
                      onChange={handleChange}
                        />
              Completed
          </label>
          <label>
              <input type='radio' name='status' value='In Progress' 
                      checked={currentTaskStatus === 'In Progress'}
                      onChange={handleChange}
                        />
              In Progress
          </label>
              <label>
              <input type='radio' name='status' value='Not Started' 
                      checked={currentTaskStatus === 'Not Started'}
                      onChange={handleChange}
                        />
              Not Started
          </label>
        </form>
      </div>
    </div>      
  );
}

export default TaskDetails;