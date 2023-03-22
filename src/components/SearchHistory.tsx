import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React,{FC} from 'react'
import { Colors, hp, wp } from '../common/Utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


type Props = {
 onPressHistory:any
}

const SearchHistory: FC<Props> =(props)=> {
  const {onPressHistory} = props;
  return (
    <View>
      <View style={{width:wp(90),height:1,backgroundColor:Colors.GRAY,marginVertical:hp(1)}}/>  
      <TouchableOpacity onPress={()=> onPressHistory()} style={style.historyTextContainer}>
      <Ionicons name="time-outline" size={25} color={Colors.GRAY}/>
      <View style={{width:wp(70),marginLeft:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={style.text}>Euclid Grand, USA
       </Text>
       <Ionicons name="arrow-forward" size={20}/>
        </View>
       <Text style={style.text}>Cleveland State University, USA
        </Text>
        <Text style={{color:Colors.GRAY}}>Today, 1 passenger</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={30} color={Colors.GRAY}/>
      </TouchableOpacity>
    </View>
  )
}
export default SearchHistory;

const style= StyleSheet.create({
    container:{
        width:wp(90),
    },
    historyTextContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        fontSize:16,
        fontWeight:'800'
    }
})