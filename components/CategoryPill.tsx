import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";

type CategoryPillProps = {
  name: string;
  isSelected: boolean;
  onPress: () => void;
};

export function CategoryPill({ name, isSelected, onPress }: CategoryPillProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
    >
      <ThemedText style={[styles.text, isSelected && styles.selectedText]}>
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    marginRight: 10,
  },
  selectedContainer: {
    backgroundColor: "#5E17EB",
  },
  text: {
    color: "#6E6E6E",
  },
  selectedText: {
    color: "white",
    fontWeight: "500",
  },
});
