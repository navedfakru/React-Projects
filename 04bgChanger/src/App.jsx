import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive');
  const colors = [
    "blue", "red", "green", "yellow",
    "orange", "purple", "pink", "brown",
    "cyan", "magenta", "lime", "teal",
    "indigo", "violet", "gold", "silver",
    "maroon", "navy", "olive", "turquoise",
    "beige", "coral", "lavender", "salmon",
    "plum", "orchid", "crimson", "skyblue",
    "azure",
    "chocolate", "sienna", "khaki", "slategray",
    "peru", "rosybrown", "seagreen", "firebrick"
  ];

  function bgColor(color) {
    setColor(color)
  }
  return (
    <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color
      }}
    >
      <div className="fixed left-0 bg-white px-5 m-5 py-5 rounded-xl bottom-2 top-2 overflow-hidden">
        <div className="overflow-auto h-full">
          <div className="flex flex-col justify-center shadow-lg">

            {
              colors.map((item) => (
                <button key={item} onClick={() => bgColor(item)}
                  className="px-5 m-1 py-2 text-xl font-semibold rounded-xl shadow-xl"
                  style={{
                    backgroundColor: item
                  }}
                >{item}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
