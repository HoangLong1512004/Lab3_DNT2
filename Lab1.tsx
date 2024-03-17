import { StyleSheet, Text, View , TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

interface MyTextInputProps{
    title: string,
    hint: string,
    iconURL: string,
}

function Lab1(props: MyTextInputProps): React.JSX.Element {
    const { title, hint, iconURL } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setError(false); // Reset error message when focused
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChangeText = (inputText: string) => {
        setText(inputText);
        setShowIcon(false);
        setError(false); // Reset error message when typing
        setIsCorrect(false); // Reset correct state
    };

    const handleInputDone = () => {
        if (text !== 'PH35067' && text !== '') { 
            setError(true);
            setShowIcon(true);

        } else {
            setIsCorrect(true);
        }
    };

    return (
        <View>
            <Text>{title}</Text>
            <TouchableOpacity>
                <View style={{position: 'relative'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            placeholder={hint}
                            style={[
                                { flex: 1, borderRadius: 10, borderWidth: 2, borderColor: isFocused ? 'blue' : (error ? 'red' : (isCorrect ? 'gray' : 'gray')), backgroundColor: isFocused ? '#9999FF' : (error ? '#FF99FF' : (isCorrect ? '#9999FF' : '#DDDDDD')) }
                            ]}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChangeText={handleChangeText}
                            onSubmitEditing={handleInputDone} 
                        />
                        {showIcon && (
                            <Image source={{ uri: iconURL }} style={{ position: 'absolute', right: 10, width: 20, height: 20 }} />
                        )}
                    </View>
                    {error && (
                        <Text style={{color: 'red'}}>Error</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Lab1
