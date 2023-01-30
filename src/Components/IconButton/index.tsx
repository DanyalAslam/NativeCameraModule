import React from 'react';
import { Image, Text } from 'react-native';
import { vh } from '../../Utils/Units';
import TouchableHOC from '../TouchableHOC';
import styles from './styles';

const IconButton = (props:any) => {
  return (
    <TouchableHOC
      {...props}
      style={{ flexDirection: 'row', justifyContent:'space-evenly',alignItems:'center' }}>
      <Image
        source={props.icon && props.icon}
        style={[styles.icon, props.iconStyle]}
      />
      <Text style={{ color: 'white',fontSize:2*vh }}>
        {props.Text}

      </Text>
    </TouchableHOC>
  );
};
export default IconButton;
