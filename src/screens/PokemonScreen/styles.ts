// src/screens/styles.ts
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },

  backIconArea: { width: 100 },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  id: {
    fontSize: 16,
    color: 'white',
    width: 100,
    textAlign: 'right',
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    zIndex: 1,
  },
  carrousel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infosContainer: {
    backgroundColor: colors.grayscale.white,
    width: '100%',
    flex: 1,
    position: 'absolute',
    top: 130,
    paddingTop: 70,
    borderRadius: 8,
    alignItems: 'center',
    gap: 16,
    paddingBottom: 20,
  },
  typesRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  typeBadgeText: {
    fontSize: 10,
    lineHeight: 16,
    color: colors.grayscale.white,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 100,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 16,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  aboutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  aboutItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  aboutValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D1D1D',
    marginBottom: 8,
    textAlign: 'center',
  },

  aboutLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
