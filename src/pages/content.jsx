import React from 'react';
import MainContainer from '../components/MainContainer'

export const About = () => {
  return (
    <MainContainer title='What is this?'>
      This website was created as a coding challenge for KBD_Group. Thank you for looking at it.
    </MainContainer>
  )
}

export const Greetings = () => {
  return (
    <MainContainer title='Hello KBG Group'>
      Hello  guys! Thanks for meeting with me the other day and showing me around the office.
    </MainContainer>
  )
}

export const Static = () => {
  return (
    <MainContainer title='Static Content'>
      THIS CONTENT IS STATIC
    </MainContainer>
  )
}

export const Home = () => {
  return (
    <MainContainer title='Home Page'>
      This is the home page.
    </MainContainer>
  )
}
