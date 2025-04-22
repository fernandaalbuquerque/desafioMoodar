import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import colors from '../../theme/colors';
import { styles } from './styles';

export default function DetailsScreen() {
  const searchText = useSelector((state: RootState) => state.search.text);
  // const { data, loading, error } = useSelector((state: RootState) => state.pokemon);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        display: 'flex',
        padding: 4,
      }}
    >
      <ScrollView style={styles.container}>
        {/* {data?.map((pokemon) => (
          <View key={pokemon.id}>
            <Image source={{ uri: pokemon.image }} style={{ width: 60, height: 60 }} />
            <Text>
              {pokemon.name} (#{pokemon.id})
            </Text>
          </View>
        ))} */}
      </ScrollView>
    </View>
  );
}
