import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'

// we have seen that in our customReact it worked but not here
// the reason is we are using render here but the properties name can be different which we have 
// created
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// to achieve this react have property
// if you want to pass external values so we can doo
const userName=" abrar";
const anotherElement=React.createElement("a",{href:"https://google.com"},"click me here"," hahaha",userName )

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
)

