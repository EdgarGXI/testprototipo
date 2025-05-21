"use client";

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

const CATEGORIES = [
  { id: "textbooks", name: "Textbooks" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "clothing", name: "Clothing" },
  { id: "tickets", name: "Tickets" },
  { id: "services", name: "Services" },
];

export default function CreateListingScreen() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");

  const handleCreateListing = () => {
    Alert.alert("Listing Created", "Your item has been listed successfully!", [
      { text: "OK", onPress: () => router.replace("/(tabs)") },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Create Listing</ThemedText>
        </ThemedView>

        <ThemedView style={styles.imageSection}>
          <TouchableOpacity style={styles.addImageButton}>
            <IconSymbol name="house.fill" size={32} color="#5E17EB" />
            <ThemedText style={styles.addImageText}>Add Photos</ThemedText>
            <ThemedText style={styles.imageLimit}>(Up to 5 photos)</ThemedText>
          </TouchableOpacity>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.previewScroll}
          >
            <ThemedView style={styles.imagePlaceholder}>
              <IconSymbol name="house.fill" size={24} color="#CCCCCC" />
            </ThemedView>
            <ThemedView style={styles.imagePlaceholder}>
              <IconSymbol name="house.fill" size={24} color="#CCCCCC" />
            </ThemedView>
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.formContainer}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Item Details
          </ThemedText>

          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <TextInput
            placeholder="Price ($)"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            style={styles.textArea}
          />

          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Category
          </ThemedText>

          <ThemedView style={styles.categoryContainer}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryButton,
                  category === cat.id && styles.categoryButtonActive,
                ]}
                onPress={() => setCategory(cat.id)}
              >
                <ThemedText
                  style={
                    category === cat.id
                      ? styles.categoryTextActive
                      : styles.categoryText
                  }
                >
                  {cat.name}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ThemedView>

          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Condition
          </ThemedText>

          <ThemedView style={styles.conditionContainer}>
            {["New", "Like New", "Good", "Fair", "Poor"].map((cond) => (
              <TouchableOpacity
                key={cond}
                style={[
                  styles.conditionButton,
                  condition === cond && styles.conditionButtonActive,
                ]}
                onPress={() => setCondition(cond)}
              >
                <ThemedText
                  style={
                    condition === cond
                      ? styles.conditionTextActive
                      : styles.conditionText
                  }
                >
                  {cond}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ThemedView>

          <Button onPress={handleCreateListing} style={styles.createButton}>
            <ThemedText style={styles.createButtonText}>
              Create Listing
            </ThemedText>
          </Button>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  imageSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  addImageButton: {
    height: 150,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  addImageText: {
    color: "#5E17EB",
    fontWeight: "600",
    marginTop: 8,
  },
  imageLimit: {
    color: "#6E6E6E",
    fontSize: 14,
    marginTop: 4,
  },
  previewScroll: {
    flexDirection: "row",
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 16,
  },
  textArea: {
    marginBottom: 24,
    height: 120,
    textAlignVertical: "top",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    marginRight: 12,
    marginBottom: 12,
  },
  categoryButtonActive: {
    backgroundColor: "#5E17EB",
  },
  categoryText: {
    color: "#6E6E6E",
  },
  categoryTextActive: {
    color: "white",
    fontWeight: "500",
  },
  conditionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 32,
  },
  conditionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    marginRight: 12,
    marginBottom: 12,
  },
  conditionButtonActive: {
    backgroundColor: "#5E17EB",
  },
  conditionText: {
    color: "#6E6E6E",
  },
  conditionTextActive: {
    color: "white",
    fontWeight: "500",
  },
  createButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
