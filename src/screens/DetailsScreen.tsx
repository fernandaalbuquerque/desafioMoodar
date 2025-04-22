import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../App';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const route = useRoute<DetailsRouteProp>();
  const { itemId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
}
