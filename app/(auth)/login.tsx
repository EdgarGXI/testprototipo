"use client";

import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { TextInput } from "@/components/ui/TextInput";
import { useAuth } from "../context/auth-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn();
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/unimarket-logo.png")}
              style={styles.logo}
              contentFit="contain"
            />
            <ThemedText type="title" style={styles.appName}>
              UniMarket
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.formContainer}>
            <ThemedText type="subtitle" style={styles.welcomeText}>
              Welcome Back!
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Login to continue buying and selling on campus
            </ThemedText>

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={
                <IconSymbol name="house.fill" size={20} color="#6E6E6E" />
              }
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              leftIcon={
                <IconSymbol name="house.fill" size={20} color="#6E6E6E" />
              }
              style={styles.input}
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Link href="/(auth)/forgot-password">
                <ThemedText type="link">Forgot Password?</ThemedText>
              </Link>
            </TouchableOpacity>

            <Button onPress={handleLogin} style={styles.loginButton}>
              <ThemedText style={styles.loginButtonText}>Login</ThemedText>
            </Button>

            <ThemedView style={styles.divider}>
              <ThemedView style={styles.dividerLine} />
              <ThemedText style={styles.dividerText}>OR</ThemedText>
              <ThemedView style={styles.dividerLine} />
            </ThemedView>

            <ThemedView style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <IconSymbol name="house.fill" size={24} color="#4285F4" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <IconSymbol name="house.fill" size={24} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <IconSymbol name="house.fill" size={24} color="#000000" />
              </TouchableOpacity>
            </ThemedView>

            <ThemedView style={styles.signupContainer}>
              <ThemedText>Don't have an account? </ThemedText>
              <Link href="/(auth)/signup">
                <ThemedText type="link">Sign Up</ThemedText>
              </Link>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5E17EB",
  },
  formContainer: {
    paddingHorizontal: 24,
    width: "100%",
  },
  welcomeText: {
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 32,
    opacity: 0.7,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#6E6E6E",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
});
