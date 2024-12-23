import React from "react";
import { getTodos } from "../../../lib/api";

const TodoTable = async () => {
  const todos = await getTodos();
  console.log(todos);
  return (
    <table className="w-full border-y-2 border-black" aria-label="タスク一覧表">
      <thead className="border-b border-black/50">
        <tr>
          <th scope="col">タイトル</th>
          <th scope="col">内容</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td>タスクA</td>
          <td>タスクAの内容です</td>
        </tr>
        <tr>
          <td>タスクB</td>
          <td>タスクBの内容です</td>
        </tr>
        <tr>
          <td>タスクC</td>
          <td>タスクCの内容です</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoTable;
