import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = ({ productCount, salesCount }) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item"><NavLink exact activeClassName={"nav-link active"} className={"nav-link"} to='/'>Home</NavLink></li>
            <li className="nav-item"><NavLink exact activeClassName={"nav-link active"} className={"nav-link"} to='/products'>Products <span className="badge badge-primary">{productCount}</span></NavLink></li>
            <li className="nav-item"><NavLink activeClassName={"nav-link active"} className={"nav-link"} to='/products/sales'>Sales <span className="badge badge-primary">{salesCount}</span></NavLink></li>
            <li className="nav-item"><NavLink activeClassName={"nav-link active"} className={"nav-link"} to='/products/create'>Create</NavLink></li>
        </ul>
    )
}

export default Nav