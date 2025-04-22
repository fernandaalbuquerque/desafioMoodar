import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PokeBallIcon from '../../assets/icons/PokeballIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { RootState } from '../../store';
import { setSearchText } from '../../store/slices/searchSlice';
import { styles } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.search.text);

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
          onChangeText={(text) => dispatch(setSearchText(text))}
          // value={text}
          numberOfLines={1}
        />
      </View>
    </View>
  );
}
