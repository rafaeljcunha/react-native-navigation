import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../../styles/common';
import { ParamsProps } from '../../types/navigation.types';

type CreditCardsRouteProps = {
  CreditCards: Partial<ParamsProps>;
};

type CreditCardsScreenProps = RouteProp<CreditCardsRouteProps, 'CreditCards'>;

export default function CreditCards() {
  const { params } = useRoute<CreditCardsScreenProps>();
  const shouldRenderDescription = params?.showDescription;

  function showDescription() {
    if (!shouldRenderDescription) {
      return null;
    }
    return (
      <Text style={[styles.text, styles.textSmall]}>
        Bottom tab sumiu, daqui pra frente estamos navegando via stacks.
        {'\n\n'}
        Se voltarmos, estaremos novamente na navegação via bottom tabs.
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.view, { paddingHorizontal: 16 }]}>
        <Text style={styles.text}>Cartões de créditos</Text>
        {showDescription()}
      </View>
    </SafeAreaView>
  );
}
