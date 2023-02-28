import React from 'react'
import {View, ImageBackground, Text} from 'react-native'

interface MovieType {
    adult: boolean
    backdrop_path: string
    id : number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number
    popularity: number
    release_date: string
    video: false
    vote_average: number
    vote_count: number
}

function index() {
  return (
    <View>
        <ImageBackground
            source={{uri:`https://image.tmdb.org/t/p/w600_and_h900_bestv2/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg`}}
            style = {{height:160,borderRadius: 15, overflow: 'hidden'}}
            resizeMode='cover'
        >

            <View style={{
                    backgroundColor: '#000000c0',
                    flex: 1,
            }}>
                <View style={{
                    position: 'absolute', //Here is the trick
                    bottom: 0, //Here is the trick
                    padding: 10,
                }}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Title</Text>
                    <Text style={{ color: 'white', fontWeight: '400'}} >13 Nov 2021</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default index