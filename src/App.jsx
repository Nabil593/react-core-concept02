import React from 'react'
import Counter from "./Counter";
import Batsman from "./Batsman"

const App = () => {

  function handleClick() {
    alert('I am clicked!')
  };

  const handleClicked03 = () => {
    alert("I am Clicked-03")
  }

  const wrap = (num) => {
    const sum = num + 10;
    alert(sum);
  }

  return (
    <div>
      <Batsman />
      <Counter />

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handle02 () {
        alert("I am Clicked02");
      }}>Click Me02</button>
      <button onClick={handleClicked03}>Click Me-03</button>
      <button onClick={() => wrap(5)}>Click Me-04</button>
    </div>
  )
}

export default App;