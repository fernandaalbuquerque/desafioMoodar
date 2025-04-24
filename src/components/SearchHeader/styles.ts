import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 8,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grayscale.white,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },

  input: {
    flex: 1,
    color: 'black',
  },

  iconWrapper: {
    paddingRight: 8,
  },
});
