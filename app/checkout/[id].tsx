"use client";

import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { TextInput } from "@/components/ui/TextInput";

const PRODUCT_DATA = {
  "1": {
    id: "1",
    title: "Calculus Textbook",
    price: 45,
    image: "/placeholder.svg?height=200&width=200",
    seller: "Alex M.",
  },
  "2": {
    id: "2",
    title: "MacBook Pro 2021",
    price: 1200,
    image: "/placeholder.svg?height=200&width=200",
    seller: "Jamie L.",
  },
};

const PAYMENT_METHODS = [
  { id: "card", name: "Credit Card", icon: "creditcard.fill" },
  { id: "paypal", name: "PayPal", icon: "dollarsign.circle.fill" },
  { id: "venmo", name: "Venmo", icon: "banknote.fill" },
];

export default function CheckoutScreen() {
  const { id } = useLocalSearchParams();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [meetupLocation, setMeetupLocation] = useState("");

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

  const handlePlaceOrder = () => {
    router.push("/order-confirmation");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="arrow.left" size={24} color="#5E17EB" />
        </TouchableOpacity>
        <ThemedText type="title">Checkout</ThemedText>
        <ThemedView style={{ width: 24 }} />
      </ThemedView>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Order Summary</ThemedText>

          <ThemedView style={styles.productCard}>
            <Image
              source={product.image}
              style={styles.productImage}
              contentFit="cover"
            />

            <ThemedView style={styles.productInfo}>
              <ThemedText type="defaultSemiBold">{product.title}</ThemedText>
              <ThemedText style={styles.sellerText}>
                Seller: {product.seller}
              </ThemedText>
              <ThemedText style={styles.priceText}>${product.price}</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Meetup Location</ThemedText>
          <TextInput
            placeholder="Enter a safe public location to meet"
            value={meetupLocation}
            onChangeText={setMeetupLocation}
            style={styles.input}
          />
          <ThemedText style={styles.safetyTip}>
            Safety Tip: Always meet in a public place like a campus library or
            coffee shop.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Payment Method</ThemedText>

          {PAYMENT_METHODS.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.paymentOption,
                selectedPayment === method.id && styles.selectedPayment,
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <IconSymbol name={method.icon as any} size={24} color="#5E17EB" />
              <ThemedText style={styles.paymentText}>{method.name}</ThemedText>

              <ThemedView style={styles.radioButton}>
                {selectedPayment === method.id && (
                  <ThemedView style={styles.radioButtonInner} />
                )}
              </ThemedView>
            </TouchableOpacity>
          ))}
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Order Details</ThemedText>

          <ThemedView style={styles.detailRow}>
            <ThemedText>Item Price</ThemedText>
            <ThemedText>${product.price.toFixed(2)}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText>Service Fee</ThemedText>
            <ThemedText>${(product.price * 0.05).toFixed(2)}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.detailRow}>
            <ThemedText>Tax</ThemedText>
            <ThemedText>${(product.price * 0.08).toFixed(2)}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.totalRow}>
            <ThemedText type="defaultSemiBold">Total</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.totalPrice}>
              $
              {(
                product.price +
                product.price * 0.05 +
                product.price * 0.08
              ).toFixed(2)}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>

      <ThemedView style={styles.footer}>
        <Button style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <ThemedText style={styles.placeOrderText}>Place Order</ThemedText>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  sellerText: {
    color: "#6E6E6E",
    fontSize: 14,
    marginTop: 4,
  },
  priceText: {
    color: "#5E17EB",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 4,
  },
  input: {
    marginTop: 12,
  },
  safetyTip: {
    color: "#FF9500",
    fontSize: 14,
    marginTop: 8,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  },
  selectedPayment: {
    borderColor: "#5E17EB",
    borderWidth: 2,
  },
  paymentText: {
    flex: 1,
    marginLeft: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#5E17EB",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5E17EB",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  totalPrice: {
    color: "#5E17EB",
    fontSize: 18,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    backgroundColor: "#FFFFFF",
  },
  placeOrderButton: {
    backgroundColor: "#5E17EB",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  placeOrderText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
