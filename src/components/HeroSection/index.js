import React from "react"
import { HeroContainer, HeroTitle, HeroText, Button } from "./HeroComponents"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Travel More</HeroTitle>
      <HeroText>Plan your next trip today</HeroText>
      <Button>Get Started</Button>
    </HeroContainer>
  )
}

export default HeroSection
