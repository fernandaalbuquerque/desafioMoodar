import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  label: string;
  value: number;
  color: string;
};

export default function StatBar({ label, value, color }: Props) {
  const abbreviation = STAT_ABBREVIATIONS[label.toLowerCase()] || label.toUpperCase();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: color }]}>{abbreviation}</Text>
      <Text style={styles.value}>{String(value).padStart(3, '0')}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.barFill, { width: `${value / 2}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const STAT_ABBREVIATIONS: Record<string, string> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  specialattack: 'SATK',
  specialdefense: 'SDEF',
  speed: 'SPD',
};
