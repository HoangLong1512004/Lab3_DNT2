import { StyleSheet, View, Button,Text } from 'react-native';
import React, { FC, memo, useCallback } from 'react';

type FooterType = {
  timeUpdate : string;
  backgroundColor:string;
};

export const Footer:FC<FooterType> = memo(props => {
  const {timeUpdate,backgroundColor}=props;

  return (
    <View style={{
      height:60,
      backgroundColor:backgroundColor,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>Thời gian cập nhật thông tin : {timeUpdate}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
