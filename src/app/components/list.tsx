import React from 'react'

interface DataProps {
    id: number,
    title: string,
    body: string
    handleDelete: () => void
    handleEdit: () => void
}

const List = (props: DataProps) => {
    const { title, body, handleDelete, handleEdit } = props
    return (
        <div className='bg-slate-300 p-2 px-4 rounded-md flex justify-between gap-2'>
            <div>
                <h4 className='text-black font-bold font-serif'>{title}</h4>
                <p className='text-gray-500 text-sm mt-2 font-sans'>{body}</p>
            </div>
            <div className='flex flex-row gap-4'>
                <button className='bg-gray-500 text-white font-bold p-2 rounded-md w-16 h-12 cursor-pointer' onClick={handleEdit}>Edit</button>
                <button className='bg-gray-700 text-white font-bold p-2 rounded-md w-16 h-12 cursor-pointer' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default List