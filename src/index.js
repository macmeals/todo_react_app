import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App" // App → { App } へ変更

import reportWebVitals from "./reportWebVitals"

// この部分でAppからDOM生成してrootを指定しています。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
