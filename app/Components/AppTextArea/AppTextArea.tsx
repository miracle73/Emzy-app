import { TextArea } from 'native-base'
import React from 'react'
import { AppTextAreaContainer } from './AppTextArea.styled'

interface Props {
    height?: string;
    placeHolder?: string;
    onChange: (e: any) => void;
}

const AppTextArea: React.FC<Props> = ({ height, placeHolder, onChange }) => {
  return (
    <AppTextAreaContainer>
      <TextArea h={height ? height : 136} borderRadius={'12px'} placeholder={placeHolder ? placeHolder : "Enter text here"} w="100%" autoCompleteType={true} onChange={(e) => onChange(e)} background={'#ffffff'} fontSize={'16px'} />
    </AppTextAreaContainer>
  )
}

export default AppTextArea