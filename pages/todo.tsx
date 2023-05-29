import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Todo from '@/components/Todo';
const TodoList: FC = () => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
          </div>
        </div>
        <div>
          <Todo/>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
