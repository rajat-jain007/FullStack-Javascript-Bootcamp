import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Box from "./components/Box";

function App() {
  const [todos, setTodo] = useState([]);

  const removeTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodo(newTodos);
  };

  const addTodoHandler = (item) => {
    setTodo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-3xl bg-white">
          <Input handler={addTodoHandler} />
          <Box data={todos} removeHandler={removeTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
