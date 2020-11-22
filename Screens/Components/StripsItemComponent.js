import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const StripItemComponents = props => {

    const [inputText, setInputText] = useState(props.item.values[0].value)
    const [selectedColor, setSelectedColor] = useState(props.item.values[0].color)

    const closestNumber = (array, num) => {
        console.log(array)
        let i = 0;
        let minDiff = 1000;
        let ans;
        for (i in array) {
            let m = Math.abs(num - Number(array[i].value));
            console.log(m)
            if (m < minDiff) {
                minDiff = m;
                ans = Number(array[i].value);
            }
        }
        return ans.toString();
    }

    return <View style={styles.mainStyle}>
        <View style={styles.topLayoutStyle}>
            <Text style={{
                marginLeft: 40
            }}>
                <Text style={styles.headingStyle}>
                    {props.item.name}
                </Text>
                <Text style={styles.unitStyle}>
                    {`  { ${props.item.unit} }`}
                </Text>
            </Text>
            <TextInput
                style={styles.textInputStyle}
                onSubmitEditing={(event) => {
                    if (inputText === '') return
                    setInputText(closestNumber(props.item.values, Number(inputText)))
                }
                }
                onChangeText={text => {
                    setInputText(text)
                }}
                defaultValue={inputText}
                maxLength={3}
                keyboardType={"number-pad"}
            />
        </View>

        <View style={styles.bottomStyle}>
            <View style={[
                styles.selectedColorStyle,
                {
                    backgroundColor: selectedColor
                }]}>

            </View>
            {
                props.item.values.map((data) => {
                    if (data.value === inputText) {
                        return <View
                            style={styles.colorPlateeStyle}>
                            <TouchableOpacity
                                style={[styles.selectedColorPlateeStyle,
                                {
                                    backgroundColor: data.color,
                                }]}
                                onPress={() => {
                                    setSelectedColor(data.color)
                                    setInputText(data.value)
                                }}>

                                <View style={[styles.selectedViewStyle, {
                                    backgroundColor: data.color,
                                }]}>

                                </View>
                            </TouchableOpacity>
                            <Text>
                                {data.value}
                            </Text>
                        </View>
                    } else {
                        return <TouchableOpacity
                            onPress={() => {
                                setSelectedColor(data.color)
                                setInputText(data.value)
                            }}>
                            <View style={styles.colorPlateeStyle}>

                                <View style={[
                                    styles.unselectedViewStyle
                                    , {
                                        backgroundColor: data.color,
                                    }]}>

                                </View>
                                <Text>
                                    {data.value}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                })
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainStyle: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 6
    },
    topLayoutStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headingStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00000050'
    },
    unitStyle: {
        fontWeight: 'bold',
        color: '#00000050'
    },
    textInputStyle: {
        borderColor: '#00000020',
        borderRadius: 10,
        borderWidth: 1,
        width: 70,
        height: 40,
        color: '#00000050',
        textAlign: 'center'
    },
    bottomStyle: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },
    selectedColorStyle: {
        width: 29,
        height: 25,
    },
    colorPlateeStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedColorPlateeStyle: {
        width: 48,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 5,
    },
    selectedViewStyle: {
        width: 45,
        height: 22,
        borderRadius: 5
    },
    unselectedViewStyle: {
        width: 48,
        height: 25,
        marginBottom: 5,
        borderRadius: 5
    }
})

export default StripItemComponents