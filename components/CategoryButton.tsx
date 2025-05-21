import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

// Map category names to appropriate icons
const getCategoryIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "textbooks":
      return "book.fill";
    case "electronics":
      return "desktopcomputer";
    case "furniture":
      return "chair.fill";
    case "clothing":
      return "tshirt.fill";
    case "tickets":
      return "ticket.fill";
    case "services":
      return "wrench.fill";
    default:
      return "tag.fill";
  }
};

type CategoryButtonProps = {
  name: string;
  icon: string;
  onPress: () => void;
};

export function CategoryButton({ name, icon, onPress }: CategoryButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ThemedView style={styles.iconContainer}>
        <IconSymbol name={getCategoryIcon(name)} size={24} color="#5E17EB" />
      </ThemedView>
      <ThemedText style={styles.name}>{name}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
    width: 80,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F0E6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
  },
});
