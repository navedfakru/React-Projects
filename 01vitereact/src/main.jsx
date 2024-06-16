import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>
        Comstom App | Chai Aur only code
      </h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blanck'
//   },
//   children: "Cleck me to visit google"
// }

const anotheruser = "chai aur code"

const ReactElement = React.createElement(
  "a",
  {href: 'https://google.com', target:'_blanck'},
  "Click me for visiting google",
  anotheruser
)

const anotherElement = (
  <a href='https://google.com' target='_blanck'>Visit Google</a>
)

function Parent() {
  return [<App />, <App />]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Parent />
)
