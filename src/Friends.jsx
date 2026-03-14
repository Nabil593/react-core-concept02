import React, { use } from 'react'
import Fri from "./Fri";

const Friends = ({friend}) => {
    const friendUse = use(friend);
    console.log(friendUse);
  return (
    <div>
        <h3>Friends: {friendUse.length}</h3>
        {
            friendUse.map(fri => <Fri key={fri.id} fr={fri}/>)
        }
    </div>
  )
}

export default Friends;