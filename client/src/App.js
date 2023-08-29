import {useState, useEffect} from 'react';

const API_BASE = "http://localhost:3001";

function App() {
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() =>{
        GetTodos();

        console.log(todos);
    }, [])

    const GetTodos = () => {
        fetch(API_BASE + "/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error("Error: ", err));
    }

	return (
		<div className="App">
			<h1>Welcome Michael!</h1>
            <h4>Your Tasks:</h4>

            <div className="todos">
                <div className="todo">
                    <div className="checkbox"></div>

                    <div className="text">Go to the gym.</div>

                    <div className="delete">x</div>
                </div>

                <div className="todo">
                    <div className="checkbox"></div>

                    <div className="text">Get Groceries.</div>

                    <div className="delete">x</div>
                </div>

                <div className="todo-complete">
                    <div className="checkbox"></div>

                    <div className="text">Do Homework.</div>

                    <div className="delete">x</div>
                </div>

            </div>
		</div>
	);
}

export default App;