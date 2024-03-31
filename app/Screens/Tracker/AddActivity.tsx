import React, { FC, useState } from 'react'
import AppButton from '../../Components/AppButton/AppButton';
import AppInput from '../../Components/AppInput/AppInput';
import BackArrow from '../../Images/SignUp/BackArrow'
import StyledRoot from '../../Components/StyledRoot';
import { AddActivityBodyContainer, AddActivityContainer, AddActivityFooterContainer, AddActivityHeaderContainer, AddActivityHeaderTitle, Icon } from './Tracker.styled'
import SecondaryHeader from '../../Components/Header/SecondaryHeader';
import { Props } from '../../Utils/utility_functions/utilityFunctions';

const AddActivity: FC<Props> = ({ navigation }) => {
    const [goal, setGoal] = useState<string>('')

    return (
        <StyledRoot
            style={{ paddingRight: 0, paddingLeft: 0 }}
            useScrollFlex
            contentContainerStyle={{ paddingBottom: 0 }}
            enableScroll={false}
            Header={() => <SecondaryHeader
                centerTitle={'Set  better goal'}
                centerTitlestyle={{ fontSize: 28, color: '#3E7CD9', lineHeight: 30 }}
                onBackPress={() => navigation.goBack()}
                style={{ paddingLeft: 10 }}
            />}
        >
            <AddActivityContainer>
                <AddActivityBodyContainer>
                    <AppInput onChange={(val) => { setGoal(val) }} name={'email'} value={goal} placeHolder={'Enter goal'} />
                </AddActivityBodyContainer>
                <AddActivityFooterContainer>
                    <AppButton buttonLabel='Add' onPress={() => { }} />
                </AddActivityFooterContainer>
            </AddActivityContainer>
        </StyledRoot>
    )
}

export default AddActivity