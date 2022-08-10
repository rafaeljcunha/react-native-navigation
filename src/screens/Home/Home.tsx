import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../../styles/common';
import Button from '../../components/Button/Button';
import { NavigateProps, ParamsProps } from '../../types/navigation.types';

type HomeRouteProps = {
  HomeScreen: Partial<ParamsProps>;
};

type HomeScreenProps = RouteProp<HomeRouteProps, 'HomeScreen'>;

export default function Home() {
  const { navigate } = useNavigation<NavigateProps>();
  const { params } = useRoute<HomeScreenProps>();
  const disableButtons = params?.disableButtons;

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
        <Button
          onPress={handleNavigate}
          title="Navegar para Account"
          hidden={!!disableButtons}
        />
      </View>
    </SafeAreaView>
  );
}
