import React from 'react';
import { FunctionComponent } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';


const Login : FunctionComponent = ()=> {
    // const navigate = useNavigate();
  return (
    <View style={{  backgroundColor: '#1E1E1E', flex: 1}}>
        <View style={{margin: 30 ,  backgroundColor: '#1E1E1E'}}>
            <Image 
                source={require('../../assets/logo.png')}
                style = {{height:85, resizeMode: 'contain', aspectRatio:1}}
                />
            
            <View style={{marginTop: 68}}>
                <Text style={{fontSize: 30, color: 'white', fontWeight:'700'}}>Welcome</Text>
                <Text style={{fontSize: 15, color:'white', fontWeight:'400'}}>Tap unlock button to access Flick Finder</Text>
            </View>
            <View style={{
                marginTop:300,
                alignItems: 'center',
                justifyContent: 'center'}}>

                <TouchableOpacity style={{
                    backgroundColor: "#4ABE37",
                    padding: 23,
                    width: 95,
                    height: 95,
                    alignItems: 'center',
                    borderRadius: 100,
                }}
                onPress= {() => {}}
                >
                    <Image 
                        source={require('../../assets/Unlock.png')}
                        
                        style = {{
                            height:49, 
                            // aspectRatio: 1,
                            resizeMode: 'contain', //optional
                        
                        }}
                        />
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
  )
}

export default Login;