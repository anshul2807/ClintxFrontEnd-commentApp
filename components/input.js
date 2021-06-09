import React , { useContext ,useState } from 'react'
import {
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    Text,
    View, TouchableOpacity
  } from 'react-native';

  import {CommentContext} from '../Context/Comments'
  import {UserContext} from '../Context/Users'


export default function input() {
  const [comments,setComments] = useContext(CommentContext);
  const [user,setUser] = useContext(UserContext); 

    const [text,setText] = useState('')


      const handleCommentonPress = () =>{

       if(text)
       {
        setComments([{ ids : Math.random(0,10).toString()+user,username :user,comments : text , date : new Date().toLocaleString(),children :[]},...comments])
        setText('')
       }
      }

    return (
        // This moves children view with input field and submit button
        // up above the keyboard when it's active
        // <KeyboardAvoidingView
        //   behavior='position'
        // >
          <View style={styles.container}>
            {/* Comment input field */}
            <TextInput
              placeholder="Add a comment..."
               // keyboard with no return button
              // autoFocus={true} // focus and show the keyboard
              style={styles.input}
              value={text}
              onChangeText={text => setText(text)} // handle input changes
            //   onSubmitEditing={this.onSubmitEditing} // handle submit event
            />
            {/* Post button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleCommentonPress}
            >
              {/* Apply inactive style if no input */}
              <Text style={[styles.text, !text ? styles.inactive : []]}>Post</Text>
            </TouchableOpacity>
          </View>
        /* // </KeyboardAvoidingView> */
      );
}



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#EEE',
      alignItems: 'center',
      paddingLeft: 15,
    },
    input: {
      borderWidth: 1,
      height: 40,
      width : 250,
      fontSize: 15,
    },
    button: {
      height: 40,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inactive: {
      color: '#CCC',
    },
    text: {
      color: '#3F51B5',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 15,
    },
  });