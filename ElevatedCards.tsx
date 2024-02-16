import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return(
    <SafeAreaView>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>

        
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>Hai</Text>
            </View>
      
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>one</Text>
            </View>
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>Two</Text>
            </View>
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>Three</Text>
            </View>
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>Four</Text>
            </View>
            <View style={[styles.card,styles.cardEvaluated]}>
                <Text>Five</Text>
            </View>
      
      </ScrollView>
      </SafeAreaView>
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
        // flex:1
        
    },
    card:{
        padding:10,
        margin:6,
        width:100,
        borderRadius:10,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    cardEvaluated:{
        backgroundColor:'red',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'pink',
        shadowRadius:7

    }

})