import React from 'react';
import { Text, TextInput, View } from 'react-native';
import PokeBallIcon from '../../assets/icons/PokeballIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { styles } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <PokeBallIcon />
        <Text style={styles.title}>Pokédex</Text>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.iconWrapper}>
          <SearchIcon />
        </View>
        <TextInput placeholder="Search" placeholderTextColor="#666" style={styles.input} />
      </View>
    </View>
  );
}
