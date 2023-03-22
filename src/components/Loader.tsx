import React, {useState,FC} from 'react';
import {Alert, Modal, StyleSheet, Text, ActivityIndicator, View} from 'react-native';
import { Colors } from '../common/Utils';


type Props = {
    loading:boolean
    setLoading:any
}

const Loader:FC<Props> = (props) => {
  const {loading,setLoading} = props;  
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setLoading(!loading);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <ActivityIndicator color={Colors.primary} size="large" />
            <Text style={styles.modalText}>Loading...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor:'transparent'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal:10,
    paddingTop:10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    marginBottom: 10,
    textAlign: 'center',
    fontSize:12,
    color:Colors.primary
  },
});

export default Loader;