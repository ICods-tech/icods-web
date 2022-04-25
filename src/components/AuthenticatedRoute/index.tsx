import Router from 'next/router'
import { NextResponse } from 'next/server'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
const enviroment = process.browser ? "client side" : "server side"

const authenticatedRoute = (componentPath, options = {}) => {
  
  const AuthenticatedRoute = () => {
    const { isUserAuthenticated } = useContext(AuthContext)
    console.log(enviroment);
//    return isUserAuthenticated() ? NextResponse.next() : Router.push('/enterprise/login')
  }

  return AuthenticatedRoute
}
export default authenticatedRoute

