import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window');

export function wp(percentage:number) {
    const value = (percentage * width) / 100;
    return Math.round(value);
  }

 export function hp(percentage:number) {
    const value = (percentage * height) / 100;
    return Math.round(value);
  }


export const Colors = {
   //primary : "#684dc9",
   primary : "#006A4D",
   secondary : "#ffff",
   SECONDARY : '#02D126',
   BLUE : '#4d8bd6',
   BLACK: '#121314',
   GRAY:'#BAB9C0',
   ADDCOLOR:'#845747',
   RATINGCOLOR:'#F59D2D'
}

