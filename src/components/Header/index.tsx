import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import PokeBallIcon from '../../assets/icons/PokeballIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { setSearchText } from '../../store/slices/searchSlice';
import { styles } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState('');

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
        <TextInput
          placeholder="Search"
          placeholderTextColor="#666"
          style={styles.input}
          onChangeText={(text) => setLocalSearch(text)}
          onSubmitEditing={() => dispatch(setSearchText(localSearch))}
          value={localSearch}
          numberOfLines={1}
        />
      </View>
    </View>
  );
}
