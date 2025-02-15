//import React from 'react'

import { RouterProvider } from 'react-router-dom'

import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
/*import { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
*/

const Body = () => {



    const appRoute = createBrowserRouter([
        {
            path:"/",
            element: <Login/>,
        
        },
        
        {
            path:"/browse",
            element: <Browse/>,
        
        },
        
        ]); 

       /* useEffect(()=> {

          onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid ,email:email,displayName:displayName}))
              // ...
              
            } else {
              // User is signed out
              // ...
             dispatch(removeUser())
             

            }
          });


        },[])*/

  return (
    <div>
        
      <RouterProvider router={appRoute}/>
        </div>
  )
}

export default Body