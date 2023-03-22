import { View, Text, StyleSheet } from 'react-native'
import React,{FC} from 'react'
import { Colors, hp, wp } from '../common/Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

type Props = {
  item: any
}
const ShareCarComponent:FC<Props> = (props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
      <View style={styles.firstContainer}> 
      <View>
      <Text style={styles.textBold}>{item.endTime}</Text>
      <Text style={{color:Colors.GRAY}}>3h40</Text>
      <Text style={[styles.textBold,{marginTop:hp(2)}]}>{item.endTime}</Text>
      </View>  
      <View style={{alignItems:'center',marginHorizontal:wp(1)}}>
      <View style={styles.lineContainer}/>
      <View style={styles.lineView}/>
      <View style={styles.lineContainer}/>
      </View>

      <View>

      <View>
      <Text style={[styles.textBold,{marginTop:-5}]}>{item.fromAddress}</Text>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.primary} size={25}/>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.GRAY} size={25}/>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.GRAY} size={25}/>
      </View>
      </View>

      <View style={{marginTop:hp(2.5)}}>
      <Text style={styles.textBold}>{item.toAddress}</Text>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.GRAY} size={25}/>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.primary} size={25}/>
        <MaterialCommunityIcons name='seat-passenger' color={Colors.GRAY} size={25}/>
      </View>
      </View>
      </View>
      </View>
      <Text style={styles.textBold}>{item.price}</Text>
      </View>

      <View style={styles.secondContainer}>
      <Ionicons name="ios-person-circle" size={50} color={Colors.GRAY}/>
      <View style={{marginLeft:wp(1)}}>
      <Text style={styles.textBold}>{item.name}</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <AntDesign name="star" size={12} color={Colors.GRAY}/>
        <Text style={{color:Colors.GRAY,marginLeft:wp(2)}}>{item.rating}</Text>
      </View>
      </View>
      </View>
     
    </View>
  )
}

export default ShareCarComponent;

const styles= StyleSheet.create({
  container:{
    width:wp(90),
    backgroundColor:Colors.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    padding:15,
    alignSelf:'center',
    marginVertical:hp(0.5),
    borderRadius:12
  },
  firstContainer:{
    flexDirection:'row',
  },
  lineContainer:{
    width:10,
    height:10,
    borderRadius:5,
    borderWidth:1
  },
  lineView:{
    width:4,
    height:hp(7),
    backgroundColor:Colors.BLACK
  },
  secondContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:hp(2)
  },
  textBold:{
    fontSize:16,
    color:Colors.BLACK,
    fontWeight:'800'
  } 
})