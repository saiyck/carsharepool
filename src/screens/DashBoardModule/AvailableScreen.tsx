import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,FC} from 'react'
import { Colors, hp, wp } from '../../common/Utils'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchHistory from '../../components/SearchHistory'
import AddPassengerPopup from '../../components/AddPassengerPopup'
import DatePicker from 'react-native-date-picker'
import ShareCarComponent from '../../components/ShareCarComponent'
import { Carsdata } from '../../common/Server'

type Props = {
  route:any,
  navigation:any
}

const AvailableScreen: FC<Props> =({route, navigation})=> {
  
  const [showModal,setShowModal] = useState(false);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{backgroundColor:Colors.secondary}} showsVerticalScrollIndicator={false}>
      <View style={{  marginHorizontal:wp(5)}}>
       <Text style={styles.title}>Today</Text>
       <View style={{flexDirection:'row',flexWrap:'wrap'}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.text}>Euclid Grand, USA
       </Text>
       <Ionicons name="arrow-forward" size={20}/>
        </View>
       <Text style={[styles.text]}>Cleveland State University, USA
        </Text>
        </View>
        <Text style={[styles.text,{marginBottom:hp(1)}]}>{Carsdata.length} rides availabe
        </Text>
        </View> 
        {
          Carsdata.map((item)=> <ShareCarComponent item={item}/>)
        }
      
    </ScrollView>
  )
}

export default  AvailableScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:Colors.secondary,
    },
    title:{
      marginTop:hp(3),
      marginBottom:hp(1),
      fontSize:24,
      fontWeight:'bold',
      color:Colors.BLACK
    },
    text:{
      fontSize:16,
      fontWeight:'800',
  }
})