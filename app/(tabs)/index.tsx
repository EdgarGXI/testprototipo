"use client";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { CategoryButton } from "@/components/CategoryButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ProductCard } from "@/components/ui/ProductCard";
import { TextInput } from "@/components/ui/TextInput";

const CATEGORIES = [
  { id: "1", name: "Textbooks", icon: "book.fill" },
  { id: "2", name: "Electronics", icon: "deskcomputer" },
  { id: "3", name: "Furniture", icon: "chair.fill" },
  { id: "4", name: "Clothing", icon: "tshirt.fill" },
  { id: "5", name: "Tickets", icon: "ticket.fill" },
  { id: "6", name: "Services", icon: "wrench.fill" },
];

const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Calculus Textbook",
    price: 45,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.5,
    seller: "Alex M.",
    university: "Stanford",
  },
  {
    id: "2",
    title: "MacBook Pro 2021",
    price: 1200,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    seller: "Jamie L.",
    university: "UCLA",
  },
  {
    id: "3",
    title: "Desk Lamp",
    price: 25,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.2,
    seller: "Taylor S.",
    university: "MIT",
  },
];

const RECENT_PRODUCTS = [
  {
    id: "4",
    title: "Dorm Refrigerator",
    price: 80,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.0,
    seller: "Chris P.",
    university: "NYU",
  },
  {
    id: "5",
    title: "Scientific Calculator",
    price: 35,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
    seller: "Morgan W.",
    university: "Berkeley",
  },
  {
    id: "6",
    title: "Desk Chair",
    price: 65,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.3,
    seller: "Jordan K.",
    university: "Harvard",
  },
  {
    id: "7",
    title: "Psychology Textbook",
    price: 50,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
    seller: "Riley B.",
    university: "Columbia",
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.header}>
          <ThemedView style={styles.locationContainer}>
            <IconSymbol name="mappin.and.ellipse" size={20} color="#5E17EB" />
            <ThemedText style={styles.locationText}>
              Stanford University
            </ThemedText>
            <IconSymbol
              name="chevron.right"
              size={16}
              color="#5E17EB"
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </ThemedView>

          <TouchableOpacity style={styles.notificationButton}>
            <IconSymbol name="bell.fill" size={24} color="#5E17EB" />
          </TouchableOpacity>
        </ThemedView>

        <TextInput
          placeholder="Search for items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          leftIcon={
            <IconSymbol name="magnifyingglass" size={20} color="#6E6E6E" />
          }
          style={styles.searchInput}
        />

        <ThemedView style={styles.categoriesContainer}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Categories</ThemedText>
            <TouchableOpacity>
              <ThemedText type="link">See All</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CategoryButton
                name={item.name}
                icon={item.icon}
                onPress={() => router.push("/search")}
              />
            )}
            contentContainerStyle={styles.categoriesList}
          />
        </ThemedView>

        <ThemedView style={styles.featuredContainer}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Featured Items</ThemedText>
            <TouchableOpacity>
              <ThemedText type="link">See All</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <FlatList
            data={FEATURED_PRODUCTS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => handleProductPress(item.id)}
                style={styles.featuredCard}
              />
            )}
            contentContainerStyle={styles.featuredList}
          />
        </ThemedView>

        <ThemedView style={styles.recentContainer}>
          <ThemedView style={styles.sectionHeader}>
            <ThemedText type="subtitle">Recently Added</ThemedText>
            <TouchableOpacity>
              <ThemedText type="link">See All</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedView style={styles.recentGrid}>
            {RECENT_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => handleProductPress(product.id)}
                style={styles.recentCard}
              />
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6,
    marginRight: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  categoriesList: {
    paddingLeft: 20,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  featuredList: {
    paddingLeft: 20,
  },
  featuredCard: {
    width: 180,
    marginRight: 16,
  },
  recentContainer: {
    marginBottom: 100,
  },
  recentGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  recentCard: {
    width: Dimensions.get("window").width / 2 - 28,
    marginBottom: 16,
  },
});
