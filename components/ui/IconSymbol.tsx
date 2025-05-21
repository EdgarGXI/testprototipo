// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { SymbolViewProps, SymbolWeight } from "expo-symbols";
import type { ComponentProps } from "react";
import type { OpaqueColorValue, StyleProp, TextStyle } from "react-native";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  magnifyingglass: "search",
  "plus.circle.fill": "add-circle",
  "person.fill": "person",
  "message.fill": "message",
  "heart.fill": "favorite",
  heart: "favorite-border",
  "cart.fill": "shopping-cart",
  "tag.fill": "local-offer",
  "creditcard.fill": "credit-card",
  "dollarsign.circle.fill": "attach-money",
  "banknote.fill": "payments",
  "bell.fill": "notifications",
  "location.fill": "location-on",
  "star.fill": "star",
  "book.fill": "book",
  desktopcomputer: "computer",
  "chair.fill": "chair",
  "tshirt.fill": "dry-cleaning",
  "ticket.fill": "confirmation-number",
  "wrench.fill": "build",
  "gearshape.fill": "settings",
  "questionmark.circle.fill": "help",
  "checkmark.circle.fill": "check-circle",
  "xmark.circle.fill": "cancel",
  "arrow.left": "arrow-back",
  "arrow.right": "arrow-forward",
  "arrow.up": "arrow-upward",
  "arrow.down": "arrow-downward",
  "trash.fill": "delete",
  pencil: "edit",
  "photo.fill": "photo",
  "camera.fill": "camera-alt",
  "envelope.fill": "email",
  "lock.fill": "lock",
  "key.fill": "key",
  "doc.text.fill": "description",
  "bag.fill": "shopping-bag",
  "cart.badge.plus": "add-shopping-cart",
  "list.bullet": "list",
  "slider.horizontal.3": "tune",
  "arrow.up.arrow.down": "swap-vert",
  "arrow.left.arrow.right": "swap-horiz",
  ellipsis: "more-horiz",
  "ellipsis.circle": "more-vert",
  calendar: "calendar-today",
  "clock.fill": "access-time",
  "mappin.and.ellipse": "place",
  "phone.fill": "phone",
  "bubble.left.fill": "chat",
  "bubble.right.fill": "chat-bubble",
  "hand.thumbsup.fill": "thumb-up",
  "hand.thumbsdown.fill": "thumb-down",
  "person.2.fill": "people",
  "person.badge.plus": "person-add",
  "person.crop.circle": "account-circle",
  "checkmark.seal.fill": "verified",
  "exclamationmark.triangle.fill": "warning",
  "info.circle.fill": "info",
  "shield.fill": "security",
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
