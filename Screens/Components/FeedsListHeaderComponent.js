import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const FeedsListHeaderComponents = props => {

    return <View
        style={styles.mainStyle}>
        <View style={styles.subStyle}>
            <Text>
                TODAY
            </Text>
            <View style={styles.mainProfileStyle}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30
                }}>
                    My Feed
                </Text>
                <View style={styles.profileStyle}>

                </View>
            </View>
        </View>
        <View style={styles.seperatorStyle}>

        </View>
    </View>

}

const styles = StyleSheet.create({
    mainStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#00000010'
    },
    subStyle: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 25,
        marginBottom: 15,
    },
    mainProfileStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    profileStyle: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        backgroundColor: 'orange'
    },
    seperatorStyle: {
        width: '100%',
        height: 1,
        backgroundColor: '#00000020'
    }
})

export default FeedsListHeaderComponents;
