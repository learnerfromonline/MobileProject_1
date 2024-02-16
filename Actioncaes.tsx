import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Actioncaes() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
  return (
      <View>
          <ScrollView style={styles.scrollview} onScroll={true} showsVerticalScrollIndicator={true}>
      <Text style={styles.heading} >Action Card</Text>
      <View style={styles.card,styles.cardevaluate}>
        <View style={styles.headercontainer}>
            <Text style={styles.heading1}>Hello What Are You Doing</Text>
        </View>
        <Image source={
            require('../Assets/caartoon1.jpg')
        } style={styles.image}/>
        <View style={styles.bodyContainer}>
        <Text numberOfLines={3} style={styles.textbody1}>
            Hello,This is ram kumar
            from the Branch of Information Technology.
            Here i'm Working in the project on the basic properties of the mobile application.
            Support me!!!!!
        </Text>
        </View>
        <View style={styles.footers}>
            <TouchableOpacity /* onPress={openWebsite('https://www.linkedin.com/in/satya-ram-kumar/') }*/>
                <Text style={styles.linktext}>Linkedin</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footers}>
            <TouchableOpacity /* onPress={openWebsite('https://reactnative.dev/docs/linking')} */>
                <Text style={styles.linktext}>Instagram</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        // margin:8,
    // marginVertical: 10,
        marginHorizontal:19,
        fontWeight:'bold',
        color:'black'
    },
    card:{
        // flex:1,
        color:'white',
    },
    cardevaluate:{
        backgroundColor:'black',
        margin:10,
        borderBottomLeftRadius:40,
        borderTopEndRadius:30
    },
    headercontainer:{
        color:'#2C3335',
        backgroundColor:'#2C3335',
        paddingLeft:20,
        paddingTop:12,
        paddingBottom:10,
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30
        
    },
    // headertext:{},
    image:{
        width:200,
        height:200,
        marginTop:12,
        marginLeft:100,
        borderRadius:30
    },
    bodyContainer:{
        color:'white',
        margin:12,
        marginHorizontal:20,
        
    },
    Scrollview:{
        marginHorizontal:20
    },
    textbody1:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    linktext:{
        color:'black',
        marginHorizontal:88,
        fontSize:15,
        width:200,
        backgroundColor:'white',
        textAlign:'center',
        fontWeight:'700',
        borderBottomRightRadius:20,
        borderTopLeftRadius:20,
        borderColor:'red'
        
        

        // borderColor:'white'
    },
    heading1:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    footers:{
        // flex:1,
        flexDirection:'row',
        padding:9,
        alignItems:'center',
        justifyContent:'space-between'
    }

})