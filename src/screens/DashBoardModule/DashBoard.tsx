import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,FC} from 'react'
import { Colors, hp, wp } from '../../common/Utils'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchHistory from '../../components/SearchHistory'
import AddPassengerPopup from '../../components/AddPassengerPopup'
import DatePicker from 'react-native-date-picker'

type Props = {
  navigation:any
}

const DashBoard:FC<Props> = (props) => {
  const {navigation} = props;
  const [showModal,setShowModal] = useState(false);
  const [count,setCount] = useState(1);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const data = [1,2,3,4,5,6,7,8,9];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={()=> props.navigation.navigate("Profile")} style={styles.profileContainer}>
       <Ionicons name="ios-person-circle" size={40} color={Colors.GRAY}/>
       </TouchableOpacity>  
      <Text style={styles.title}>Find a ride</Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder='Leaving from...'/>
        <View style={styles.line}/>
        <TextInput placeholder='Going to...'/>
        <View style={styles.line}/>
        <View style={styles.calPersonContainer}>
         <View style={styles.calContainer}>
          <TouchableOpacity onPress={()=> setOpen(true)}>
         <AntDesign name="calendar" size={20}/>
         </TouchableOpacity>
         <Text style={{marginLeft:5,fontSize:16}}>Today</Text>
          </View> 
          <View style={{
            width:1,
            height:hp(4),
            backgroundColor:Colors.GRAY
          }}/>
         <View style={styles.personContainer}>
          <TouchableOpacity onPress={()=> setShowModal(true)}>
          <Ionicons name="person-outline" size={20}/>
          </TouchableOpacity>
          <Text style={{marginLeft:5,fontSize:18}}>{count}</Text>
         </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("Available")} style={styles.searchButon}>
          <Text style={{color:Colors.secondary}}>Search</Text>
        </TouchableOpacity>
      </View>

     <View style={styles.secondContainer}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.BLACK,
        marginBottom:hp(2)
      }}>Recent Searches</Text>
      {data.map(()=><SearchHistory onPressHistory={()=> navigation.navigate("Available")}/>)}
      </View> 
      <AddPassengerPopup onPressContinue={(coun:any)=> {
        setShowModal(false)
        setCount(coun)
        }} showModal={showModal}/>
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </ScrollView>
  )
}

export default DashBoard;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.secondary,
    },
    searchContainer:{
      width:wp(90),
      elevation:5,
      backgroundColor:Colors.secondary,
      borderRadius:8,
      paddingHorizontal:wp(5),
      alignSelf:'center'
    },
    line:{
      width:wp(80),
      alignSelf:'center',
      height:1,
      backgroundColor:Colors.GRAY
    },
    calPersonContainer:{
      marginTop:hp(1),
      flexDirection:'row',
    },
    calContainer:{
      width:wp(60),
      flexDirection:'row',
      alignItems:'center'
    },
    personContainer:{
      width:wp(20),
      flexDirection:'row',
      alignItems:'center',
      marginLeft:wp(1)
    },
    searchButon:{
      backgroundColor:Colors.primary,
      paddingVertical:hp(1),
      justifyContent:'center',
      alignItems:'center',
      marginTop:hp(1),
      width:wp(90),
      alignSelf:'center',
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8
    },
    title:{
      marginBottom:hp(4),
      marginTop:hp(-3),
      marginLeft:wp(5),
      fontSize:24,
      fontWeight:'bold'
    },
    secondContainer:{
       padding:20
    },
    profileContainer:{
      alignItems:'flex-end',
      margin:10
    }
})