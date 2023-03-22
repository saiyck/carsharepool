import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React,{FC} from 'react'
import { Colors, hp, wp } from '../common/Utils';

type Props = {
 loginType : boolean,
 lable : string,
 onButtonPress : any
}

const LoginButton : FC<Props> = (props) => {
  const {loginType,lable, onButtonPress} = props;  
  return (
    <TouchableOpacity onPress={()=>onButtonPress()} style={[styles.main,{ 
        backgroundColor: loginType ? Colors.secondary : Colors.primary,
        borderWidth:1,
        borderColor: loginType ? Colors.primary : Colors.secondary
        }]}>
      <Text style={{
        color : loginType ? Colors.primary : Colors.secondary
      }}>{lable}</Text>
    </TouchableOpacity>
  )
}

export default LoginButton;

const styles = StyleSheet.create({
    main: {
        width:wp(80),
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:hp(1.5),
        borderRadius:8,
        marginBottom:hp(2)
    }
})