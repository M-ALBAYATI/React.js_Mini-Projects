/* eslint-disable no-unused-vars */
import { useState } from 'react'
import data from './data'
import Questions from './Questions'
import './index.css'

const AppQuestions = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}
export default AppQuestions
