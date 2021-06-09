
import React ,{useContext} from 'react';
import {
 
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// import {ModalcontrolContext} from '../Context/Modalcontrol' 

export default function Replytext({username,comment}) {

  // const handleReply = () => {
  //   navigation.navigate('replycomment')
  // }
//   const [modal,setModal] = useContext(ModalcontrolContext);

    return (
        <View style={styles.container}>
        <Text>
        <Text style={[styles.text, styles.name]}>{username}</Text>
             {'   '}
        <Text style={styles.text}>{comment}</Text>
    </Text>
    <Text style={[styles.text, styles.created]}>
        yesterday
    </Text>
    </View>
      );
            }
    
 
const styles = StyleSheet.create({
 container: {
    flexDirection: 'row',
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