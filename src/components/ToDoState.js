import {useState} from 'react';

let nextId = 0;
export default function ToDoState() {

    // return (
    //     <div>
    //         <div>
    //             <p>Using useState hook</p>
    //         </div>
    //         <div>
    //             <input type="text"/> <p>'➕' <button>Add</button></p>
    //         </div>
    //         <div>
    //             <ul>
    //
    //             </ul>
    //         </div>
    //     </div>
    // )
    const [name, setName] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask() {
        setTasks([
            ...tasks,
            {id: nextId++, name: name}
        ]);
    }

    return (
        <>
            <input
                value={name}
                placeholder="Enter Your Task Here"
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </>
    );

}