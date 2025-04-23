import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { fetchPokemons } from '../../services/pokemon';
import colors from '../../theme/colors';
import { styles } from './styles';

export default function DetailsScreen() {
  // const searchText = useSelector((state: RootState) => state.search.text);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

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
        display: 'flex',
        padding: 4,
      }}
    >
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        style={styles.container}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#DC0A2D" /> : null}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <Image source={{ uri: item.image }} style={{ width: 48, height: 48 }} />
            <Text style={{ marginLeft: 12 }}>
              {item.name} (#{item.id})
            </Text>
          </View>
        )}
      />
    </View>
  );
}
