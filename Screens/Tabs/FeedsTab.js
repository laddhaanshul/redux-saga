import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, RefreshControl, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { connect } from 'react-redux'
import Share from 'react-native-share';

import { fetchFeedResponse } from '../../store/actions/ResponseData';

import FeedsListHeaderComponent from '../Components/FeedsListHeaderComponent';

const FeedsTab = props => {

    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        setRefreshing(true)
        props.onFetchFeeds()
        setRefreshing(false)
    }, [])

    const renderItem = (item) => {
        return <View style={styles.itemMainStyle}>
            <View style={styles.itemSubStyle}>
                <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={() => {
                        const shareOptions = {
                            title: 'Share via',
                            message: item.item.video_url + " Video Sharing ....",
                        };
                        Share.open(shareOptions)
                            .then((res) => {
                            })
                            .catch((err) => {
                            });
                    }}
                >
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
                </TouchableOpacity>
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

    const onRefresh = () => {
        props.onFetchFeeds()
    }

    return <SafeAreaView
        style={{ flex: 1 }}>
        <View style={styles.mainStyle}>
            {props.responseFeedData != undefined ? <FlatList
                style={{
                    width: '100%'

                }}
                data={props.responseFeedData.videos}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<FeedsListHeaderComponent />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}
            /> : <View style={styles.noDataStyle}>
                    <Text>
                        No Data Available, Fetching Data Please Wait
                </Text>
                </View>}
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
    },
    noDataStyle: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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
