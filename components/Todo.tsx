// components/Spinner.tsx
import React, { FC, MouseEvent } from 'react';
type TodoProps = {
  title: string;
  handleDone: (event:MouseEvent<HTMLButtonElement>) => void;
  handleRemove: (event:MouseEvent<HTMLButtonElement>) => void;
};
const Todo: FC<TodoProps> = ({ title,handleDone,handleRemove }) => (
  <div className="flex mb-4 items-center">
    <p className="text-left text-gray-900">{ title }</p>
    <button onClick={handleDone} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white-500 text-green-500 border-green-500 hover:bg-green-500">Done</button>
    <button onClick={handleRemove} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
  </div>
);

export default Todo;
