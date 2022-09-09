
import {Text} from '@chakra-ui/react'

interface TextModel {
    value ?: string , 
    fontSize ?: string ,
    fontWeight ?: string ,
    children ?: string,
    textAlign ?: any
}

const DefaultText =({children, textAlign, fontSize , fontWeight}: TextModel)=> {
    return (
        <>

            <Text my={'1.5em'} textAlign={textAlign} fontWeight={fontWeight} fontSize={fontSize}  color={'green.300'} >{children}</Text>
        
        </>
    )
}

export default DefaultText;