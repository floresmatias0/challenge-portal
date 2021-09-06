import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Rating/>
      <Buttons/>
    </div>
  );
}
const Rating = () => {

  const [start,setStart] = useState(0)

  return (
    <>
    {start === 0 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)}>*</span>
        <span onClick={() => setStart(2)}>*</span>
        <span onClick={() => setStart(3)}>*</span>
        <span onClick={() => setStart(4)}>*</span>
        <span onClick={() => setStart(5)}>*</span>
      </div>
    ): start === 1 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)} className="active">*</span>
        <span onClick={() => setStart(2)}>*</span>
        <span onClick={() => setStart(3)}>*</span>
        <span onClick={() => setStart(4)}>*</span>
        <span onClick={() => setStart(5)}>*</span>
      </div>
    ): start === 2 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)} className="active">*</span>
        <span onClick={() => setStart(2)} className="active">*</span>
        <span onClick={() => setStart(3)}>*</span>
        <span onClick={() => setStart(4)}>*</span>
        <span onClick={() => setStart(5)}>*</span>
      </div>
    ): start === 3 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)} className="active">*</span>
        <span onClick={() => setStart(2)} className="active">*</span>
        <span onClick={() => setStart(3)} className="active">*</span>
        <span onClick={() => setStart(4)}>*</span>
        <span onClick={() => setStart(5)}>*</span>
      </div>
    ): start === 4 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)} className="active">*</span>
        <span onClick={() => setStart(2)} className="active">*</span>
        <span onClick={() => setStart(3)} className="active">*</span>
        <span onClick={() => setStart(4)} className="active">*</span>
        <span onClick={() => setStart(5)}>*</span>
      </div>
    ): start === 5 ? (
      <div id='rating'>
        <span onClick={() => setStart(1)} className="active">*</span>
        <span onClick={() => setStart(2)} className="active">*</span>
        <span onClick={() => setStart(3)} className="active">*</span>
        <span onClick={() => setStart(4)} className="active">*</span>
        <span onClick={() => setStart(5)} className="active">*</span>
      </div>
    ):("")}
    </>
  )
}

const Buttons = () => {
  const [showText,setShowText] = useState({
    value:"",
    state: false
  })

  return (
    <>
    <button id="button1" onClick={() => setShowText({value: 1, state: true})}>First button</button>
    <button id="button2" onClick={() => setShowText({value: 2, state: true})}>Second button</button>
    {showText && showText.value === 2 && showText.state ? (
      <ViewText>Segundo Boton</ViewText>
      ) : showText.value === 1 && showText.state ? (
        <ViewText>Primer Boton</ViewText>
      ): ""}
    </>
  )
}

const ViewText = ({ children }) => {
  const portalText = document.createElement('div')
  portalText.setAttribute('id','tooltip')

  useEffect(() => {
    document.body.appendChild(portalText)

    return () => portalText.remove()
  },[portalText])

  return ReactDOM.createPortal(children, portalText)
}

export default App;
