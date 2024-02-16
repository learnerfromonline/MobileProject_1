import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
      <Text style={styles.heading}>Welcome</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
            <Text>Hai</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
            <Text>Hello</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
            <Text>Holla</Text>
        </View>
        <View style={[styles.card,styles.cardfour]}>
            <Text>Ram</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        padding:10,
        fontWeight:'bold',
        color:'black',

    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        width:100,
        height:100,
        padding:10,
        borderRadius:20,
        margin:6,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        fontSize:24,

    },
    cardone:{
        backgroundColor:'blue',
        
    },
    cardtwo:{
        backgroundColor:'green',
    },
    cardthree:{
        backgroundColor:'yellow'
    },
    cardfour:{
        backgroundColor:'pink'
    }
})