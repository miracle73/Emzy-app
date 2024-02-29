import { useNavigation } from '@react-navigation/native'
import React from 'react'
import SendMessageIcon from '../../Images/Accountability/SendMessageIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import { ChatContainer, ChatFooterContainer, ChatHeaderContainer, ChatHeaderName, ChatHeaderStatus, ChatHeaderWrapper, MessageInput, MessageContainer, ProfileImage, SendMessageButton, ChatBodyContainer, ReceivedMessage, ReceivedMessageContainer, ReceivedTime, Icon } from './Accountability.styled'

const Chat = () => {
    const navigation = useNavigation();
  return (
    <ChatContainer>
        <ChatHeaderContainer>
            <Icon onPress={() => navigation.goBack()}>
                <BackArrow />
            </Icon>
            <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
            <ChatHeaderWrapper>
                <ChatHeaderName>Santigo Jenifer</ChatHeaderName>
                <ChatHeaderStatus>online</ChatHeaderStatus>
            </ChatHeaderWrapper>
        </ChatHeaderContainer>
        <ChatBodyContainer>
            <ReceivedMessageContainer index={1}>
                <ReceivedMessage index={1}>
                    Hi! Jumoke,{`\n`}
                    I am happy to have you here.{`\n`}
                    Do you know that I can help you achieve your{`\n`}
                    “Get PMP Certification Goal”?{`\n`}
                    Can you tell me what you need?
                </ReceivedMessage>
                <ReceivedTime>8:21 am</ReceivedTime>
            </ReceivedMessageContainer>
            <ReceivedMessageContainer index={2}>
                <ReceivedMessage index={2}>
                    Thanks for showing up for me.
                </ReceivedMessage>
                <ReceivedTime>8:21 am</ReceivedTime>
            </ReceivedMessageContainer>
        </ChatBodyContainer>
        <ChatFooterContainer>
            <MessageContainer>
                <MessageInput placeholder='Type a message .....'></MessageInput>
                <SendMessageButton>
                    <SendMessageIcon />
                </SendMessageButton>
            </MessageContainer>
        </ChatFooterContainer>
    </ChatContainer>
  )
}

export default Chat