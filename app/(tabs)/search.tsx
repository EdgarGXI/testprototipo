"use client";

import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { CategoryPill } from "@/components/CategoryPill";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ProductCard } from "@/components/ui/ProductCard";
import { TextInput } from "@/components/ui/TextInput";

const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "textbooks", name: "Textbooks" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "clothing", name: "Clothing" },
  { id: "tickets", name: "Tickets" },
  { id: "services", name: "Services" },
];

const PRODUCTS = [
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
  {
    id: "8",
    title: "Mini Fridge",
    price: 95,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.1,
    seller: "Sam T.",
    university: "Princeton",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Search</ThemedText>
        <TouchableOpacity style={styles.filterButton}>
          <IconSymbol name="slider.horizontal.3" size={20} color="#5E17EB" />
          <ThemedText style={styles.filterText}>Filters</ThemedText>
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        {CATEGORIES.map((category) => (
          <CategoryPill
            key={category.id}
            name={category.name}
            isSelected={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView>

      <ThemedView style={styles.sortContainer}>
        <ThemedText>Sort by:</ThemedText>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "recent" && styles.sortButtonActive,
          ]}
          onPress={() => setSortBy("recent")}
        >
          <ThemedText
            style={
              sortBy === "recent" ? styles.sortTextActive : styles.sortText
            }
          >
            Recent
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "price" && styles.sortButtonActive,
          ]}
          onPress={() => setSortBy("price")}
        >
          <ThemedText
            style={sortBy === "price" ? styles.sortTextActive : styles.sortText}
          >
            Price
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "rating" && styles.sortButtonActive,
          ]}
          onPress={() => setSortBy("rating")}
        >
          <ThemedText
            style={
              sortBy === "rating" ? styles.sortTextActive : styles.sortText
            }
          >
            Rating
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item.id)}
            style={styles.productCard}
          />
        )}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productList}
      />
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
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterText: {
    marginLeft: 4,
    fontWeight: "500",
  },
  searchInput: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 8,
  },
  sortButtonActive: {
    backgroundColor: "#5E17EB",
  },
  sortText: {
    color: "#6E6E6E",
  },
  sortTextActive: {
    color: "white",
    fontWeight: "500",
  },
  productList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  productRow: {
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 16,
  },
});
