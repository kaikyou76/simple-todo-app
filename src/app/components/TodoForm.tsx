"use client";
import React from 'react'

const TodoForm = () => {
  return (
    <form className='flex flex-col w-full'>
        <label>タイトル</label>
        <input type="text" className='border-2 rounded-lg p-1' />
        <label>内容</label>
        <input type="text" className='border-2 rounded-lg p-1' />
        <div className='flex space-x-4 mt-4'>
            <button type='submit' className='bg-black text-white rounded-lg w-full p-1'>
                登録
            </button>
            <button type='reset' className='bg-white text-black border-2 border-black/30 rounded-lg w-full p-1'>
                リセット
            </button>
        </div>
    </form>
  )
}

export default TodoForm