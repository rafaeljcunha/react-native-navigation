import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../../styles/common';
import Button from '../../components/Button/Button';
import { NavigateProps, ParamsProps } from '../../types/navigation.types';

type AccountRouteProps = {
  AccountScreen: Partial<ParamsProps>;
};

type AccountScreenProps = RouteProp<AccountRouteProps, 'AccountScreen'>;

export default function Account() {
  const { navigate, goBack } = useNavigation<NavigateProps>();
  const { params } = useRoute<AccountScreenProps>();
  const isSubscribed = params?.isUserSubscribed ? 'Sim' : 'Não';
  const userId = params?.userId ?? 'Não informado';
  const disableButtons = params?.disableButtons;

  function handleNaviteToCreditCards() {
    navigate('CreditCards');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Account</Text>
        <Text style={[styles.text, styles.textSmall]}>UserId: {userId}</Text>
        <Text style={[styles.text, styles.textSmall]}>
          Subscribed: {isSubscribed}
        </Text>
        <Button
          onPress={goBack}
          title="Voltar para a Home"
          hidden={!!disableButtons}
        />
        <Button
          onPress={handleNaviteToCreditCards}
          hidden={!!disableButtons}
          title="Cartões de créditos"
          bgColor="orange"
        />
      </View>
    </SafeAreaView>
  );
}
