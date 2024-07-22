import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3>Vikas kashyap with custom fuction.</h3>
    </div>
  )
}                                                              // this will work with - <MyApp/>


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }                                                           // you can not write code like this because do not allow to render with custom code 



const anotherUser = "chai aur react"                 // you can define another data(strings) into it by just passind it's name
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser                                  // if you want to render it use it with React.createElement (reactElement)

)



const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
)                                                                             // it will work with - anotherElement

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
  reactElement
  
)
