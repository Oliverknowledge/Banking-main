import AuthForm from '@/components/AuthForm'
import React from 'react'
import { getLoggedInUser } from '@/lib/actions/user.actions';
const SignUp= async () => {
  const LoggedIn = await getLoggedInUser()  
  console.log(LoggedIn)
  return (
    <section className = "flex-center size-full max-sm:px-6">
      <AuthForm type = "sign-up" />
    </section>
  )
}

export default SignUp