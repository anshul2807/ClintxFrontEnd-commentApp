import React, { useContext } from 'react'
import { View, Text,SafeAreaView,StyleSheet, ScrollView,Modal } from 'react-native'
import Input from './input';
import Comment from './comment';
import {CommentContext} from '../Context/Comments'
import Replycomment from './replycomment'
import {ModalcontrolContext} from '../Context/Modalcontrol' 

export default function List(navigation) {

    const [comments,setComments] = useContext(CommentContext);
    const [modal,setModal] = useContext(ModalcontrolContext);

    return (
       
           <View style={styles.container}>
              
               <Text style={styles.headings}>Total Comments {comments.length}</Text>
               <ScrollView>
                  
                   {
                       
                       comments.map(data =>{
                               return  (<Comment fulluser={data} key={data.ids} ids={data.ids} comment={data.comments} username={data.username} currentDate={data.date} />)
                       })
                   }
                    
                  
                   
               </ScrollView>
                   <Input />
                   <Modal transparent={true} visible={modal.active} >
                <Replycomment  />
             </Modal>
           </View>

      
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop : 20
      },
      headings :{
        fontSize:30,
        marginBottom:30,
      }
})