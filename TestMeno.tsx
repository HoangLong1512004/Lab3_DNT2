import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
interface TestProps{
    name:string
}
const TestMeno : React.FC<TestProps>=memo(({name})=>{
    console.log('rewrqwr');
    return(<View>
        <Text>ten : {name}</Text>
    </View>)
    
})

export default TestMeno

const styles = StyleSheet.create({})