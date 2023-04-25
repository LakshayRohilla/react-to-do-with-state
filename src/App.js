import logo from './logo.svg';
import './App.css';
import AddTasks from "./components/AddTask";
import {useState} from "react";
import RepoLink from "./components/RepoLink";
import TaskList from "./components/TaskList";
import VisitReducerApp from "./components/VisitReducerApp";


function App() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text
            },
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="my-h1">
                    To Do Application
                </h1>
                <h6 className="my-h6">'Using useState'</h6>
                <AddTasks onAddTask={handleAddTask}/>
                <RepoLink/>
                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
                <VisitReducerApp/>
            </header>
        </div>
    );
}

let nextId = 1;
const initialTasks = [
    {id: 0, text: 'Learn React'},
];

export default App;
