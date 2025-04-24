import { typeColors } from '../theme/colors';

export function getColorByType(type?: string): string {
  return typeColors.find((item) => item.name === type)?.color || '#777';
}
