"use client";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useAuth } from "../context/auth-context";

const MENU_ITEMS = [
  { id: "listings", title: "My Listings", icon: "tag.fill" },
  { id: "purchases", title: "My Purchases", icon: "bag.fill" },
  { id: "saved", title: "Saved Items", icon: "heart.fill" },
  { id: "reviews", title: "Reviews", icon: "star.fill" },
  { id: "payments", title: "Payment Methods", icon: "creditcard.fill" },
  { id: "settings", title: "Settings", icon: "gearshape.fill" },
  { id: "help", title: "Help & Support", icon: "questionmark.circle.fill" },
];

export default function ProfileScreen() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/login");
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Profile</ThemedText>
          <TouchableOpacity>
            <IconSymbol name="gearshape.fill" size={24} color="#5E17EB" />
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.profileSection}>
          <Image
            source="/placeholder.svg?height=150&width=150"
            style={styles.profileImage}
            contentFit="cover"
          />

          <ThemedView style={styles.profileInfo}>
            <ThemedText type="subtitle">Alex Johnson</ThemedText>
            <ThemedText style={styles.universityText}>
              Stanford University
            </ThemedText>

            <ThemedView style={styles.statsContainer}>
              <ThemedView style={styles.statItem}>
                <ThemedText type="defaultSemiBold">4.9</ThemedText>
                <ThemedText style={styles.statLabel}>Rating</ThemedText>
              </ThemedView>

              <ThemedView style={styles.statDivider} />

              <ThemedView style={styles.statItem}>
                <ThemedText type="defaultSemiBold">12</ThemedText>
                <ThemedText style={styles.statLabel}>Listings</ThemedText>
              </ThemedView>

              <ThemedView style={styles.statDivider} />

              <ThemedView style={styles.statItem}>
                <ThemedText type="defaultSemiBold">8</ThemedText>
                <ThemedText style={styles.statLabel}>Sold</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <Button style={styles.editProfileButton}>
            <ThemedText style={styles.editProfileText}>Edit Profile</ThemedText>
          </Button>
        </ThemedView>

        <ThemedView style={styles.menuContainer}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => {
                if (item.id === "purchases") {
                  router.push("/purchases");
                }
              }}
            >
              <ThemedView style={styles.menuItemLeft}>
                <IconSymbol name="plus.circle.fill" size={24} color="#5E17EB" />
                <ThemedText style={styles.menuItemText}>
                  {item.title}
                </ThemedText>
              </ThemedView>
              <IconSymbol name="chevron.right" size={20} color="#6E6E6E" />
            </TouchableOpacity>
          ))}
        </ThemedView>

        <Button style={styles.signOutButton} onPress={handleSignOut}>
          <ThemedText style={styles.signOutText}>Sign Out</ThemedText>
        </Button>
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
    marginBottom: 24,
  },
  profileSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileInfo: {
    alignItems: "center",
  },
  universityText: {
    color: "#6E6E6E",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#6E6E6E",
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 16,
  },
  editProfileButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  editProfileText: {
    color: "#5E17EB",
    fontWeight: "600",
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 100,
  },
  signOutText: {
    color: "#FF3B30",
    fontWeight: "600",
    textAlign: "center",
  },
});
