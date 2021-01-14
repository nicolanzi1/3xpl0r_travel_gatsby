import React from "react"
import { HeroContainer, HeroTitle, HeroText } from "./HeroComponents"
import { Button } from "../ButtonElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Travel More</HeroTitle>
      <HeroText>Plan your next trip today</HeroText>
      <Button fontBig big primary>
        Get Started
      </Button>
    </HeroContainer>
  )
}

export default HeroSection
