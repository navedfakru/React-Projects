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


const anotherusername = "chai aur dot gooogle"
const ReactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"},
  "<h1>clik to visit to goole website <h1>",
  anotherusername
)


const anotherElement = (
  <a href='https://google.com' target='_blanck'>Visit Google</a>
)

function Parent() {
  return [<App />, <App />]
}

ReactDOM.createRoot(document.getElementById('root')).render(
   ReactElement
)
