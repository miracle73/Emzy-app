import { StyleSheet, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { width } from '../../Utils/utility_functions/utilityFunctions';
import { colors } from '../../Utils/theme/colors';

const AppModal = ({ children, modalVisible = false, }: { children: any, modalVisible: boolean }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Modal
            visible={modalVisible || openModal}
            animationType="slide"
            transparent={true}
            style={{ alignItems: 'center', justifyContent: 'flex-end', width: '100%', height: '100%' }}
        >
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 10 }}>
                <View style={{ backgroundColor: colors.white, width: width, padding: 20, borderTopLeftRadius: 9, borderTopRightRadius: 9 }}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default AppModal

const styles = StyleSheet.create({})