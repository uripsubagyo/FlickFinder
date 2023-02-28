import React from 'react'
import {View, ImageBackground, Text, FlatList, ScrollView} from 'react-native'

import Slide from '../Slide'

function index() {
    let dummyData = [1]
  return (
    <View style={{marginTop: 15}}>
        <View>
            <Text>Trending</Text>
            <Text>See More</Text>
        </View>
        <ScrollView
        >
            {
                dummyData.map(() => <Slide />)
            }
        </ScrollView>
    </View>
  )
}

export default index