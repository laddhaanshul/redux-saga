import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TextInput } from 'react-native';

import { connect } from 'react-redux'

import { fetchStripsResponse } from '../../store/actions/ResponseData';

import StripItemComponents from '../Components/StripsItemComponent';

const StripTab = props => {

    const [colorsData, setColorsData] = useState([])

    useEffect(() => {
        props.onFetchStrips()
    }, [])

    const renderItem = (item, index) => {
        if (item.item.values[0] == undefined) return
        console.log(item.item.values[0].value)
        return <StripItemComponents item={item.item} />
    }

    return <SafeAreaView
        style={{ flex: 1 }}>
        <View style={styles.mainStyle}>
            <Text style={styles.headerStyle}>
                Test Strip
            </Text>
            <View style={styles.bottomLayoutStyle}>
                <FlatList
                    style={{
                        width: '100%',
                        height: '92%'
                    }}
                    data={props.responseStripsData}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item, index) => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.selectedColorStyle}>

                </View>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainStyle: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15
    },
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    bottomLayoutStyle: {
        flexDirection: 'row',
        height: '97%'
    },
    selectedColorStyle: {
        borderRadius: 5,
        height: '92%',
        width: 30,
        borderWidth: 2,
        position: 'absolute',
        borderColor: '#00000030'
    }
})

const mapStateToProps = (state) => {
    return {
        responseStripsData: state.responseData.responseStripsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchStrips: () => {
            dispatch(fetchStripsResponse())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StripTab);
