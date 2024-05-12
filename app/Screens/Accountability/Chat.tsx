import React, { useEffect, useContext, FC, useState, useRef } from 'react'
import SendMessageIcon from '../../Images/Accountability/SendMessageIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import { FlatList, Platform, View } from 'react-native'
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
import firestore from '@react-native-firebase/firestore';
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { Props, height } from '../../Utils/utility_functions/utilityFunctions'
import { Keyboard } from 'react-native'
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


type ChatDataModel = {
    timeStamp?: string,
    message?: string,
    date?: string,
    senderId?: string
}


const RenderChats = ({ item, onPress, userId }: { item: ChatDataModel, onPress: any, userId: string }) => {

    return (
        <ChatContainer>
            <ChatBodyContainer>
                <View style={[{ width: '100%' }, item?.senderId == userId && { alignItems: 'flex-end' }]}>
                    <ReceivedMessageContainer index={item?.senderId == userId ? 2 : 1}>
                        <ReceivedMessage index={item?.senderId == userId ? 2 : 1}>
                            {item?.message}
                        </ReceivedMessage>
                    </ReceivedMessageContainer>
                    <ReceivedTime>{item?.timeStamp}</ReceivedTime>
                </View>
            </ChatBodyContainer>
        </ChatContainer>
    )
}


const Chat: FC<Props> = ({ navigation, route }) => {
    const { userWholeDetails } = useContext(AppContext)
    const [allChats, setAllChats] = useState()
    const [message, setMessage] = useState('')
    const [keyboardUp, setKeyboardUp] = useState(false)
    const documentId = ((userWholeDetails?.data?.username + route?.params?.partner?.username)?.split("")?.sort()?.join(""))
    const [refresh, setRefresh] = useState(false)
    const flastListRefc = useRef<any>(null)


    useEffect(() => {
        const subscriber = firestore().collection('chats').doc(documentId).onSnapshot((chats) => {
            setAllChats(chats?.data()?.chatsArray)
            flastListRefc?.current?.scrollToEnd({ animated: true })
        })
        return () => subscriber();
    }, [route?.params, refresh])


    const sendMessage = () => {
        setKeyboardUp(false);
        if (message.length <= 0) return
        const messageData = {
            message: message,
            date: new Date().toLocaleDateString(),
            timeStamp: new Date().toLocaleTimeString(),
            senderId: userWholeDetails?.data?.username
        }
        //check if document exists
        firestore().collection('chats').doc(documentId).get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    firestore().collection('chats')
                        .doc(documentId)
                        .update({
                            chatsArray: firestore.FieldValue.arrayUnion(messageData)
                        }).then(() => {
                            setMessage('')
                            setRefresh((val) => !val)
                            flastListRefc?.current?.scrollToEnd({ animated: true })
                        }).catch((err) => { })

                } else {
                    firestore().collection('chats').doc(documentId).set({ chatsArray: messageData })
                        .then(() => { setMessage(''); setRefresh((val) => !val) })
                }
            });
    }

    useEffect(() => {
        const up = Keyboard.addListener('keyboardWillShow', (val) => {
            setKeyboardUp(true)
        })

        const down = Keyboard.addListener('keyboardWillHide', (val) => {
            setKeyboardUp(false)
        })
        return () => {
            up.remove();
            down.remove();
        };
    }, [])


    return (
        <>

            <StyledRoot
                safeAreaStyle={{ backgroundColor: 'white' }}
                enableScroll={Platform.OS == 'ios' ? keyboardUp : false}
                // useScrollFlex
                headerRapperStyle={{ alignItems: 'left', marginLeft: 10 }}
                style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: 'white' }}
                contentContainerStyle={{ paddingBottom: 30 }}
                Header={() => <ChatHeaderContainer>
                    <Icon onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                    <ProfileImage source={{ uri: route?.params?.partner?.profile_picture }}></ProfileImage>
                    <ChatHeaderWrapper>
                        <ChatHeaderName>{route?.params?.partner?.first_name} {route?.params?.partner?.last_name}</ChatHeaderName>
                        <ChatHeaderStatus>online</ChatHeaderStatus>
                    </ChatHeaderWrapper>
                </ChatHeaderContainer>
                }
            >
                <FlatList
                    style={{ width: '100%', height: height * 0.72, }}
                    data={allChats}
                    renderItem={({ item }) =>
                        <RenderChats
                            userId={userWholeDetails?.data?.username ?? ''}
                            item={item} onPress={() => { }}
                        />}
                    showsVerticalScrollIndicator={false}
                    ref={flastListRefc}
                />
                {Platform.OS == 'ios' &&
                    <ChatFooterContainer>
                        <MessageContainer>
                            <MessageInput
                                onFocus={() => {
                                    // flastListRefc?.current?.scrollToEnd({ animated: true }); 
                                    setKeyboardUp(true)
                                }}
                                onBlur={() => setKeyboardUp(false)}
                                placeholderTextColor={'black'}
                                value={message}
                                onChangeText={(val) => { setMessage(val) }}
                                placeholder='Type a message .....'></MessageInput>
                            <SendMessageButton onPress={sendMessage}>
                                <SendMessageIcon />
                            </SendMessageButton>
                        </MessageContainer>
                    </ChatFooterContainer>
                }
            </StyledRoot>
            {Platform.OS == 'android' &&
                <View style={{ paddingBottom: keyboardUp ? 20 : 0, backgroundColor: 'white' }}>
                    <ChatFooterContainer>
                        <MessageContainer>
                            <MessageInput
                                onFocus={() => { setKeyboardUp(true) }}
                                onBlur={() => setKeyboardUp(false)}
                                placeholderTextColor={'black'}
                                value={message}
                                onChangeText={(val) => { setMessage(val) }}
                                placeholder='Type a message .....'></MessageInput>
                            <SendMessageButton onPress={sendMessage}>
                                <SendMessageIcon />
                            </SendMessageButton>
                        </MessageContainer>
                    </ChatFooterContainer>
                </View>
            }
        </>
    )
}

export default Chat