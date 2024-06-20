import { useState } from "react"
import React from 'react'

export default function Navbar(props) {
  const [text, setText] = useState('Hello this is text');
  return (
    <>
      <div><nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': 100 + 'px' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container'>

          <div className="form-check container mx-1 my-2" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.handletheme} defaultChecked />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Default
            </label>
          </div>
          <div className="form-check container mx-1 my-2" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.handletheme} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Dark
            </label>
          </div>
          <div className="form-check container mx-1 my-2" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={props.handletheme} />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Apocalypse
            </label>
          </div>
          <div className="form-check container mx-1 my-2" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={props.handletheme} />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              Autumn
            </label>
          </div>
          <div className="form-check container mx-1 my-2" >
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" onClick={props.handletheme} />
            <label className="form-check-label" htmlFor="flexRadioDefault5">
              Doom
            </label>
          </div>

        </div>
      </nav></div>
    </>
  )
}
