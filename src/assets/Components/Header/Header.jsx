import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <a href="/">Home</a>
                {/* <a href="/chandu">Chandu</a> */}
                <Link to="/chandu">Chandu</Link>
                <Link to="/users">Users</Link>
                <Link to="/users02">Users02</Link>
            </nav>
        </div>
    );
};

export default Header;