import React, { Suspense } from 'react'
import Friends from './Friends';
import Player from './Player';

const featchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const App = () => {
  const featchFri = featchFriends(); 
  return (
    <div>
      <Player />
      {/* <Suspense fallback = {<h3>Friends Coming...</h3>}>
      <Friends friend = {featchFri}/>
      </Suspense> */}
    </div>
  )
}

export default App;