import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
    gap: 8,
    paddingHorizontal: 24,
  },
  label: {
    width: 40,
    fontWeight: 'bold',
    fontSize: 12,
  },
  value: {
    width: 40,
    fontSize: 12,
    color: '#444',
  },
  barContainer: {
    flex: 1,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
  },
  barFill: {
    height: 6,
    borderRadius: 4,
  },
});
