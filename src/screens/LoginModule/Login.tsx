import { View, Text, StyleSheet, TextInput,TouchableOpacity,ToastAndroid ,Image, Alert, ScrollView } from 'react-native'
import React,{useState,FC} from 'react'
import { Colors,wp,hp } from '../../common/Utils'
import { validateEmail, validateEmpty } from '../../common/common'
import { loginUser } from '../../redux/apiActions/LoginApiActions'
import Loader from '../../components/Loader'
import {useSelector,useDispatch} from 'react-redux';
import { saveUserDetails } from '../../redux/actions/LoginActions'

type Props = {
navigation: any
}

const Login: FC<Props> = (props) => {
  const {navigation} = props;
  const [focusedInput,setFocusedInput] = React.useState('');
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passError,setPassError] = useState("");
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();


const validateFields = () => {
 let isEmailB = true;
 let isPassB = true;
 if(validateEmpty(email)){
   setEmailError("email should not be empty")
   isEmailB = false
 }else if(!validateEmail(email)){
  setEmailError("please enter valid email address")
  isEmailB = false
 }

 if(validateEmpty(password)){
   setPassError("password should not be empty")
   isPassB = false
 }else if(password.length < 8){
  setPassError("password should have at least 8 digits")
  isPassB = false
 }

 if(isEmailB && isPassB){
  return true
 }else{
  return false
 }

}  

const onHnadleSubmit = async() => {
let isValid = validateFields()
  if(isValid){
 setLoading(true)   
 let obj = {
  username: email,
  password: password
}
 const res:any = await loginUser(obj)
  if(res.statusCode && res.status){
    dispatch(saveUserDetails(res.data))
    ToastAndroid.show(res.message,ToastAndroid.SHORT);
    navigation.replace("Main"); 
  }else{
    dispatch(saveUserDetails({}))
    ToastAndroid.show(res.message,ToastAndroid.SHORT);
  }
  }
  setLoading(false)
}

  return (
    <ScrollView>
    <View style={styles.container}>
     <View style={styles.firstContainer}>
       <Text style={styles.mainText}>Log In</Text>
       <View style={{marginTop:hp(2)}}>
        <TextInput 
        selectionColor={Colors.primary} 
        keyboardType='email-address' 
        onChangeText={(e)=>{
        setEmail(e)
        setEmailError("")
        }} 
        placeholderTextColor={focusedInput == 'input1' ? Colors.primary : Colors.GRAY}
        onFocus={()=> setFocusedInput('input1')} 
        placeholder='Email' 
        style={[styles.textInput,{borderBottomColor: email || focusedInput == 'input1' ? Colors.primary : Colors.GRAY}]}/>
        <Text style={styles.errorText}>{emailError}</Text>
        <TextInput 
        selectionColor={Colors.primary} 
        keyboardType='default' 
        onChangeText={(e)=> {
        setPassword(e)
        setPassError("")
        }} 
        placeholderTextColor={focusedInput == 'input2' ? Colors.primary : Colors.GRAY} 
        onFocus={()=> setFocusedInput('input2')} 
        placeholder='Password' 
        style={[styles.textInput,{borderBottomColor: password || focusedInput == 'input2' ? Colors.primary :  Colors.GRAY}]}/>
        <Text style={styles.errorText}>{passError}</Text>
        <Text style={[styles.text,{marginTop:hp(2)}]}>Forgot Password?</Text>
       </View>
      <TouchableOpacity onPress={()=>  onHnadleSubmit()} style={styles.loginButton}>
      <Text style={{color:Colors.secondary}}>Log In</Text>
      </TouchableOpacity >
      <View style={styles.socialContainer}>
       <Text style={styles.text}>Log In with</Text>
       <TouchableOpacity>
       <Image source={require('../../assets/images/facebook.png')} style={ {width:45,height:45,marginLeft:wp(5)}}/>
       </TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('../../assets/images/gmail.png')} style={{width:30,height:30,marginLeft:wp(5)}}/>
     </TouchableOpacity>
      </View>
     </View>
     <View style={styles.secondContainer}>
      <Text style={{fontWeight:'600'}}>Don't have an account?<Text onPress={()=>  navigation.navigate("SignUp")} style={{color:Colors.primary}}> Sign Up</Text></Text>
      </View>
    </View>
    <Loader setLoading={setLoading} loading={loading}/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  firstContainer:{
    // flex:0.9,
    backgroundColor:Colors.secondary,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    elevation:0.2,
    paddingHorizontal:wp(10)
  },
  secondContainer:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:hp(5)
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
    marginTop:hp(20)
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
    marginTop:hp(10),
    paddingBottom:hp(12)
  },
  errorText : {
    color:'red',
    fontSize:10
  }
})

export default Login;

