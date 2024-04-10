import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Text, View } from 'react-native'

interface Props {
    label: string;
    value: string;
    handleChange: any;
    secureTextEntry?: boolean;
    placeholder?: string;
    editable?: boolean
}

const AppLineInput: React.FC<Props> = ({ label, value, handleChange, secureTextEntry, placeholder, editable = true }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                onChangeText={handleChange}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '##161C2C',
        fontSize: 16,
        flex: 2,
        fontFamily: 'Poppins',
        fontWeight: '500',
    },
    labelStyle: {
        flex: 1,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: '#71717A'
    },
    containerStyle: {
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E3E7',
        borderBottomStyle: 'solid',
    }
})

export default AppLineInput