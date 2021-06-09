import React ,{ createContext,useState} from 'react'

export const CurrentReplyContext = createContext();

export const CurrentReplyProvider = (props)=> {
    const [currentreply,setCurrentReply] = useState([])

    return (
        <CurrentReplyContext.Provider value={[currentreply,setCurrentReply]}>
            {props.children}
        </CurrentReplyContext.Provider>
    );
}


