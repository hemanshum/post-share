import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/thunks/authThunk';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome {username}</Text>
      <Button
        style={styles.button}
        icon="logout"
        mode="contained"
        onPress={handleLogout}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    marginTop: 24,
  },
});
