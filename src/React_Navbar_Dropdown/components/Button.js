import React from 'react';
import '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}