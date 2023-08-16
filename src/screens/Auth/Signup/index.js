import { useDispatch, useSelector } from 'react-redux';

import { AuthComponent } from '../../../components';
import { signup } from '../../../store/thunks/authThunk';
import { clearError } from '../../../store/slices/authSlice';

export const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isError, error } = useSelector((state) => state.user);

  const handleSignup = ({ username, password }) => {
    dispatch(signup({ username, password }));
  };

  return (
    <AuthComponent
      btnText="Signup"
      authHandler={handleSignup}
      navigate={() => {
        dispatch(clearError());
        navigation.navigate('Login');
      }}
      switchAuthScreenBtnText="Already registred? Login"
      screenTitle="Register"
      error={error}
      isError={isError}
    />
  );
};
