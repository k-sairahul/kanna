import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from './firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user role and year from Firestore
      const userDoc = await getDoc(doc(firestore, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userRole = userData.role;
        const userYear = userData.year;
        setRole(userRole);
        setYear(userYear);
        console.log(`User role is: ${userRole}`);
        console.log(`User year is: ${userYear}`);
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (role) {
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'user') {
        navigate('/');
      } else {
        console.error('Unknown role:', role);
      }
    }
  }, [role, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup" className="signup-link">Sign Up</Link>
    </div>
  );
};

export default Login;
