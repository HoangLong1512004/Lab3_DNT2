import {ImageBackground, StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';

export interface RVViewProps extends ViewProps {
  bg?: string;
  row?: string;
  height?: number;
  width?: number;
}
function MyView(props: RVViewProps): React.JSX.Element {
    const{bg,row,height,width}=props;
    const viewStyle: {} = [
        bg && {backgroundColor:bg},
        row &&{flexDirection:'row'},
        width && {width},
        height&&{height}
    ]
  return (
    <View style={[styles.container,viewStyle]}>
    </View>
  );
}

export default MyView;
const styles = StyleSheet.create({
    container:{
        borderColor:'blue',
        borderWidth:1,
        borderRadius:10
    }
})

