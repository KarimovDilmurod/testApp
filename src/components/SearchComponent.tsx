import React from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

interface IProps {
  inputStyle?: object;
  placeholder?: string;
  onPressBtnSearch?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchComponent = ({
  inputStyle,
  placeholder = 'Search...',
  onPressBtnSearch,
  value,
  onChangeText,
  ...attributes
}: IProps) => {
  return (
    <View style={[styles.searchContent, inputStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#2C3E50'}
        style={styles.search}
        value={value}
        onChangeText={onChangeText}
        {...attributes}
      />

      <TouchableOpacity
        style={styles.searchBtn}
        hitSlop={10}
        onPress={onPressBtnSearch}>
        <R.icons.SearchIcon color={'white'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: s(10),
    paddingVertical: vs(2),
    backgroundColor: '#CACFD2',
    borderRadius: s(4),
    alignItems: 'center',
    marginVertical: vs(10),
  },
  search: {
    width: '80%',
    height: vs(40),
    color: '#2C3E50',
    fontSize: ms(14),
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: s(10),
    paddingVertical: vs(10),
    borderRadius: s(4),
  },
});

export default SearchComponent;
