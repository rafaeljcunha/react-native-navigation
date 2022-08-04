import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/common';
import { ParamsProps } from '../Home/Home';

type AccountRouteProps = {
  AccountScreen: Partial<ParamsProps>;
};

type AccountScreenProps = RouteProp<AccountRouteProps, 'AccountScreen'>;

export default function Account() {
  const { goBack } = useNavigation();
  const { params } = useRoute<AccountScreenProps>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Account</Text>
        <Text style={styles.text}>
          UserId: {params?.userId ?? 'Não informado'}
        </Text>
        <Text style={styles.text}>
          Subscribed: {params?.isUserSubscribed ? 'Sim' : 'Não'}
        </Text>
        <TouchableOpacity onPress={goBack} style={styles.button}>
          <Text style={styles.buttonText}>Voltar para a Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
