import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function BackIcon({ size = 24, color = 'white' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path
        d="M22.35 38.95L8.45 25.05C8.28333 24.8833 8.16667 24.7167 8.1 24.55C8.03333 24.3833 8 24.2 8 24C8 23.8 8.03333 23.6167 8.1 23.45C8.16667 23.2833 8.28333 23.1167 8.45 22.95L22.4 9C22.6667 8.73333 23 8.6 23.4 8.6C23.8 8.6 24.15 8.75 24.45 9.05C24.75 9.35 24.9 9.7 24.9 10.1C24.9 10.5 24.75 10.85 24.45 11.15L13.1 22.5H37.9C38.3333 22.5 38.6917 22.6417 38.975 22.925C39.2583 23.2083 39.4 23.5667 39.4 24C39.4 24.4333 39.2583 24.7917 38.975 25.075C38.6917 25.3583 38.3333 25.5 37.9 25.5H13.1L24.5 36.9C24.7667 37.1667 24.9 37.5 24.9 37.9C24.9 38.3 24.75 38.65 24.45 38.95C24.15 39.25 23.8 39.4 23.4 39.4C23 39.4 22.65 39.25 22.35 38.95Z"
        fill={color}
      />
    </Svg>
  );
}
