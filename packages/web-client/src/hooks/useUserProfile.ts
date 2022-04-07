import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const useUserProfile = (cb: Function) => {
  useEffect(() => {
    const effect = async () => {
      const cookieJwt = Cookies.get('x-auth-cookie') as string;
      try {
        const headers = {
          'Content-type': 'application/json',
          Authorization: `Bearer ${cookieJwt}`,
        };
        const result = await axios.get('http://localhost:3001/user/profile', {
          headers,
        });
        cb(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    effect();
  }, []);
};
