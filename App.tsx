// // // lab3 b3
// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, Animated, FlatList, Image } from 'react-native';

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const App = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const [headerHeight, setHeaderHeight] = useState(150);

//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//     { useNativeDriver: true },
//   );

//   const translateYInterpolate = scrollY.interpolate({
//     inputRange: [0, 160],
//     outputRange: [0, -110],
//     extrapolate: 'clamp',
//   });

//   const headerStyle = {
//     transform: [{ translateY: translateYInterpolate }],
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View style={[styles.header, headerStyle]}>
//         <Image
//           style={{ width: 50, height:50 ,borderRadius:5 }}
//           source={{
//             uri: 'https://i.pinimg.com/564x/3d/cc/0a/3dcc0af5c1fa0530825e878ccb504405.jpg',
//           }}
//         />
//         <Text>Longnhph42829</Text>
//         <View style={{flexDirection:'row',marginTop:10}}>
//         <Text style={{  marginRight:20,backgroundColor:'blue',padding:7,borderRadius:15}}>Popular</Text>
//         <Text style={{marginRight:20 ,padding:7 }}>Product Design</Text>
//         <Text style={{ marginRight:20,padding:7}}>Development</Text>
//         <Text style={{ padding:7 }}>Project File</Text>

//         </View>
//       </Animated.View>
//       <Text style={styles.fixedText}>Trang Chủ</Text>
//       <Animated.View style={[headerStyle]}>
//       <Text style={styles.listHeader}>Popular Quizes</Text>
//       <AnimatedFlatList
//         contentContainerStyle={styles.scrollViewContent}
//         scrollEventThrottle={16}
//         onScroll={handleScroll}
//         data={[
//           'Item 1',
//           'Item 2',
//           'Item 3',
//           'Item 4',
//           'Item 5',
//           'Item 6',
//           'Item 7',
//           'Item 8',
          
//         ]}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       </Animated.View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#00FA9A',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     paddingTop: 40,
//     paddingBottom: 10,
//     paddingLeft: 20,
//   },
//   scrollViewContent: {
//     paddingTop: 5,
//     height:750
//   },
//   listHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     backgroundColor: '#F5DEB3',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 20,
//   },
//   item: {
//     padding: 20,
//     fontSize: 18,
//     height: 70,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   fixedText: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#00FA9A',
//     fontSize: 16,
//     paddingLeft: 20,
//   },
// });

// export default App;








// lab3 bai2
// import React, { useRef } from 'react';
// import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const App = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const renderItem = ({ item, index }) => {
//     const inputRange = [-1, 0, index * 50, (index + 1) * 70];

//     const opacity = scrollY.interpolate({
//       inputRange,
//       outputRange: [-0, 1, 1, -0],
//     });

//     const scale = scrollY.interpolate({
//       inputRange,
//       outputRange: [-0.5, 1, 1, -0.5],
//     });

//     return (
//       <Animated.View style={{ opacity, transform: [{ scale }] }}>
//         <Text style={styles.item}>{item}</Text>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <AnimatedFlatList
//         data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: true }
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     borderRadius:20,
//     width:330,
//     padding: 20,
//     marginVertical: 2,
//     backgroundColor: '#800000',
//   },
// });

// export default App;




// lab3 bai 1
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function App() {
  const translateY = useSharedValue(0);

  const handlePress = () => {
    translateY.value += 50; // Di chuyển lên trên
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  return (
    <>
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
      <Animated.View style={[styles.box, animatedStyles]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#00FFFF',
    borderRadius: 20,
    marginLeft: 150,
  },
});





























