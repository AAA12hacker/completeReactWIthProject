import logo from "./logo.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import { useState } from "react";
import TodoFormAdd from "./components/TodoFormAdd";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) =>
        prev.id === id ? { id: Date.now(), ...todo } : prev
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prev) => prev.id !== id));
  };
  const completeTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : prev
      )
    );
  };
  // here we have use useEffects that are handling our localstorage when adding and refreshing
  useEffect(() => {
    const dataTodoFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if (dataTodoFromLocalStorage && dataTodoFromLocalStorage.length > 0) {
      setTodos(dataTodoFromLocalStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              <TodoFormAdd />
            </h1>
            <div className="mb-4">{/* Todo form goes here */}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
