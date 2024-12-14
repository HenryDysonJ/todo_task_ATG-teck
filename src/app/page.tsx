/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { FormEvent, useEffect, useState } from "react";
import FormComponent from "./components/form";
import List from "./components/list";

interface FormValue {
  id?: number
  title: string
  body: string
}

export default function Home() {

  const [fetchData, setFetchData] = useState<any[]>([])
  const [formValue, setFormValue] = useState<FormValue>({ body: "", title: "" })

  const handleChange = (key: string, val: string) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: val
    }))
  }
  console.log(fetchData, "fetchData");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newData = {
      id: Math.random(),
      ...formValue
    }
    if (formValue?.id) {
      setFetchData((prev) => prev.map((item) =>
        item.id === formValue.id ? { ...item, ...formValue } : item
      ));
    } else {
      setFetchData((prev) => [newData, ...prev,]);
    }
    setFormValue({ body: "", title: "" })
  }

  const handleEditItems = (id: number) => {
    const findItem = fetchData?.find((item) => item.id === id)
    setFormValue(findItem)
  }

  const handleDeleteItems = (id: number) => {
    const deleteId = fetchData?.filter((item) => item.id !== id)
    setFetchData(deleteId)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setFetchData(res.splice(0,10,1)))
  }, [])
  return (
    <div className="grid items-start justify-items-center min-h-screen p-2 px-16 pb-10 gap-1">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} formValue={formValue} />
        <div className="flex flex-col gap-4 h-[60vh] overflow-auto">
          {
            fetchData.length > 0 && fetchData.map((item) => (
              <List body={item.body} title={item.title} id={item.id} key={item.id}
                handleDelete={() => handleDeleteItems(item.id)}
                handleEdit={() => handleEditItems(item.id)} />
            ))
          }
        </div>
      </main>
    </div>
  );
}
