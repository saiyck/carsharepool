import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import React,{FC} from 'react'
import { Colors, hp, wp } from '../../common/Utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector,useDispatch} from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { logoutUser } from '../../redux/actions/LoginActions'


type Props = {
    navigation:any
}

 const ProfileScreen:FC<Props> = (props) => {
    const {navigation} = props;   
 const userData = useSelector((state:any)=> state.login.userData);
 const dispatch = useDispatch();
 const [loading,setLoading] = React.useState(false);


const handleLogout = () => {
  dispatch(logoutUser())
  navigation.replace("Entry");
}


  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
         <Ionicons name="arrow-back" color={Colors.BLACK} size={30}/>
         </TouchableOpacity>
         <View style={styles.profileContainer}>
         <View style={styles.profile}>
         <Ionicons name="ios-person-circle" size={50} color={Colors.GRAY}/>
          <View style={{marginLeft:wp(1)}}>
            <Text style={styles.text}>Hello, {userData.firstName}</Text>
            <Text style={styles.textsub}>{userData.username}</Text>
          </View>
         </View>
         <View style={styles.line}/>
         <TouchableOpacity onPress={()=> handleLogout()} style={styles.listContainer}>
         <AntDesign name="closecircleo" size={25} color={Colors.BLACK}/>
         <Text style={styles.textList}>Log out</Text>
         </TouchableOpacity>
         {/* <View style={styles.line}/> */}
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.secondary,
        padding:15
    },
    profile:{
        marginTop:hp(2),
        flexDirection:'row',
        alignItems:'center',
        marginBottom:hp(5),
    },
    profileContainer:{
        paddingHorizontal:wp(5),
        backgroundColor:Colors.secondary,
        elevation:2,
        marginTop:hp(2),
        paddingBottom:hp(2)
    },
    text: {
        fontSize:16,
        color:Colors.BLACK,
        fontWeight:'600'
    },
    textsub:{
        fontSize:12,
        color:Colors.primary,
    },
    line:{
        height:1,
        width:wp(90),
        backgroundColor:Colors.GRAY,
        marginVertical:hp(1),
        marginLeft:wp(-4)
    },
    listContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    textList:{
        fontSize:18,
        marginLeft:wp(5),
        paddingVertical:hp(1)
    }
})

export default ProfileScreen;