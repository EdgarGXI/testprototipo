import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function OrderConfirmationScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedView style={styles.iconContainer}>
          <IconSymbol name="house.fill" size={60} color="#5E17EB" />
        </ThemedView>

        <ThemedText type="title" style={styles.title}>
          Order Confirmed!
        </ThemedText>

        <ThemedText style={styles.message}>
          Your order has been placed successfully. The seller has been notified
          and will contact you soon to arrange the meetup.
        </ThemedText>

        <ThemedView style={styles.orderDetails}>
          <ThemedText type="defaultSemiBold" style={styles.detailsTitle}>
            Order Details
          </ThemedText>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Order ID:</ThemedText>
            <ThemedText style={styles.detailValue}>#UM12345</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Date:</ThemedText>
            <ThemedText style={styles.detailValue}>May 21, 2025</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Total Amount:</ThemedText>
            <ThemedText style={styles.detailValue}>$51.30</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Payment Method:</ThemedText>
            <ThemedText style={styles.detailValue}>Credit Card</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.meetupInfo}>
          <ThemedText type="defaultSemiBold" style={styles.meetupTitle}>
            Meetup Information
          </ThemedText>
          <ThemedText style={styles.meetupText}>
            Location: Stanford Library, Main Entrance
          </ThemedText>
          <ThemedText style={styles.meetupText}>
            Coordinate with the seller for the exact time.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.safetyTips}>
          <ThemedText type="defaultSemiBold" style={styles.safetyTitle}>
            Safety Tips
          </ThemedText>
          <ThemedText style={styles.safetyText}>
            • Meet in a public place during daylight hours
          </ThemedText>
          <ThemedText style={styles.safetyText}>
            • Bring a friend if possible
          </ThemedText>
          <ThemedText style={styles.safetyText}>
            • Inspect the item before completing the transaction
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <Button
          style={styles.messageButton}
          onPress={() => router.push("/messages")}
        >
          <ThemedText style={styles.messageButtonText}>
            Message Seller
          </ThemedText>
        </Button>

        <Button
          style={styles.homeButton}
          onPress={() => router.replace("/(tabs)")}
        >
          <ThemedText style={styles.homeButtonText}>Back to Home</ThemedText>
        </Button>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F0E6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    marginBottom: 16,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  orderDetails: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  detailsTitle: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  detailLabel: {
    color: "#6E6E6E",
  },
  detailValue: {
    fontWeight: "500",
  },
  meetupInfo: {
    width: "100%",
    marginBottom: 24,
  },
  meetupTitle: {
    marginBottom: 8,
  },
  meetupText: {
    marginBottom: 4,
  },
  safetyTips: {
    width: "100%",
    marginBottom: 24,
  },
  safetyTitle: {
    marginBottom: 8,
  },
  safetyText: {
    marginBottom: 4,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#FFFFFF",
  },
  messageButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  messageButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  homeButtonText: {
    color: "#5E17EB",
    fontWeight: "600",
    fontSize: 16,
  },
});
