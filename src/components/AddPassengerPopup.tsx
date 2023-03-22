import React, {useState,FC} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import { Colors, hp, wp } from '../common/Utils';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


type Props = {
//  route: any
showModal: boolean,
onPressContinue : any
}



const AddPassengerPopup: FC<Props> = (props) => {
    // const {passCount} = props.route.params;
    const {showModal,onPressContinue} = props;
    const [count,setCount] = useState(0);


    const IncreaseCount = ()=> {
        if(count < 5){
        setCount(count+1);
        }
    }

    const DecreaseCount = ()=> {
        if(count != 0){
            setCount(count-1);
        }
    }
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            onPressContinue(count);
          }}>
          <View style={styles.centeredView}>

            <View style={styles.modalView}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <MaterialIcons name='keyboard-arrow-left' size={35} color={Colors.GRAY}/>
            <Text style={{fontSize:16}}>1 passenger</Text>
            </View>    
           
            <View style={styles.countContainer}>
            <TouchableOpacity disabled={count ? false : true} onPress={()=> DecreaseCount()}>
            <AntDesign name="minuscircleo" size={30} color={count ? Colors.primary : Colors.GRAY}/>
            </TouchableOpacity>    
            <Text style={styles.modalText}>{count}</Text>
            <TouchableOpacity disabled={count < 5 ? false : true} onPress={()=> IncreaseCount()}>
            <AntDesign name="pluscircleo" size={30} color={count < 5 ?  Colors.primary : Colors.GRAY}/>
            </TouchableOpacity>
            </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => onPressContinue(count)}>
                <Text style={styles.textStyle}>Continue</Text>
              </Pressable>
            </View>

          </View>
        </Modal>
    );
}

export default AddPassengerPopup;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius:20,
      paddingTop: 20,
    //   alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10,
      width:wp(100),
      bottom:0,
      position:'absolute',
      height:hp(40),
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginBottom:10,
      width:wp(30),
      alignSelf:'center',
      position:'absolute',
      bottom:10
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      textAlign: 'center',
      fontSize:38
    },
    countContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:wp(10),
        marginTop:hp(2),
    }
  });
  