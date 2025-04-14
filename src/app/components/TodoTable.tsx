import React from "react";
import { Todo } from "../../../types/Todo";

const TodoTable = ({todos}:{todos:Todo[]}) => {
  return (
    <table className="w-full border-y-2 border-black" aria-label="タスク一覧表">
      <thead className="border-b border-black/50">
        <tr>
          <th scope="col">タイトル</th>
          <th scope="col">内容</th>
        </tr>
      </thead>
      <tbody className="text-center">
       {todos.map((todo)=>(
        <tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo.content}</td>
        </tr>
       ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
