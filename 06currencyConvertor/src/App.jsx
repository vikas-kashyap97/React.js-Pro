import { useState } from 'react' 
import './App.css'
import InputBox from './components/InputBox' 
import useCurrencyInfo from './hooks/useCurrencyInfo' 

function App() {
  const [amount, setAmount] = useState(0) // State to hold the amount value
  const [from, setFrom] = useState("usd") // State to hold the currency to convert from
  const [to, setTo] = useState("inr") // State to hold the currency to convert to
  const [convertedAmount, setConvertedAmount] = useState(0) // State to hold the converted amount

  const currencyInfo = useCurrencyInfo(from) // Get currency information using custom hook

  const options = Object.keys(currencyInfo) // Get available currency options

  const swap = () => {
    setFrom(to) // Swap the 'from' currency with 'to' currency
    setTo(from) // Swap the 'to' currency with 'from' currency
    setConvertedAmount(amount) // Set the converted amount to the current amount
    setAmount(convertedAmount) // Set the amount to the converted amount
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // Calculate and set the converted amount
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat opacity-75"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4237471/pexels-photo-4237471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`, 
      }}
    >
      <div className="w-full"> 
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"> 
          <form
            onSubmit={(e) => {
              e.preventDefault() // Prevent default form submission
              convert() // Call convert function on form submission
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From" // Label for the first input box
                amount={amount} // Pass amount state to the input box
                currencyOptions={options} // Pass currency options to the input box
                onCurrencyChange={(currency) => setFrom(currency)} // Function to handle currency change
                selectCurrency={from} // Pass selected currency
                onAmountChange={(amount) => setAmount(amount)} // Function to handle amount change
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" 
                onClick={swap} // Call swap function on button click
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To" // Label for the second input box
                amount={convertedAmount} // Pass converted amount state to the input box
                currencyOptions={options} // Pass currency options to the input box
                onCurrencyChange={(currency) => setTo(currency)} // Function to handle currency change
                selectCurrency={to} // Pass selected currency
                amountDisable // Disable amount input for the second input box
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Button text displaying conversion direction */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App 
