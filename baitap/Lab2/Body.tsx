import React, { useState,memo } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, ToastAndroid, TextInput } from 'react-native';
import { UserType } from './Main';

type BodyType = {
  onUpdataInfor:(user:UserType)=>void;
  onClickChangeBgFooter:()=>void;
};

export const Body: FC<BodyType> = memo(props=>{
  const{onUpdateInfor,onClickChangeBgFooter} = props;
  const[name,setName]=useState('');
  const[linkImage,setLinkImage]=useState('');
  const handleChangeInfo = ()=>{
    if(name.length>0&&linkImage.length>0){
      onUpdateInfor({name,avatar:linkImage});
    }else{
      ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
    }
  }
  return (
    <View>
      <View>
        <TextInput
          placeholder='Nhập tên mới'
          value={name}
          onChangeText={setName}
          style={{margin:20,borderRadius:10,borderWidth:1}}
        />
        <TextInput
          placeholder='Địa chỉ avatar mới'
          value={linkImage}
          style={{margin:20,borderRadius:10,borderWidth:1}}
          onChangeText={setLinkImage}
        />
        <TouchableOpacity onPress={handleChangeInfo} style={{padding:5,borderWidth:1,width:150,borderRadius:8,backgroundColor:'orange',justifyContent:'center',alignItems:'center',marginLeft:100}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Cập nhật thông tin</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onClickChangeBgFooter} style={{padding:5,borderWidth:1,width:150,borderRadius:8,backgroundColor:'orange',marginTop:10,marginBottom:205,justifyContent:'center',alignItems:'center',marginLeft:100}}>
          <Text style={{color:'black',fontWeight:'bold'}}>Đổi màu footer</Text>
        </TouchableOpacity>
    </View>
  )
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Body;
