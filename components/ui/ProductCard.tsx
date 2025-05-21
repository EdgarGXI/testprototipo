import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

type ProductCardProps = {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    seller: string;
    university: string;
  };
  onPress: () => void;
  style?: ViewStyle;
};

export function ProductCard({ product, onPress, style }: ProductCardProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={product.image} style={styles.image} contentFit="cover" />

      <ThemedView style={styles.content}>
        <ThemedText numberOfLines={1} style={styles.title}>
          {product.title}
        </ThemedText>

        <ThemedText style={styles.price}>${product.price}</ThemedText>

        <ThemedView style={styles.ratingContainer}>
          <IconSymbol name="house.fill" size={14} color="#FFD700" />
          <ThemedText style={styles.rating}>{product.rating}</ThemedText>
        </ThemedView>

        <ThemedText numberOfLines={1} style={styles.seller}>
          {product.seller} • {product.university}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#E0E0E0",
  },
  content: {
    padding: 12,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    color: "#5E17EB",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#6E6E6E",
  },
  seller: {
    fontSize: 12,
    color: "#6E6E6E",
  },
});
