import React, { FC, useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import Todo from '@/components/Todo';
const TodoList: FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const handleTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };
  const handleDone = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Done!");
  };
  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Remove!");
  };
  const handleAddTodo = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (todoText) {
      alert("Add!");
    } else {
      alert("Todo is empty!");
    }
  }
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 placeholder-gray-500 text-gray-900" placeholder="Add Todo" value={todoText} onChange={handleTodoTextChange}/>
            <button onClick={handleAddTodo} className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
          </div>
        </div>
        <div>
          <Todo title="Add another component to Tailwind Components" handleDone={ handleDone } handleRemove={ handleRemove }/>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
