import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { fetchPokemons, ITEM_PER_FETCH } from '../../services/pokemon';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { colors } from '../../theme/colors';
import { NavigationProps } from '../../types/navigation';
import { capitalizeWords, padId } from '../../utils/textFormatter';
import { styles } from './styles';

export default function DetailsScreen() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const searchText = useSelector((state: RootState) => state.search.text);
  const navigation = useNavigation<NavigationProps>();

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchPokemons(page * ITEM_PER_FETCH, ITEM_PER_FETCH);
      setPokemons((prev) => [...prev, ...newData]);
      setPage((prev) => prev + 1);
      if (newData.length < ITEM_PER_FETCH) setHasMore(false); // fim da lista
    } catch (err) {
      console.error('Erro ao carregar pokémons:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore(); // carrega os primeiros
  }, []);

  const filteredPokemons = useMemo(() => {
    if (!searchText) return pokemons;
    return pokemons.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText, pokemons]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        padding: 4,
      }}
    >
      <View style={styles.container}>
        <FlatList
          data={filteredPokemons}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          numColumns={3}
          contentContainerStyle={styles.flatlist}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListFooterComponent={
            loading ? (
              <View style={{ paddingTop: 8 }}>
                <ActivityIndicator size="large" color="#DC0A2D" />
              </View>
            ) : null
          }
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.pokemonBox}
              key={index}
              onPress={() => navigation.navigate('Pokemon', { id: item.id })}
            >
              <Text style={styles.idText}>#{padId(item.id)}</Text>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.pokemonBoxDetail}>
                <Text style={styles.nameText}>{capitalizeWords(item.name)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
