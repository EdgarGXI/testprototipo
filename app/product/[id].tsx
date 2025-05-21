"use client";

import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";

const PRODUCT_DATA = {
  "1": {
    id: "1",
    title: "Calculus Textbook",
    price: 45,
    description:
      "Calculus: Early Transcendentals, 8th Edition. In excellent condition with minimal highlighting. Perfect for MATH 101.",
    condition: "Like New",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    seller: {
      name: "Alex M.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.5,
      university: "Stanford",
      joinedDate: "Sep 2023",
    },
    location: "Stanford University",
    postedDate: "2 days ago",
  },
  "2": {
    id: "2",
    title: "MacBook Pro 2021",
    price: 1200,
    description:
      "MacBook Pro 2021, M1 Pro chip, 16GB RAM, 16GB RAM, 512GB SSD. Barely used, in perfect condition with original box and accessories.",
    condition: "Like New",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    seller: {
      name: "Jamie L.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4.8,
      university: "UCLA",
      joinedDate: "Jan 2023",
    },
    location: "UCLA Campus",
    postedDate: "1 week ago",
  },
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const product = PRODUCT_DATA[id as keyof typeof PRODUCT_DATA];

  if (!product) {
    return (
      <ThemedView style={styles.notFound}>
        <ThemedText>Product not found</ThemedText>
        <Button onPress={() => router.back()}>
          <ThemedText>Go Back</ThemedText>
        </Button>
      </ThemedView>
    );
  }

  const handleBuyNow = () => {
    router.push(`/checkout/${id}`);
  };

  const handleMessage = () => {
    router.push("/messages");
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.imageContainer}>
          <Image
            source={product.images[currentImageIndex]}
            style={styles.productImage}
            contentFit="cover"
          />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <IconSymbol name="arrow.left" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setIsSaved(!isSaved)}
          >
            <IconSymbol
              name={isSaved ? "heart.fill" : "heart"}
              size={24}
              color={isSaved ? "#FF3B30" : "#FFFFFF"}
            />
          </TouchableOpacity>

          <ThemedView style={styles.imageDots}>
            {product.images.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  index === currentImageIndex && styles.activeDot,
                ]}
                onPress={() => setCurrentImageIndex(index)}
              />
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title" style={styles.title}>
              {product.title}
            </ThemedText>
            <ThemedText type="title" style={styles.price}>
              ${product.price}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.infoRow}>
            <ThemedView style={styles.infoItem}>
              <IconSymbol name="tag.fill" size={16} color="#6E6E6E" />
              <ThemedText style={styles.infoText}>
                {product.condition}
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.infoItem}>
              <IconSymbol name="mappin.and.ellipse" size={16} color="#6E6E6E" />
              <ThemedText style={styles.infoText}>
                {product.location}
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.infoItem}>
              <IconSymbol name="calendar" size={16} color="#6E6E6E" />
              <ThemedText style={styles.infoText}>
                Posted {product.postedDate}
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Description</ThemedText>
            <ThemedText style={styles.description}>
              {product.description}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Seller</ThemedText>
            <ThemedView style={styles.sellerContainer}>
              <Image
                source={product.seller.avatar}
                style={styles.sellerAvatar}
                contentFit="cover"
              />

              <ThemedView style={styles.sellerInfo}>
                <ThemedText type="defaultSemiBold">
                  {product.seller.name}
                </ThemedText>
                <ThemedView style={styles.ratingContainer}>
                  <IconSymbol name="star.fill" size={16} color="#FFD700" />
                  <ThemedText style={styles.ratingText}>
                    {product.seller.rating}
                  </ThemedText>
                </ThemedView>
                <ThemedText style={styles.universityText}>
                  {product.seller.university}
                </ThemedText>
                <ThemedText style={styles.joinedText}>
                  Member since {product.seller.joinedDate}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>

      <ThemedView style={styles.footer}>
        <Button style={styles.messageButton} onPress={handleMessage}>
          <ThemedText style={styles.messageButtonText}>Message</ThemedText>
        </Button>

        <Button style={styles.buyButton} onPress={handleBuyNow}>
          <ThemedText style={styles.buyButtonText}>Buy Now</ThemedText>
        </Button>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDots: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  title: {
    flex: 1,
    fontSize: 24,
  },
  price: {
    color: "#5E17EB",
    fontSize: 24,
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 8,
  },
  infoText: {
    color: "#6E6E6E",
    marginLeft: 4,
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  description: {
    marginTop: 8,
    lineHeight: 22,
  },
  sellerContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  sellerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  sellerInfo: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
  universityText: {
    color: "#6E6E6E",
    fontSize: 14,
    marginTop: 4,
  },
  joinedText: {
    color: "#6E6E6E",
    fontSize: 14,
    marginTop: 4,
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#FFFFFF",
  },
  messageButton: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginRight: 12,
  },
  messageButtonText: {
    color: "#5E17EB",
    fontWeight: "600",
  },
  buyButton: {
    flex: 1,
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
