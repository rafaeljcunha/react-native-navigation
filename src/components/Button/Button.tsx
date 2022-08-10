import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/common';

type CreditCardButtonProps = {
  hidden?: boolean;
  onPress(): void;
  title: string;
  bgColor?: string;
};

export default function Button({
  hidden = false,
  onPress,
  title,
  bgColor = 'blue',
}: CreditCardButtonProps) {
  if (hidden) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
