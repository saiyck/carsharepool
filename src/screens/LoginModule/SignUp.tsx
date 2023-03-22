import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image, Alert } from 'react-native'
import React,{useState,FC} from 'react'
import { Colors,wp,hp } from '../../common/Utils'


type Props = {
 navigation: any
}

const SignUp: FC<Props> = (props) => {
  const {navigation} = props;
  const [focusedInput,setFocusedInput] = React.useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
     <View style={styles.firstContainer}>
       <Text style={styles.mainText}>Sign Up</Text>
       <View style={{marginTop:hp(2)}}>
        <TextInput selectionColor={Colors.primary} keyboardType='email-address' onChangeText={(e)=> setEmail(e)} placeholderTextColor={focusedInput == 'input1' ? Colors.primary : null} onFocus={()=> setFocusedInput('input1')} placeholder='First Name' style={[styles.textInput,{borderBottomColor: firstName || focusedInput == 'input1' ? Colors.primary : null}]}/>
        <TextInput selectionColor={Colors.primary} keyboardType='default' onChangeText={(e)=> setPassword(e)} placeholderTextColor={focusedInput == 'input2' ? Colors.primary : null} onFocus={()=> setFocusedInput('input2')} placeholder='Last Name' style={[styles.textInput,{borderBottomColor: lastName || focusedInput == 'input2' ? Colors.primary : null}]}/>
        <TextInput selectionColor={Colors.primary} keyboardType='email-address' onChangeText={(e)=> setEmail(e)} placeholderTextColor={focusedInput == 'input3' ? Colors.primary : null} onFocus={()=> setFocusedInput('input3')} placeholder='Email' style={[styles.textInput,{borderBottomColor: email || focusedInput == 'input3' ? Colors.primary : null}]}/>
        <TextInput selectionColor={Colors.primary} keyboardType='default' onChangeText={(e)=> setPassword(e)} placeholderTextColor={focusedInput == 'input4' ? Colors.primary : null} onFocus={()=> setFocusedInput('input4')} placeholder='Password' style={[styles.textInput,{borderBottomColor: password || focusedInput == 'input4' ? Colors.primary : null}]}/>
       </View>
      <TouchableOpacity style={styles.loginButton}>
      <Text style={{color:Colors.secondary}}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
       <Text style={styles.text}>Sign Up with</Text>
       <TouchableOpacity>
       <Image source={require('../../assets/images/facebook.png')} style={ {width:45,height:45,marginLeft:wp(5)}}/>
       </TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('../../assets/images/gmail.png')} style={{width:30,height:30,marginLeft:wp(5)}}/>
     </TouchableOpacity>
      </View>
     </View>

     <View style={styles.secondContainer}>
      <Text style={{fontWeight:'600'}}>Already have an account?<Text onPress={()=> navigation.navigate("Login")} style={{color:Colors.primary}}> Log In</Text></Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  firstContainer:{
    flex:0.9,
    backgroundColor:Colors.secondary,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    elevation:0.2,
    paddingHorizontal:wp(10)
  },
  secondContainer:{
   flex:0.1,
   justifyContent:'center',
   alignItems:'center'
  },
  textInput:{
    borderBottomWidth:1,
    fontSize:14,
    paddingBottom:1,
    marginTop:hp(2),
    color:Colors.primary
  },
  text:{
    fontSize:12,
    fontWeight:'500'
  },
  mainText:{
    fontSize:24,
    fontWeight:'bold',
    color:Colors.BLACK,
    marginTop:hp(15)
  },
  loginButton:{
    width:wp(40),
    height:hp(5),
    backgroundColor:Colors.primary,
    alignSelf:'center',
    marginTop:hp(6),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6
  },
  socialContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:hp(10)
  }
})

export default SignUp;

