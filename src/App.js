//Import Libraries
import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            tasks: [],
            newTask:'' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask = () => {
        const { tasks, newTask } = this.state;
        if (newTask) {
          this.setState({
            tasks: [...tasks, newTask],
            newTask: ''
          });
        }
    };
    
    removeTask = (index) => {
        const { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({ tasks: tasks });
    };
    
    handleChange = (e) => {
        this.setState({ newTask: e.target.value });
    };
    
      


    render(){
        //let taskslist = Object.keys(this.state.tasks);
        const tasks = this.state.tasks;
        return(
            <div className="App">
                <h1>ACTIVIDAD 2  LISTA DE TAREAS</h1>
                <div className="task-input">
                    <input
                        type="text"
                        value={this.state.newTask}
                        onChange={this.handleChange}
                        placeholder="Add a new task"
                        maxLength="255"/>
                    <button onClick={this.addTask}>Add</button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                        {task}
                        <button 
                        className='buttonList'
                            onClick={() => this.removeTask(index)}>
                                <i class="bi bi-trash-fill"></i>
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;