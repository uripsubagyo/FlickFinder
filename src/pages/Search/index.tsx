import React from 'react';
import { FunctionComponent } from 'react';
import {ScrollView, View, TextInput, Image} from 'react-native';

const Search : FunctionComponent = () => {
  return (
    <ScrollView
    style={{
        backgroundColor: '#1E1E1E',
        padding: 15
    }}
    >
        <View  style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'white',
            padding: 5,
            paddingLeft: 20,
            borderRadius:50,
            borderWidth: 1,
            
        }}>
            <Image 
                source ={require('../../assets/Unlock.png')}
                resizeMode = 'contain'
                style={{
                    height: 20,
                    width: 20
                }}
            />
            <TextInput 
                placeholderTextColor={'white'}
                underlineColorAndroid='transparent'
                style ={{color: 'white', fontSize: 15 }}
                onChange={() => {}}
                placeholder="Search"
                
            />
        </View>

    </ScrollView>
  )
}

export default Search