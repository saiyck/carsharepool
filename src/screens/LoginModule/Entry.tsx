import { View, Text, StyleSheet, Image } from 'react-native'
import React,{FC} from 'react'
import { Colors, hp, wp } from '../../common/Utils'
import LoginButton from '../../components/LoginButton'
import {useSelector} from 'react-redux'


type Props = {
  navigation : any
}

const Entry: FC<Props> = ({navigation}) => {
  const userData = useSelector((state:any)=> state.login.userData)

  React.useEffect(()=> {
   console.log('userData',userData)
  },[])
  return (
    <View style={styles.container}>
        <Text style={styles.text}>CSU Car Share Pool</Text>
        <Image style={styles.imageCar} source={require('../../assets/images/carImg.png')}/>
       <View style={styles.buttonContainer}>
        <LoginButton onButtonPress={()=> navigation.navigate("Login")} lable='Log In' loginType={true}/>
        <LoginButton onButtonPress={()=> navigation.navigate("SignUp")} lable='Sign Up' loginType={false}/>
       </View>
    </View>
  )
}
export default Entry;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.primary,
    alignItems:'center'
  },
  buttonContainer: {
    position:'absolute',
    bottom: hp(5)
  },
  imageCar: {
    width:wp(80),
    height:hp(20),
    marginTop:hp(20)
  },
  text:{
    fontSize:28,
    color: Colors.secondary,
    marginTop:hp(10)
  }
})