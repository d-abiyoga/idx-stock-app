import { useState } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import { Link } from 'react-router-dom';

interface IUser {
  googleId: number;
  displayName: string;
  portofolio?: object[];
}

export const Dashboard = () => {
  const [user, setUser] = useState<IUser>();
  useUserProfile((data: IUser) => setUser(data));
  return (
    <main>
      <h1>Dashboard</h1>
      {user ? (
        <p>Welcome {user.displayName}</p>
      ) : (
        <p>
          Please <Link to="/login">login</Link> first
        </p>
      )}
    </main>
  );
};
