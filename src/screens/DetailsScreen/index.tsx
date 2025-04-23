import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { fetchPokemons } from '../../services/pokemon';
import colors from '../../theme/colors';
import { styles } from './styles';

export default function DetailsScreen() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 48) / 3;

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchPokemons(page * 20, 20);
      setPokemons((prev) => [...prev, ...newData]);
      setPage((prev) => prev + 1);
      if (newData.length < 20) setHasMore(false); // fim da lista
    } catch (err) {
      console.error('Erro ao carregar pokémons:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore(); // carrega os primeiros
  }, []);

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
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          numColumns={3}
          contentContainerStyle={styles.flatlist}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListFooterComponent={loading ? <ActivityIndicator size="large" color="#DC0A2D" /> : null}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.pokemonBox} key={index}>
              <Image source={{ uri: item.image }} style={{ width: 72, height: 72 }} />
              <Text>{item.name}</Text>
              <Text>(#{item.id})</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
