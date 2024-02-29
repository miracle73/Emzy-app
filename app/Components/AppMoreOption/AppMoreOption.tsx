import React from 'react'
import RightCornerIcon from '../../Images/Desires/RightCornerIcon';
import { AppMoreOptionContainer, AppMoreOptionLabel, AppMoreOptionWrapper, RightIcon } from './AppMoreOption.styled'

interface Props {
    Icon: any;
    Label: string;
    onPress: any;
}

const AppMoreOption: React.FC<Props> = ({ Icon, Label, onPress }) => {
  return (
    <AppMoreOptionContainer>
        <AppMoreOptionWrapper>
            <Icon />
            <AppMoreOptionLabel>{Label}</AppMoreOptionLabel>
        </AppMoreOptionWrapper>
        <RightIcon onPress={() => onPress()}>
            <RightCornerIcon />
        </RightIcon>
    </AppMoreOptionContainer>
  )
}

export default AppMoreOption