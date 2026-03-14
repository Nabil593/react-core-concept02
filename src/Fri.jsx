import React from 'react'

const Fri = ({fr}) => {
  console.log(fr);
  const {name} = fr;
  return (
    <div>
      <h4>Name: {name}</h4>
    </div>
  )
}

export default Fri;