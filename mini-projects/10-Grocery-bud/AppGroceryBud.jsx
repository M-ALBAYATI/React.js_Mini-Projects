import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import './index.css'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const AppGroceryBud = () => {
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to the list')
  }

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId)
    setItems(newItem)
    setLocalStorage(newItem)
    toast.success('item deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      } else {
        return item
      }
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  )
}
export default AppGroceryBud
