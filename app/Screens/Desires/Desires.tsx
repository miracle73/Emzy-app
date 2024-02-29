import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FinanceIcon from '../../Images/Desires/FinanceIcon'
import RightCornerIcon from '../../Images/Desires/RightCornerIcon'
import { DesireAreaData } from '../../Utils/Consts/Desires'
import { DesiresAreaContainer, DesiresAreaTitle, DesiresBodyContainer, DesiresContainer, DesiresHeaderContainer, DesiresHeaderDescription, DesiresHeaderTitle, Icon } from './Desires.styled'

const Desires = () => {
  return (
    <LinearGradient
        colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <DesiresContainer>
            <DesiresHeaderContainer>
                <DesiresHeaderTitle>What do you really want in each area of your life?</DesiresHeaderTitle>
                <DesiresHeaderDescription>Set a SMART goal for the next 12 weeks.
                    {`\n`}
                    We suggest focusing on mastery on  1-3 areas at a time</DesiresHeaderDescription>
            </DesiresHeaderContainer>
            <DesiresBodyContainer>
                {DesireAreaData?.map((item, index) => {
                    const { AreaIcon, Name } = item;
                    return (
                        <DesiresAreaContainer key={index}>
                        {AreaIcon && <AreaIcon />}                           
                        <DesiresAreaTitle>{item?.Name}</DesiresAreaTitle>
                            <Icon>
                                <RightCornerIcon />
                            </Icon>
                        </DesiresAreaContainer>
                    )
                })}
            </DesiresBodyContainer>
        </DesiresContainer>
    </LinearGradient>
  )
}

export default Desires