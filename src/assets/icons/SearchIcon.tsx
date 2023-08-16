import React from 'react';
import {ColorValue} from 'react-native';
import {s} from 'react-native-size-matters/extend';
import Svg, {Circle, Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const SearchIcon = (props: IProps) => {
  const {color = '#828282', size = 22} = props;

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 16 16" fill="none">
      <Circle
        cx="7.10526"
        cy="7.10526"
        r="6.35526"
        stroke={color}
        strokeWidth="1.5"
      />
      <Path
        d="M11.842 11.842L14.9999 14.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
