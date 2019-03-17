import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = ({ productCount, salesCount }) => {

    return (
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products ({productCount})</NavLink>
            <NavLink to='/products/sales'>Sales ({salesCount})</NavLink>
            <NavLink to='/products/create'>Create</NavLink>
        </ul>
    )
}

export default Nav