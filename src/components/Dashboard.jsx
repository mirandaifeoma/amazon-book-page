import React from 'react';
import {Navbar} from './Navbar';
import {Sidebar} from './Sidebar';
import {Body} from './Body';

export const Dashboard = ({ handleClick }) => {
  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className='flex'>
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}

