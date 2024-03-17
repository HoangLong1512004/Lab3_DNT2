import { StyleSheet, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Body from './Body';
const color = ['white','gray','yellow','red','blue','orange'];
export type UserType = {
  name:string;
  avatar:string;
}
const Main = () => {
  const [ user,setUser]= useState<UserType>({
    name:'Chưa có tên',
    avatar:'https://cdn.pixabay.com/photo/2016/08/31/11/55/icon-1633250_960_720.png'
  })
  const [footerColor, setFooterColor] = useState(color[0]);
  const [lastTimeUpdate,setLastTimeUpdate]=useState('bạn chưa cập nhật thông tin')
  const handleUpdateInfor = useCallback((_user:UserType) => {
    setUser(_user);
  }, []);

  const handleRandomColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * color.length);
    setFooterColor(color[randomColor]);
  }, []);
  useEffect(()=>{
    const currentdate = new Date();
    const datetime = currentdate.getDate()+'/'+(currentdate.getMonth()+1)+
    '/'+
    currentdate.getFullYear()+
    ' '+
    currentdate.getHours()+
    ':'+
    currentdate.getMinutes()+
    ':'+
    currentdate.getSeconds();
    setLastTimeUpdate(datetime);
  },[user]);

  return (
    <View style={{ flex: 1 }}>
      <Header user={user} />
      <Body 
      onUpdateInfor={handleUpdateInfor}
      onClickChangeBgFooter={handleRandomColor}/>
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
