import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul class='flex'>
            <li class='px-4'>
                <Link to='/'>Home</Link>
            </li>
            <li class='px-4'>
                <Link to='/reactvtable'>React_V_Table</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation