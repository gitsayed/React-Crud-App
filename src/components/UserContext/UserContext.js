import { createContext, useState } from 'react';

export const UserContext=createContext();

export const UserProvider=(props)=> {
const [users, setUser]=useState([
    {id:1, name:"Abdullah", position:"Manager",  salary:50000},
    {id:2, name:"Bahar",    position:"Accounts", salary:45000},
    {id:3, name:"Cinnamon", position:"Engineer", salary:37000},
    {id:4, name:"Damudya",  position:"Pion",     salary:16000}

]);
     return (
   <UserContext.Provider value={[users, setUser]}>
      {props.children}
   </UserContext.Provider> 
    
        )
}
// export default  UserContext;