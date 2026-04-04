import React, { use } from 'react';

const Users02 = ({usrPromise}) => {

    const useData  = use(usrPromise);
    console.log(useData);
    return (
        <div>
            <h1>Second Useers-02!!</h1>
        </div>
    );
};

export default Users02;