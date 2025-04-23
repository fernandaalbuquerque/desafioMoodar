import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const { width } = Dimensions.get('window');
const itemSize = (width - 70) / 3;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayscale.white,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  flatlist: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: 'pink',
  },

  pokemonBox: {
    backgroundColor: colors.grayscale.light,
    alignItems: 'center',
    borderRadius: 8,
    width: itemSize,
    marginBottom: 16,
  },
});
