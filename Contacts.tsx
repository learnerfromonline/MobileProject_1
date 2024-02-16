import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contacts() {
    const contacts=[
        {
            uid:1,
            name:'Ram Kumar',
            Address:'TPG',
            image:'https://res.cloudinary.com/dcqnqov0i/image/upload/v1707406279/anime4_ajx5db.jpg',
        },
        {
            uid:2,
            name:'Pavan Sai',
            Address:'Tpg',
            image:'https://res.cloudinary.com/dcqnqov0i/image/upload/v1707406277/anime2_bisicc.jpg',
        },
        {
            uid:3,
            name:'Chandu',
            Address:'Vizag',
            image:'https://res.cloudinary.com/dcqnqov0i/image/upload/v1707406277/anime1_qi6xu7.jpg',
        },
        {
            uid:4,
            name:'Sudhakar',
            Address:'BVRM',
            image:'https://res.cloudinary.com/dcqnqov0i/image/upload/v1707406277/anime3_g7afgr.jpg',
 } ]
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Contacts</Text>
      <ScrollView style={styles.scrollcard} scrollEnabled={false}>
        {
        contacts.map(({uid,name,Address,image})=>(
            <View key={uid} style={styles.cardbody}>
                <Image source={
                  {
                    uri:image
                  }
                } style={styles.image}/>
              <View>
              <Text style={styles.names}>{name}</Text>
                <Text style={styles.address}>{Address}</Text>
              </View>
            </View>
        ))
}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'green',
        marginVertical:20,
        marginHorizontal:20,
    },
    main:{
        color:'grey',
        backgroundColor:'#99AAAB',
        margin:12,
        borderRadius:4,

    },
    image:{
        width:100,
        height:100,
        borderRadius:100/2,
        marginTop:20,
        marginLeft:10,
    },
    names:{
        color:'white',
        marginLeft:20,
        fontSize:17,
marginTop:40,

    },
    address:{
        color:'white',
        fontSize:17,
        marginLeft:10,
        // marginTop:,


    },
    cardbody:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#2F363F',
        paddingBottom:20,

    }
})