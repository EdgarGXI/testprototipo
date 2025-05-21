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

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const { signIn } = useAuth();

  const handleSignup = () => {
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <IconSymbol name="chevron.right" size={24} color="#5E17EB" />
          </TouchableOpacity>

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
              Create Account
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Join the campus marketplace community
            </ThemedText>

            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              leftIcon={
                <IconSymbol name="house.fill" size={20} color="#6E6E6E" />
              }
              style={styles.input}
            />

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

            <TextInput
              placeholder="University"
              value={university}
              onChangeText={setUniversity}
              leftIcon={
                <IconSymbol name="house.fill" size={20} color="#6E6E6E" />
              }
              style={styles.input}
            />

            <Button onPress={handleSignup} style={styles.signupButton}>
              <ThemedText style={styles.signupButtonText}>
                Create Account
              </ThemedText>
            </Button>

            <ThemedView style={styles.termsContainer}>
              <ThemedText style={styles.termsText}>
                By signing up, you agree to our{" "}
                <ThemedText type="link">Terms of Service</ThemedText> and{" "}
                <ThemedText type="link">Privacy Policy</ThemedText>
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.loginContainer}>
              <ThemedText>Already have an account? </ThemedText>
              <Link href="/(auth)/login">
                <ThemedText type="link">Login</ThemedText>
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
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    transform: [{ rotate: "180deg" }],
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  appName: {
    fontSize: 26,
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
    marginBottom: 24,
    opacity: 0.7,
  },
  input: {
    marginBottom: 16,
  },
  signupButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  termsContainer: {
    marginBottom: 24,
  },
  termsText: {
    textAlign: "center",
    fontSize: 14,
    opacity: 0.7,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
});
