## Functions

  <li>useState : for increasing and decreasing the values</li>
  ```javascript
  function App() {
  const [counter, setCounter] = useState(0)
  const removevalue = () => {
    setCounter(counter - 1)
  }
  <button
      onClick={removevalue}
      >Remove value</button>
  ```
