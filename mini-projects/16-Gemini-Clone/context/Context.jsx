import { createContext, useState } from 'react'
import runChat from '../config/gemini'

export const Context = createContext()

const ContextProvider = (props) => {
  const [recentPrompt, setRecentPrompt] = useState('')
  const [prevPrompts, setPrevPrompts] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState('')

  const delayPara = (index, nextWord) => {
    setTimeout(function(){
      setResultData(prev=>prev+nextWord)
    },75*index)
  }

  const onSent = async (prompt) => {
    const response = await runChat(prompt)
    let responseArray = response.split('**')
    let newResponse
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i]
      } else {
        newResponse += '<b>' + responseArray[i] + '</b>'
      }
    }
    let newResponse2= newResponse.split('*').join('</br>')
    let newResponseArray=newResponse2.split(' ')
    for(let i=0;i<newResponseArray.length;i++) {
      const nextWord=newResponseArray[i]
      delayPara(i,nextWord+' ')
    }
    setLoading(false)
  }

  onSent('what is react js')

  const contextValue = { 
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
