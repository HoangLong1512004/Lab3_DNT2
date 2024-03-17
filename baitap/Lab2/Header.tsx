import React, { memo, useState, useCallback, FC } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, Image } from 'react-native';

type HeaderType = {
  user: UserType;
};

export const Header : FC<HeaderType> = memo(props=>{
  const {user}=props;
  console.log('re-render header');
  return (
    <View style={{height:100,backgroundColor:'white',padding:10,flexDirection:'row',alignItems:'center'}}>
      <Image resizeMode='center'
      style={{width:70,height:70}}
      source={{uri:user.avatar}}/>
  <View>
    <Text style={{fontSize:20,color:'black'}}>Chào ngày mới</Text>
    <Text style={{fontSize:16,color:'blue',marginTop:10}}>{user.name}</Text>
  </View>
    </View>
  )

});

const styles = StyleSheet.create({});
