import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/common';

export type ParamsProps = {
  userId: number;
  isUserSubscribed: boolean;
};

type NavigateProps = {
  navigate(screenName: string, params: ParamsProps): void;
};

export default function Home() {
  const { navigate } = useNavigation<NavigateProps>();

  function handleNavigate() {
    navigate('AccountScreen', {
      userId: 23,
      isUserSubscribed: true,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Navegar para Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
