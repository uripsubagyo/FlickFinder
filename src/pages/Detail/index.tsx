import React, { useState } from 'react';
import {View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradien from 'react-native-linear-gradient';

function index() {
  const [decs, setDecs] = useState("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
  const [onRead, setRead] = useState(false)
  function renderHeader(){
    return (
      <ImageBackground
        source = {{uri:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sADB9n2KwhQNsRLfzeuTj8BsqeB.jpg'}}
        resizeMode = 'cover'
        style ={{
          width: '100%',
          height: 500
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
              <Text style={{color: 'white', fontSize: 30, margin:5, fontWeight: '700', textAlign: 'center'}}>The Last Of US</Text>
              
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
      <View style={{margin: 15}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 15, }}>
                  
                  <Text style={{color: 'white'}}>2022</Text>
                
                  <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Image source={require('../../assets/Star.png')} resizeMode="contain" style={{resizeMode:"contain", height: 15, width: 15}}/>
                    <Text style={{color: 'white'}}>7.2</Text>
                  </View>                
                  <Text style={{color: 'white'}}>2h1m</Text>
                  

        </View>

        <View style={{marginTop: 30}}>
          <Text style={{color: 'white'}}>18+</Text>
        </View>
        <View>
          <View style={{padding: 4, borderRadius: 5, flexDirection: 'row', marginTop: 10 }}>
            <ScrollView
              horizontal = {true}
            >
            <Text style={{color: 'white', backgroundColor: "#1A1A1A", padding: 6, borderRadius: 5, marginRight: 10}}>Advanture</Text>
            <Text style={{color: 'white', backgroundColor: "#1A1A1A", padding: 6, borderRadius: 5,  marginRight: 10}}>Action</Text>
            </ScrollView>
          </View>
          <View>
            {onRead? <Text style={{color: 'white'}}>{decs}</Text> : <TouchableOpacity onPress={()=> {setRead(true)}}><Text style={{color: 'white'}} numberOfLines={3}>{decs}</Text></TouchableOpacity>}
          </View>

          <View>
            <Text style={{marginTop: 36, color: 'white', fontSize: 15, fontWeight: '600'}}>Review</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 7}}>
              <Image source={require('../../assets/Star.png')} style={{height: 17, width: 17, resizeMode: 'contain'}}/>
              <Text style={{color: 'white', fontWeight: '700'}}>4.5</Text>
              <Text style={{color: 'white', fontWeight: '300'}}>of 10</Text>
            </View>
          </View>

          {/* Review Card */}
          <ScrollView
            horizontal = {true}
          >
            <View style={{borderColor: 'white', borderRadius: 10,borderWidth: 1, padding: 15, marginTop: 15, width: Dimensions.get('window').width*0.9, marginRight: 10}} >
                {/* Image */}
                <View>
                  <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>Name</Text>
                  <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Image source={require('../../assets/Star.png')} style={{height: 17, width: 17, resizeMode: 'contain'}}/>
                    <Text style={{color: 'white'}}>9/10</Text>
                  </View>
                  <Text style={{color: 'white', marginTop: 15}}>{decs}</Text>
                </View>
            </View>

            <View style={{borderColor: 'white', borderRadius: 10,borderWidth: 1, padding: 15, marginTop: 15, marginRight: 10, width: Dimensions.get('window').width*0.9}} >
                {/* Image */}
                <View>
                  <Text style={{color: 'white', fontSize: 15, fontWeight: '700', }}>Name</Text>
                  <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Image source={require('../../assets/Star.png')} style={{height: 17, width: 17, resizeMode: 'contain'}}/>
                    <Text style={{color: 'white'}}>9/10</Text>
                  </View>
                  <Text style={{color: 'white', marginTop: 15}}>{decs}</Text>
                </View>
            </View>
            
            <View style={{borderColor: 'white', borderRadius: 10,borderWidth: 1, padding: 15, marginTop: 15, width: Dimensions.get('window').width*0.9}} >
                {/* Image */}
                <View>
                  <Text style={{color: 'white'}}>See More</Text>
                </View>
            </View>
          </ScrollView>
        </View>
      </View>
      
    </ScrollView>
  )
}

export default index