import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TouchableOpacity, StyleSheet, FlatList, Text } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { connect } from 'react-redux'

import { fetchFeedResponse } from '../../store/actions/ResponseData';

import FeedsListHeaderComponent from '../Components/FeedsListHeaderComponent';

const FeedsTab = props => {

    const [feedsData, setFeedsData] = useState([])

    useEffect(() => {
        props.onFetchFeeds()
    }, [])

    const renderItem = (item) => {
        console.log(item.item)
        return <View style={styles.itemMainStyle}>
            <View style={styles.itemSubStyle}>
                <VideoPlayer
                    style={{
                        borderRadius: 10
                    }}
                    video={{ uri: item.item.video_url }}
                    videoWidth={1600}
                    videoHeight={900}
                    endWithThumbnail={true}
                    hideControlsOnStart={true}
                    thumbnail={{ uri: item.item.thumbnail_url }}
                />
                <View style={styles.bottomBaseStyle}>
                    <View style={styles.bottomSubStyle}>
                        <Text style={{
                            color: 'blue'
                        }}>
                            New
                        </Text>

                    </View>
                    <Text style={styles.titleStyle}>
                        {item.item.title}
                    </Text>
                </View>
            </View>
        </View>
    }

    return <SafeAreaView
        style={{ flex: 1 }}>
        <View style={styles.mainStyle}>
            <FlatList
                style={{
                    width: '100%'

                }}
                data={props.responseFeedData.videos}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<FeedsListHeaderComponent />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainStyle: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#00000006'
    },
    itemMainStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemSubStyle: {
        width: '90%',
        borderRadius: 5,
        marginTop: 15,
        borderRadius: 10,
    },
    bottomBaseStyle: {
        width: '100%',
        borderRadius: 8,
        marginTop: -12,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    bottomSubStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

const mapStateToProps = (state) => {
    return {
        responseFeedData: state.responseData.responseFeedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchFeeds: () => {
            dispatch(fetchFeedResponse())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedsTab);
