import React,  {useState } from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import LinearGradien from 'react-native-linear-gradient';
import axios from 'axios';



function index() {
    const [name, setName] = useState()
    const [username, setUsername] = useState();

    function renderHeader(){
        return (
          <ImageBackground
            source = {{uri:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sADB9n2KwhQNsRLfzeuTj8BsqeB.jpg'}}
            resizeMode = 'cover'
            style ={{
              width: '100%',
              height: 250
            }}
          >
            <View style={{flex: 1}}>
              {/* Forretun back logo */}
    
            </View>
            <View style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}>
              <LinearGradien
                start={{x: 0, y: 0}}
                end = {{x: 0, y: 1}}
                colors={['transparent', '#000']}
                style={{
                  width: '100%',
                  height: 300,
                  alignItems:'center',
                  justifyContent:'flex-end'
                }}
                >
                  <Text style={{color: 'white', fontSize: 30, margin:5, fontWeight: '700', textAlign: 'center'}}>Urip Subagyo</Text>
                  <Text style={{color: 'white', fontSize: 15, fontWeight: '300', textAlign: 'center'}}>@uripsubagy</Text>

                </LinearGradien>
            </View>
          </ImageBackground>
        )
      }

  return (
    <ScrollView
        contentContainerStyle = {{backgroundColor: 'black'}}
        style={{backgroundColor: 'black'}}
        showsVerticalScrollIndicator
    >
        {renderHeader()}

        <View style={{margin: 15, marginTop: 80}}>
            <View style={{marginTop:22}}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 15}}>Panggilan</Text>
                <Text  style={{color: 'white',  fontWeight: '300'}}>Urip</Text>
            </View>

            <View style={{marginTop:22}}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 15 }}>Hobi</Text>
                <Text  style={{color: 'white',  fontWeight: '300'}} >Mancing</Text>
            </View>

            <View style={{marginTop:22}}>
                <Text style={{color: 'white', fontWeight: '700' , fontSize: 15 }} >Instagram</Text>
                <Text  style={{color: 'white',  fontWeight: '300'}}>@uripsubagy</Text>
            </View>

            <View style={{marginTop:22}}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 15 }}>About Me</Text>
                <Text  style={{color: 'white', fontWeight: '300'}}>Urip</Text>
            </View>
            {/* <Button>Log Out</Button> */}
        </View>
    </ScrollView>
  )
}

export default index