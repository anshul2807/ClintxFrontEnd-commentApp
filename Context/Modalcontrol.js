import React ,{ createContext,useState} from 'react'

export const ModalcontrolContext = createContext();

export const ModalcontrolProvider = (props)=> {
    const [modal,setModal] = useState({active : false, id : {}})

    return (
        <ModalcontrolContext.Provider value={[modal,setModal]}>
            {props.children}
        </ModalcontrolContext.Provider>
    );
}


