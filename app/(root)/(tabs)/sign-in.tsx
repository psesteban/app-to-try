import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSignIn = (data: SignInFormData) => {
    console.log("Sign In Data:", data);
    // Aquí puedes manejar la autenticación
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title} variant="headlineLarge">
          Hola! 😊
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Ingresa con tu correo de la Fundación
        </Text>
      </View>

      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email de la Fundación es necesario",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Ingresa un mail valido",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.email}
              style={styles.input}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.password}
              style={styles.input}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        <Button
          mode="contained"
          onPress={handleSubmit(onSignIn)}
          style={styles.button}
        >
          Entra
        </Button>

        <Button mode="text" onPress={() => console.log("Navigate to Sign Up")}>
          No tienes una cuenta o contraseña aún?
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6b6b6b",
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
});

export default SignIn;
