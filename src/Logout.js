// src/Logout.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
