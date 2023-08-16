import { useDispatch, useSelector } from 'react-redux';

import { AuthComponent } from '../../../components';
import { loginUser } from '../../../store/thunks/authThunk';
import { clearError } from '../../../store/slices/authSlice';

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, error, isError } = useSelector((state) => state.user);

  const handleLogin = ({ username, password }) => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <AuthComponent
      btnText="Login"
      authHandler={handleLogin}
      loading={isLoading}
      navigate={() => {
        dispatch(clearError());
        navigation.navigate('Signup');
      }}
      switchAuthScreenBtnText="New User? Signup"
      screenTitle="Login"
      error={error}
      isError={isError}
    />
  );
};
