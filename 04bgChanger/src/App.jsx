import { useState } from "react"

function App() {
  const  [color, setColor] = useState("gray")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}
        >
          <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="border-2 border-black flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
              <button onClick={() => setColor("red")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-red-400"
              style={{backgroundColor: "red"}}>Red</button>
              <button onClick={() => setColor("green")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-green-400"
              style={{backgroundColor: "green"}}>Green</button>
              <button onClick={() => setColor("yellow")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-yellow-400"
              style={{backgroundColor: "yellow"}}>Yellow</button>
              <button onClick={() => setColor("blue")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-blue-400"
              style={{backgroundColor: "blue"}}>Blue</button>
              <butto onClick={() => setColor("pink")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-pink-400"
              style={{backgroundColor: "pink"}}>Pink</butto>
              <button onClick={() => setColor("black")} className="border border-black outline-none px-4 py-1 rounded-full text-white shadow-lg shadow-black"
              style={{backgroundColor: "black"}}>Black</button>
              <button onClick={() => setColor("white")} className="border border-black px-4 py-1 rounded-full text-black shadow-lg"
              style={{backgroundColor: "white"}}>White</button>
              <button onClick={() => setColor("orange")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-orange-400"
              style={{backgroundColor: "orange"}}>Orange</button>
              <button onClick={() => setColor("violet")} className="border border-black outline-none px-4 py-1 rounded-full text-black shadow-lg shadow-violet-400"
              style={{backgroundColor: "violet"}}>Violet</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
