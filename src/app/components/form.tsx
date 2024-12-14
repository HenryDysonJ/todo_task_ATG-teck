import React, { FormEvent } from 'react'

interface FormProps {
    handleSubmit: (e: FormEvent) => void
    handleChange: (key: string, val: string) => void
    formValue: { title: string, body: string, id?: number }

}

const FormComponent = (props: FormProps) => {
    const { handleChange, handleSubmit, formValue } = props;

    return (
        <div className='w-1/2 flex justify-center items-center bg-slate-300 p-4 rounded-md'>
            <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
                <p className='text-lg text-gray-600 font-bold font-serif'>Tittle</p>
                <input className='bg-slate-400 p-4 border-r-2 rounded-lg w-full' value={formValue.title} placeholder='title' onChange={(e) => handleChange('title', e.target.value)} />
                <p className='text-lg text-gray-600 font-bold font-serif'>Description</p>
                <input className='bg-slate-400 p-4 border-r-2 rounded-lg w-full' value={formValue.body} placeholder='body' onChange={(e) => handleChange('body', e.target.value)} />
                <button className='w-full bg-slate-600 text-white font-bold p-4 rounded-md mt-3' type='submit'>{formValue.id ? "Update" : "Submit"}</button>
            </form>
        </div>
    )
}

export default FormComponent