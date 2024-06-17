import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = ({ children, isAdminRoute }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = React.useState(null);
  const [fetchingRole, setFetchingRole] = React.useState(true);

  React.useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(firestore, 'users', user.uid));
          if (userDoc.exists()) {
            setRole(userDoc.data().role);
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        } finally {
          setFetchingRole(false);
        }
      } else {
        setFetchingRole(false);
      }
    };

    fetchUserRole();
  }, [user]);

  if (loading || fetchingRole) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdminRoute && role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
