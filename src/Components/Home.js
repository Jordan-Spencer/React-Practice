import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Default.styles.css';

const Home = (props) => {

    const [taskList, setTaskList] = useState(props.location.state.taskList);
    const [newTask, setNewTask] = useState('');
    const [taskId, setTaskId] = useState(taskList.length);
  
    const handleChange = (e) => {
      e.preventDefault();
      setNewTask(e.target.value);
    }

    const displayList = (taskList) => {
        if (taskList) {
            return (
            <div className="TaskList">
                <h1>Tasks</h1>
                <table>
                    <thead>
                        <tr className='header'>
                            <th>TASK</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {taskList.map(({ id, taskText, status}) => 
                    <tr className='task-entry' key={id}>
                      <td>
                        <Link to={{
                            pathname: `/details/${id}`,
                            state: {taskList: taskList}
                          }}>
                          {taskText}
                        </Link>
                      </td>
                    <td>
                      {status}
                    </td>
                  </tr>
                )}
                </tbody>
                </table>
            </div>
        );
    }

        return (
            <div className="TaskList">
                <h1>Tasks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>TASK</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                </table>
            </div>
            );
    }

    const createTask = (e) => {
        e.preventDefault();
        if (newTask === '') {
          return null;
        }
        setTaskId(taskId + parseInt(1));
        const task = {
          id: parseInt(`${taskId}`),
          taskText: `${newTask}`,
          status: 'Not Started'
        };
        console.log(task);
        setNewTask('');
        setTaskList([...taskList, task]);
        displayList(taskList);
      }

    return (
        <div>
        {displayList(taskList)}
            <form onSubmit={createTask}>
                <input id='task-input' type='text' className='task' value={newTask} onChange={handleChange} />
                <button id='add-button' type='submit'>Add</button>
            </form>
        </div>
    );
}

export default Home;



    // const clear = () => {
    //   setTaskList([]);
    //   setTaskId(0);
    // }
    //            <hr/>
    // <button id='clear-button' onClick={clear}>Clear</button>