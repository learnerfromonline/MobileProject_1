import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View >
      <Text style={styles.heading}>Image</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.card,styles.cardElevation]}>
        <Image
        source={{
            uri:'data:image/jpeg;base64,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'
        }}
        style={styles.image}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardtitle}>Hawai</Text>
            <Text style={styles.cardlabel}>Nature Picture</Text>
            <Text style={styles.carddesc}>Explore and enjoy the place whwew ever ypu want and go where ever you go.</Text>
            <Text style={styles.cardfooter}>Address:Hawai,manahattan</Text>
            <Text>Welcome</Text>
        </View>
      </View>
      <View style={[styles.card,styles.cardElevation]}>
        <Image
        source={{
            uri:'https://www.collegebatch.com/static/clg-gallery/sasi-institute-of-technology-engineering-tadepalligudem-257426.jpg'
        }}
        style={styles.image}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardtitle}>SITE</Text>
            <Text style={styles.cardlabel}>A Place for Growth</Text>
            <Text style={styles.carddesc}>Provide Full access resources whatever you want -AUTONOMOUS COLLEGE</Text>
            <Text style={styles.cardfooter}>Address:TADEPALLIGUDEM</Text>
            <Text>Welcome</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        padding:10, 
        margin:5,
        color:'black',
        
    },
    image:{
        width:'100%',
        height:180,
        // borderRadius:8,
        borderBottomRightRadius:29,
        borderTopLeftRadius:29,
        // margin:3,
        marginBottom:8,
        
    },
    card:{
        width:360,
        height:360,
        marginHorizontal:18,
        marginVertical:7,
        padding:8,
        borderBottomEndRadius:59,
        elevation:8,
        shadowColor:'green'
    },
    cardElevation:{
        backgroundColor:'black',
    },
    cardBody:{
        color:'white',
        flex:1,
        flexGrow:1,
        paddingHorizontal:20
        
    },
    cardtitle:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:5

    },
    cardlabel:{
        color:'white',
        fontSize:19,
        marginBottom:3,
        
        
    },
    carddesc:{
        color:'#EAF0F1'

        
    },
    cardfooter:{
    
        color:'white',
        // fontSize:14,
        marginVertical:2,
        marginTop:18
    }
})