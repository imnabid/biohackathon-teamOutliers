import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = ({children})=> {

    const [mapData, setMapData] = useState([]); //initially null
    const [valueThere, setValueThere] = useState(0); //initially null
    const [display, setDisplay] = useState(0); //initially null
    const [selected, setSelected] = useState(); //initially null
    const [pos, setPos] = useState('one');

  return (
    <UserContext.Provider value={{pos, setPos, mapData, setMapData, valueThere, setValueThere, selected, setSelected,display, setDisplay}}>
      {children}
    </UserContext.Provider>
  )
}