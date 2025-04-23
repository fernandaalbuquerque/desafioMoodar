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
  },

  pokemonBox: {
    backgroundColor: colors.grayscale.white,
    alignItems: 'center',
    borderRadius: 8,
    width: itemSize,
    marginBottom: 16,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Android
    elevation: 4,
  },

  pokemonBoxDetail: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    backgroundColor: colors.grayscale.background,
    bottom: 0,
    paddingTop: 24,
    paddingBottom: 4,
    alignItems: 'center',
  },
});
