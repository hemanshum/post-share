import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthComponent = ({
  btnText,
  authHandler,
  navigate,
  switchAuthScreenBtnText,
  screenTitle,
  loading,
  error,
  isError,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    authHandler({ username, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall">Welcome</Text>
      <Text variant="headlineMedium">⚛️ PostShare</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle} variant="titleLarge">
          {screenTitle}
        </Text>
        <TextInput
          label="Username"
          value={username}
          error={isError}
          onChangeText={setUsername}
        />
        <TextInput
          label="Password"
          value={password}
          error={isError}
          onChangeText={setPassword}
        />
        <Button
          icon="login"
          mode="contained"
          loading={loading}
          uppercase
          contentStyle={{ paddingVertical: 8 }}
          style={{ borderRadius: 4, marginTop: 8 }}
          onPress={handleAuth}
        >
          {btnText}
        </Button>
        <Button
          icon="account-arrow-right"
          mode="text"
          contentStyle={{ paddingVertical: 8 }}
          style={{ borderRadius: 4, marginTop: 8 }}
          onPress={navigate}
        >
          {switchAuthScreenBtnText}
        </Button>
        <HelperText style={styles.error} type="error" visible={isError}>
          {error}
        </HelperText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: 16,
    width: '80%',
  },
  formTitle: {
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  error: {
    textAlign: 'center',
  },
});
