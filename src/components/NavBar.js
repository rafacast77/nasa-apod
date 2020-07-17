import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >Houston get me home</Link>
            </ul>
        </div>
    )
}