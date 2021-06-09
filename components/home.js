import React,{ useContext } from 'react';
import {SafeAreaView,TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import {UserContext} from '../Context/Users'
export default function Home({navigation}) {


  const [user,setUser] = useContext(UserContext);  
  
 
  return (
    <SafeAreaView style={styles.outer}>
    
    <View style={styles.container}>
      <Text style={styles.texts}>Enter your Name to continue</Text>
      <TextInput
       placeholder="Name!"
       style={styles.input}
       value={user}
       onChangeText={text => setUser(text)}
      />
      <TouchableOpacity style={styles.button} onPress = {()=>{ navigation.navigate("comments");  }}>
        <Text>Let's Go </Text>
      </TouchableOpacity>
     
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:370,
    height:400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
   
  },
  input: {
    height: 40,
    width : 300,
    margin: 12,
    borderWidth: 1,
  },
  button :{
   
    padding:10,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width : 300,
  },
  outer : {
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts : {
    fontSize: 25,
  }
});


