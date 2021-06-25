import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
    const { setCapital, setInteres, setMeses } = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Cantidad a pedir" 
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(e) => setCapital(e)}
                ></TextInput>
                <TextInput 
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChangeText={(e) => setInteres(e)}
                ></TextInput>
            </View>
            <RNPickerSelect
            style={pickerSelectStyle}
                onValueChange={(value) => setMeses(value)}
                placeholder={{
                    label: 'Selecciona los plazos',
                    value: null
                }}
                items={[
                    { label: '3 meses', value: 3},
                    { label: '6 meses', value: 6},
                    { label: '12 meses', value: 12},
                    { label: '24 meses', value: 24}
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5
    }
});

const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFF',
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white'
    }
})