"use client";

import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
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

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    Alert.alert(
      "Reset Link Sent",
      "If an account exists with this email, you'll receive a password reset link.",
      [{ text: "OK", onPress: () => router.back() }]
    );
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
              Reset Password
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Enter your email address and we'll send you a link to reset your
              password
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

            <Button onPress={handleResetPassword} style={styles.resetButton}>
              <ThemedText style={styles.resetButtonText}>
                Send Reset Link
              </ThemedText>
            </Button>

            <TouchableOpacity
              style={styles.backToLogin}
              onPress={() => router.back()}
            >
              <ThemedText type="link">Back to Login</ThemedText>
            </TouchableOpacity>
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
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 24,
  },
  resetButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  resetButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  backToLogin: {
    alignItems: "center",
    marginBottom: 40,
  },
});
