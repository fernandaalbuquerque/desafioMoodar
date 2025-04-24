// src/screens/styles.ts
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 24,
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 72,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
    height: '100%',
    flex: 1,
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
  image: {
    width: 160,
    height: 160,
    // position: 'absolute',
    top: 80,
    zIndex: 1,
  },
  typesRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 100,
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
  aboutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  aboutItem: {
    alignItems: 'center',
    flex: 1,
  },
  aboutValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  aboutLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 20,
  },
});
