
import React ,{useContext} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {ModalcontrolContext} from '../Context/Modalcontrol' 

export default function comment({fulluser,ids,comment,username,currentDate}) {

  // const handleReply = () => {
  //   navigation.navigate('replycomment')
  // }
  const [modal,setModal] = useContext(ModalcontrolContext);

    return (
        <View style={styles.container}>
           
          <View style={styles.contentContainer}>
            <Text>
              <Text style={[styles.text, styles.name]}>{username}</Text>
              {'   '}
              <Text style={styles.text}>{comment}</Text>
            </Text>
            <Text style={[styles.text, styles.created]}>{currentDate}</Text>
            <TouchableOpacity 
            onPress={()=> setModal({active :true , id : fulluser})}
            style={[styles.text, styles.created]}>
              <Text>reply</Text>
             
            </TouchableOpacity>
          </View>
        </View>
      );
            }
    
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    width: 290,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  text: {
    
    color: '#000',
   
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
  },
});