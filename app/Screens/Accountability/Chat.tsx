import { useNavigation } from '@react-navigation/native'
import React from 'react'
import SendMessageIcon from '../../Images/Accountability/SendMessageIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import { FlatList, View } from 'react-native'
import {
    ChatContainer,
    ChatFooterContainer,
    ChatHeaderContainer,
    ChatHeaderName,
    ChatHeaderStatus,
    ChatHeaderWrapper,
    MessageInput,
    MessageContainer,
    ProfileImage,
    SendMessageButton,
    ChatBodyContainer,
    ReceivedMessage,
    ReceivedMessageContainer,
    ReceivedTime,
    Icon
} from './Accountability.styled'
import StyledRoot from '../../Components/StyledRoot'

const RenderChats = ({ item, onPress }: { item: any, onPress: any }) => {
    return (
        <ChatContainer>
            <ChatBodyContainer>
                <View style={{ width: '100%', }}>
                    <ReceivedMessageContainer index={1}>
                        <ReceivedMessage index={1}>
                            Hi! Jumoke,{`\n`}
                            I am happy to have you here.{`\n`}
                            Do you know that I can help you achieve your{`\n`}
                            “Get PMP Certification Goal”?{`\n`}
                            Can you tell me what you need?
                        </ReceivedMessage>
                    </ReceivedMessageContainer>
                    <ReceivedTime>8:21 am</ReceivedTime>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <ReceivedMessageContainer index={2}>
                        <ReceivedMessage index={2}>
                            Thanks for showing up for me.
                        </ReceivedMessage>
                    </ReceivedMessageContainer>
                    <ReceivedTime>8:21 am</ReceivedTime>
                </View>
            </ChatBodyContainer>
        </ChatContainer>
    )
}


const Chat = () => {
    const navigation = useNavigation();


    return (
        <StyledRoot
            enableScroll={false}
            useScrollFlex
            headerRapperStyle={{ alignItems: 'left', marginLeft: 10 }}
            style={{ paddingRight: 0, paddingLeft: 0 }}
            contentContainerStyle={{ paddingBottom: 0 }}
            Header={() => <ChatHeaderContainer>
                <Icon onPress={() => navigation.goBack()}>
                    <BackArrow />
                </Icon>
                <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}></ProfileImage>
                <ChatHeaderWrapper>
                    <ChatHeaderName>Santigo Jenifer</ChatHeaderName>
                    <ChatHeaderStatus>online</ChatHeaderStatus>
                </ChatHeaderWrapper>
            </ChatHeaderContainer>
            }
        >
            <FlatList
                style={{ width: '100%' }}
                data={[{}]}
                renderItem={({ item }) => <RenderChats item={item} onPress={() => { }} />}
                showsVerticalScrollIndicator={false}
            />
            <ChatFooterContainer>
                <MessageContainer>
                    <MessageInput placeholder='Type a message .....'></MessageInput>
                    <SendMessageButton>
                        <SendMessageIcon />
                    </SendMessageButton>
                </MessageContainer>
            </ChatFooterContainer>
        </StyledRoot>
    )
}

export default Chat