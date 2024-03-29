import { useState } from 'react'
import data from './data'
import List from './List'
import "./index.css"

function BirthdayBuddy() {
  const [people, setPeople] = useState(data)
  console.log(people)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button type='button' className='btn btn-block' onClick={()=> setPeople([])}>clear all</button>
      </section>
    </main>
  )
}
export default BirthdayBuddy
