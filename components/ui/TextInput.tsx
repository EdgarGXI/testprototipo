import type { ReactNode } from "react";
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
  StyleSheet,
  View,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

interface TextInputProps extends RNTextInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function TextInput({
  style,
  leftIcon,
  rightIcon,
  ...props
}: TextInputProps) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = "#9E9E9E";

  return (
    <View style={[styles.container, { backgroundColor: "#F5F5F5" }, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <RNTextInput
        style={[
          styles.input,
          { color: textColor },
          leftIcon && styles.inputWithLeftIcon,
          rightIcon && styles.inputWithRightIcon,
        ]}
        placeholderTextColor={placeholderColor}
        {...props}
      />
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    height: 50,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  leftIcon: {
    paddingLeft: 16,
  },
  rightIcon: {
    paddingRight: 16,
  },
});
