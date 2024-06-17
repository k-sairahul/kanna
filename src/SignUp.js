import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore, adminEmails } from './firebase';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!year) {
      setError('Please select your year');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Determine user role
      const role = adminEmails.includes(email) ? 'admin' : 'user';

      // Assign role and year to the user in Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        role: role,
        year: year === 'PUC1' ? 'p1' : 'p2'
      });

      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Failed to sign up');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <div className="form-group">
          <label>Select your year:</label>
          <div>
            <label>
              <input
                type="radio"
                value="PUC1"
                checked={year === 'PUC1'}
                onChange={(e) => setYear(e.target.value)}
              />
              PUC1
            </label>
            <label>
              <input
                type="radio"
                value="PUC2"
                checked={year === 'PUC2'}
                onChange={(e) => setYear(e.target.value)}
              />
              PUC2
            </label>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login" className="login-link">Already have an account? Login</Link>
    </div>
  );
};

export default SignUp;
