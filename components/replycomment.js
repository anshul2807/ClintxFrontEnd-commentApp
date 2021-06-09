import React,{useContext,useState} from 'react'
import { ScrollView,View, Text ,StyleSheet, Button,TouchableOpacity,TextInput} from 'react-native'
import {ModalcontrolContext} from '../Context/Modalcontrol' 
import {CommentContext} from '../Context/Comments'
import {CurrentReplyContext} from '../Context/currentreply'
import {UserContext} from '../Context/Users'
import Replytext from './replytext' 

const Replycomment = () => {


    const [user,setUser] = useContext(UserContext);
    const [modal,setModal] = useContext(ModalcontrolContext);

    const [currentreply,setCurrentReply] = useContext(CurrentReplyContext);
    const [text,setText] = useState('');

   const handleReplyPress = () =>{
    setCurrentReply([{admin :modal.id.ids ,content : {username :user , comment :text , key : Math.random(1,20).toString()+text}}, ...currentreply])
    setText('')
   }

    return (
        <View style={styles.containerOuter}>
            <View style={styles.containerInner}>
                <Text style={styles.textstyle}>Reply to {modal.id.username}</Text>
               
               
                
                <ScrollView>
                    {currentreply.filter(data=>modal.id.ids === data.admin).map(data => <Replytext username={data.content.username} comment={data.content.comment} key={data.content.key}/> )}
                  {/* {currentreply.map(data => <Replytext username={data.username} comment={data.comment} key={data.key}/> )} */}
               </ScrollView>
                  




                
                <View style={inputstyles.inputcontent}>
                    <TextInput
                        placeholder="Add a reply..."
                       
                        style={inputstyles.input}
                        value={text}
                        onChangeText={text => setText(text)}
                       
                    />
                   
                    <TouchableOpacity
                        style={inputstyles.button}
                        onPress={handleReplyPress}
                    >
                   
                    <Text
                    //  style={[inputstyles.text, !text ? inputstyles.inactive : []]}
                    
                    >
                        Post
                    </Text>
                    </TouchableOpacity>
                </View>





                <Button title="Close the Reply" 
                onPress={()=> setModal({active :false , id : {}})}
                />
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOuter :{
            backgroundColor : '#000000aa',
            flex : 1
    },
    containerInner : {
        backgroundColor : 'white',
        padding : 40,
        margin  :50,
        flex : 1,
        borderRadius :10
    },
    textstyle : {
        fontSize : 30
    }
})




const inputstyles = StyleSheet.create({
    inputcontent: {
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
      width : 150,
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
export default Replycomment
