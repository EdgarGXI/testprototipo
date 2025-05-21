"use client";

import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { TextInput } from "@/components/ui/TextInput";

const MESSAGES = [
  {
    id: "1",
    user: "Alex Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    lastMessage: "Is the textbook still available?",
    time: "10:30 AM",
    unread: 2,
    product: "Calculus Textbook",
  },
  {
    id: "2",
    user: "Jamie Smith",
    avatar: "/placeholder.svg?height=100&width=100",
    lastMessage: "I can meet tomorrow at the library",
    time: "Yesterday",
    unread: 0,
    product: "MacBook Pro 2021",
  },
  {
    id: "3",
    user: "Taylor Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    lastMessage: "Would you take $20 for it?",
    time: "Yesterday",
    unread: 0,
    product: "Desk Lamp",
  },
  {
    id: "4",
    user: "Morgan Lee",
    avatar: "/placeholder.svg?height=100&width=100",
    lastMessage: "Thanks for the quick response!",
    time: "Monday",
    unread: 0,
    product: "Scientific Calculator",
  },
  {
    id: "5",
    user: "Jordan Kim",
    avatar: "/placeholder.svg?height=100&width=100",
    lastMessage: "Perfect, I'll see you at 3pm",
    time: "Sunday",
    unread: 0,
    product: "Desk Chair",
  },
];

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const renderMessageItem = ({ item }: { item: (typeof MESSAGES)[0] }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => router.push(`/chat/${item.id}`)}
    >
      <Image source={item.avatar} style={styles.avatar} contentFit="cover" />

      <ThemedView style={styles.messageContent}>
        <ThemedView style={styles.messageHeader}>
          <ThemedText type="defaultSemiBold">{item.user}</ThemedText>
          <ThemedText style={styles.timeText}>{item.time}</ThemedText>
        </ThemedView>

        <ThemedText
          numberOfLines={1}
          style={[styles.messageText, item.unread > 0 && styles.unreadText]}
        >
          {item.lastMessage}
        </ThemedText>

        <ThemedText style={styles.productText}>Re: {item.product}</ThemedText>
      </ThemedView>

      {item.unread > 0 && (
        <ThemedView style={styles.unreadBadge}>
          <ThemedText style={styles.unreadCount}>{item.unread}</ThemedText>
        </ThemedView>
      )}
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Messages</ThemedText>
      </ThemedView>

      <TextInput
        placeholder="Search messages..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        leftIcon={<IconSymbol name="house.fill" size={20} color="#6E6E6E" />}
        style={styles.searchInput}
      />

      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.messagesList}
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
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchInput: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  messagesList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    color: "#6E6E6E",
  },
  messageText: {
    fontSize: 15,
    color: "#6E6E6E",
    marginBottom: 4,
  },
  unreadText: {
    fontWeight: "600",
    color: "#000000",
  },
  productText: {
    fontSize: 13,
    color: "#5E17EB",
  },
  unreadBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#5E17EB",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  unreadCount: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
