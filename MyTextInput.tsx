import { StyleSheet, Text, View , TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

interface MyTextInputProps{
    title: string,
    hint: string,
    iconURL: string,
}

function MyTextInput(props: MyTextInputProps): React.JSX.Element {
    const { title, hint, iconURL } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChangeText = (inputText: string) => {
        setText(inputText);
    };

    return (
        <View>
            <Image source={{ uri: iconURL }} style={{ width: 50, height: 50 }} />
            <Text>{title}</Text>
            <TouchableOpacity>
                <TextInput
                    placeholder={hint}
                    style={[
                        { borderRadius: 10, borderWidth: 1 },
                        isFocused ? { borderColor: 'blue' } : { borderColor: 'black' },
                        text !== '' && { borderColor: 'yellow' } // Change border color to yellow if text is entered
                    ]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleChangeText}
                />
            </TouchableOpacity>
        </View>
    )
}

export default MyTextInput
