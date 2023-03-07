import { useEffect, useState } from 'react';
import { postOAuthSuccess } from '../../features/authorize/authorizeSlice';
import { currentUser, fetchCurrentUser, userStatus } from '../../features/currentUser/currentUserSlice';
import { useAppSelector, useAppDispatch, useWindowDimensions } from '../../../app/hooks';
import './Profile.css';

const Profile = () => {
  const [triedGetUser, setTriedGetUser] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const status = useAppSelector(userStatus);
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (user && status !== "authorized") {
      dispatch(postOAuthSuccess());
    }

    if (!triedGetUser) {
      setTriedGetUser(true);
      dispatch(fetchCurrentUser());
    }
  }, [triedGetUser]);

  return (
    <div className="Profile container" style={{ minHeight: height }}>
      {
        status === 'loading'
          ? <h2>Loading ...</h2>
          : (
            status === 'notfound'
              ? <h2>User not found!</h2>
              : (
                !user ||
                <>
                  <h2>{user.firstName} {user.lastName}</h2>
                  <h3>{user.email}</h3>
                </>
              )

          )
      }
    </div>
  );
}

export default Profile;
