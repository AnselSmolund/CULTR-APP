import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { auth } from "@/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();
  const handleAuth = async () => {
    try {
      if (isSignUp) {
        // Sign up
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Account created!");
      } else {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        router.replace("/(tabs)");
        Alert.alert("Signed in successfully!");
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          marginVertical: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          marginVertical: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
      <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={handleAuth} />
      <Text
        style={{ marginTop: 10, textAlign: "center", color: "blue" }}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
}
