import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../App';
import BackIcon from '../../assets/icons/BackIcon';
import NextIcon from '../../assets/icons/NextIcon';
import PreviousIcon from '../../assets/icons/PreviousIcon';
import StatBar from '../../components/StatsBar';
import { fetchPokemonById, fetchPokemonDescription } from '../../services/pokemon';
import { NavigationProps } from '../../types/navigation';
import { PokemonType } from '../../types/pokemon';
import { getColorByType } from '../../utils/colorSelector';
import { capitalizeWords, padId } from '../../utils/textFormatter';
import { styles } from './styles';

type PokemonRouteProp = RouteProp<RootStackParamList, 'Pokemon'>;

export default function PokemonScreen() {
  const route = useRoute<PokemonRouteProp>();
  const { id } = route.params;
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NavigationProps>();
  const canNextPage = id + 1 <= 999;
  const canBackPage = id - 1 >= 1;

  const typeColor = pokemon?.types[0];

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemonById(id);
        const desc = await fetchPokemonDescription(id);
        setPokemon(data);
        setDescription(desc);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading || !pokemon)
    return <ActivityIndicator size="large" color="#DC0A2D" style={{ flex: 1 }} />;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContainer,
        { backgroundColor: getColorByType(typeColor) },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconArea}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.name}>{capitalizeWords(pokemon.name)}</Text>
          <Text style={styles.id}>#{padId(pokemon.id)}</Text>
        </View>
      </View>
      <View style={styles.screenContainer}>
        <View style={styles.carrousel}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pokemon', { id: id - 1 })}
            disabled={!canBackPage}
            style={{ opacity: canBackPage ? 1 : 0 }}
          >
            <PreviousIcon />
          </TouchableOpacity>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Pokemon', { id: id + 1 })}
            disabled={!canNextPage}
            style={{ opacity: canNextPage ? 1 : 0 }}
          >
            <NextIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.typesRow}>
            {pokemon.types.map((type: string) => (
              <View
                key={type}
                style={[styles.typeBadge, { backgroundColor: getColorByType(type) }]}
              >
                <Text style={styles.typeBadgeText}>{capitalizeWords(type)}</Text>
              </View>
            ))}
          </View>
          <Text style={[styles.aboutText, { color: getColorByType(typeColor) }]}>About</Text>
          <View style={styles.aboutRow}>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutValue}>{(pokemon.weight / 10).toFixed(1)} kg</Text>
              <Text style={styles.aboutLabel}>Weight</Text>
            </View>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutValue}>{(pokemon.height / 10).toFixed(1)} m</Text>
              <Text style={styles.aboutLabel}>Height</Text>
            </View>
            <View style={styles.aboutItem}>
              <Text style={styles.aboutValue}>{pokemon.abilities.join('\n')}</Text>
              <Text style={styles.aboutLabel}>Moves</Text>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Text style={[styles.aboutText, { color: getColorByType(typeColor) }]}>Base Stats</Text>
          {pokemon.stats.map((stat: any) => (
            <StatBar
              key={stat.name}
              label={stat.name}
              value={stat.value}
              color={getColorByType(typeColor)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
