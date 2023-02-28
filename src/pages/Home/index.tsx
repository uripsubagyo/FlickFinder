import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions} from 'react-native';
import { useState,useEffect} from 'react';
import axios from 'axios';

import Slider from '../../components/Slider'


function index() {

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




    const [trending, setTrending] = useState<MovieType[]>([]);
    const API_KEY = '595c463d085b81bd4ada5e1bacb38c86'

    useEffect(() => {
        getTrending()
    }, [])

    function getTrending(){
        if(trending.length ==0){
            axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=595c463d085b81bd4ada5e1bacb38c86`)
            .then((responese) => {
                let allResponese = responese.data.results;
                for(let k= 0; k < 5; k++){
                    let thisresponse = allResponese[k];
                    setTrending(
                        prevTrending => [
                            ...prevTrending, 
                            {
                                adult: thisresponse.adult,
                                backdrop_path: thisresponse.backdrop_path,
                                id : thisresponse.id,
                                title: thisresponse.title,
                                original_language: thisresponse.original_language,
                                original_title:thisresponse.original_title,
                                overview: thisresponse.overview,
                                poster_path: thisresponse.poster_path,
                                media_type: thisresponse.media_type,
                                genre_ids: thisresponse.genre_ids,
                                popularity: thisresponse.popularity,
                                release_date: thisresponse.release_date,
                                video: thisresponse.video,
                                vote_average: thisresponse.vote_average,
                                vote_count: thisresponse.vote_count
        
                            }
                        ]
                    )                    

                }
                
            })
        }
        
    }

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "August",
        "October",
        "November",
        "December"
    ]

    

    console.log(trending)
    // let relesae = trending[0].release_date.split("-")
  return (
    <ScrollView style={{backgroundColor:"#1E1E1E"}}>
            <View style={{ padding: 15}}>
            <View style={{}}>
                {/* TODO: Styling */}
                <Image 
                    source={require('../../assets/logo.png')}
                    style = {{height:60, resizeMode: 'contain', aspectRatio:1}}
                />
                <View style={{
                    height: 30,
                    backgroundColor:"white"
                }}>
                </View>
            </View>
            {/* Slider in here */}

            <View style= {{marginTop: 60}}>
                <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style={{color: 'white', fontSize:16, fontWeight: '700' }}>Trending</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#A3A3A3'}}>See More</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Trending Start */}
                <View>
                    <ScrollView
                    horizontal={true}
                    style={{marginTop: 20 }}
                    >
                    <View style={{borderRadius:10, overflow: 'hidden', width:  Dimensions.get('window').width*0.9, marginRight: 10}}>
                        <ImageBackground 
                            source = {{uri:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sADB9n2KwhQNsRLfzeuTj8BsqeB.jpg'}}
                            resizeMode = 'cover'
                            imageStyle ={{opacity: 0.5}}
                            style={{
                                width:'100%',
                                height: 150,
                                backgroundColor: 'black',
                                
                            }}
                        >
                            <View style={{position:'absolute', bottom:0, margin:10}}>
                                <Text style={{color:'white', fontWeight: '700', fontSize: 20}}>Hello</Text>
                                <Text style={{color:'white', fontWeight: '300', fontSize: 13}}>2h1m</Text>
                            </View>
                        </ImageBackground>
                        </View> 

                        <View style={{borderRadius:10, overflow: 'hidden', width:  Dimensions.get('window').width*0.9, marginRight: 10}}>
                        <ImageBackground 
                            source = {{uri:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sADB9n2KwhQNsRLfzeuTj8BsqeB.jpg'}}
                            resizeMode = 'cover'
                            style={{
                                width:'100%',
                                height: 150
                                
                            }}
                        >
                            <View>
                                <Text>Hello</Text>
                            </View>
                        </ImageBackground>
                        </View>   
                    </ScrollView>
                </View>

                {/* Trending end */}


                {/* Upcoming Start */}
                <View style={{marginTop: 20}}>
                    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                        <Text style={{color: 'white', fontSize:16, fontWeight: '700' }}>Upcoming</Text>
                        <TouchableOpacity><Text style={{color: '#A3A3A3'}} >See More</Text></TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={{width: 120, marginTop: 15}}>
                            <Image source={{uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sADB9n2KwhQNsRLfzeuTj8BsqeB.jpg'}}
                                resizeMode = "contain"
                                style={{height: 170, borderRadius:8}}
                            />
                            <View style={{alignItems: 'center', marginTop: 8}}>
                                <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                                    The last of us
                                </Text>
                                <Text style={{color: 'white', fontWeight:'300'}}>
                                    2h1m
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                {/* Upcoming End */}
            </View>
            
        </View>
    </ScrollView>
  )
}

export default index