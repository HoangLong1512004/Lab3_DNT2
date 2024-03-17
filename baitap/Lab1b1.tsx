import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const SectionView = ({ title, data }) => {
  const renderChild = (childTitle, childData) => {
    return (
      <View style={{ marginVertical: 10 }}>
        {childData.map((item, index) => (
          <View key={index} style={{ flexDirection: 'column', }}>
            <Text style={{ marginRight: 5,marginLeft:10 }}>{item.label}:</Text>
            <Text style={{fontWeight:'700',color:'black',marginLeft:10}}>{item.value}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderSection = () => {
    return (
      <View style={{ padding: 10, backgroundColor: '#f0f0f0' ,}}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        {data.map((item, index) => (
          <View key={index} style={{ borderWidth:1,borderRadius:10,marginTop:10}}>
            {renderChild(item.title, item.data)}
            {item.image && <Image source={{ uri: item.image }} style={{ width: '94%', height: 120, marginTop: 5 ,margin:10}} />}
            {item.title === 'Khách sạn' && (
              <TouchableOpacity 
                style={{ backgroundColor: 'lightblue', padding: 10, alignItems: 'center', borderRadius: 10, margin: 10 }}
                onPress={() => console.log("Chi tiết button pressed")}
              >
                <Text style={{ fontWeight: 'bold' }}>Chi tiết</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        
      </View>
    );
  };

  return renderSection();
};

const Lab1b1 = () => {
  const eventAndHotelInfo = [
    {
      title: 'Lịch trình',
      data: [
        { label: 'Địa điểm', value: 'Hồ Tràm - Vũng Tàu' },
        { label: 'Thời gian', value: '09:00 AM - 12:00 AM, 12/12/2024' },
        { label: 'Phương tiện di chuyển', value: 'Xe bus' },
        { label: 'Thời gian di chuyển', value: '21:00-22:00' }
      ],
      image: 'https://cms.haivan.com/photos/kinh-nghiem-du-lich-ho-tram-vung-tau-cap-nhat-moi-nhat-2020-1.jpg'
    },
    {
      title: 'Khách sạn',
      data: [
        { label: 'Tên khách sạn', value: 'Hồng Quỳnh' },
        { label: 'Giờ mở cửa', value: '6:00 AM - 12:00 AM' },
        { label: 'Địa điểm', value: '234 Quang Trung, Hồ Chí Minh' }
      ],
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      <SectionView title="Lịch trình" data={[eventAndHotelInfo[0]]} />
      <SectionView title="Khách sạn" data={[eventAndHotelInfo[1]]} />
    </View>
  );
};


export default Lab1b1;

// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// const CustomHeader = ({ title, renderLeft, renderCenter, renderRight }) => {
//   return (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, backgroundColor: 'lightblue' }}>
//       <View>{renderLeft && renderLeft()}</View>
//       <View>{title ? <Text style={{ fontWeight: 'bold' }}>{title}</Text> : (renderCenter && renderCenter())}</View>
//       <View>{renderRight && renderRight()}</View>
//     </View>
//   );
// };

// const App = () => {
//   const renderLeft = () => {
//     return (
//       <TouchableOpacity onPress={() => console.log("Left icon pressed")}>
//         <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }} style={{ marginLeft: 10, width: 20, height: 20 }} />
//       </TouchableOpacity>
//     );
//   };

//   const renderCenter = () => {
//     return (
//       <>
//         <Text style={{ fontWeight: 'bold' }}>Header</Text>
//         <Text style={{ fontWeight: 'bold' }}>Trang Chủ</Text>
//       </>
//     );
//   };

//   const renderRight = () => {
//     return (
//       <TouchableOpacity onPress={() => console.log("Right icon pressed")}>
//         <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/878/878516.png' }} style={{ marginRight: 10, width: 20, height: 20 }} />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <CustomHeader title="Header" renderLeft={renderLeft} renderRight={renderRight} />
//       <CustomHeader title="Trang Chủ" renderLeft={renderLeft} renderRight={renderRight} />
//       <CustomHeader renderLeft={renderLeft} renderRight={renderRight} />
//     </View>
//   );
// };

// export default App;






// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MyTextInput from './MyTextInput'
// import Lab1 from './Lab1'
// import MyView from './baitap/MyView'

// const App = () => {
//   return (
//     // <View>
//     //   <MyTextInput title={'Username'} hint={'Enter Username...'} iconURL={"https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"}/>
//     //   <MyTextInput title={'Password'} hint={'Enter Password...'} iconURL={"https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"}/>

//     // </View>
//     // <View>
//     //   <Lab1 title={'Title1'} hint={'Enter Title1...'} iconURL={"https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png"}/>

//     // </View>
//     <View style={{flex:1,backgroundColor:'white'}}>
//       <MyView height={100} width={100} bg={'black'}></MyView>
//       <MyView height={100} width={200} bg={'green'}/>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})