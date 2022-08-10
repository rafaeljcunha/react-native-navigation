import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../../components/Button/Button';
import { styles } from '../../../styles/common';
import { useAuthentication } from '../hooks';

export function NonAuthenticated() {
  const { handleAuthentication } = useAuthentication();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Usuário não autenticado</Text>
        <Button onPress={handleAuthentication} title="Fazer login" />
      </View>
    </SafeAreaView>
  );
}
