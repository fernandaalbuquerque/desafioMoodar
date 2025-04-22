import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayscale.white,
    flex: 1,
    display: 'flex',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
});
