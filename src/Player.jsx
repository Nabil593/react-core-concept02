import React, { useEffect, useState } from 'react'

const Player = () => {

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayer(data))
    }, [])

  return (
    <div>Player: {player.length}</div>
  )
}

export default Player;