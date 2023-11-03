import React from "react";
import {
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StatusBar,
  Text,
  View
} from "react-native";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <StatusBar
        barStyle='light-content'
        hidden={false}
        backgroundColor='#0E1511'
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
      />
      <ScrollView style={{ backgroundColor: "#000", flex: 1 }}>
        <View
          style={{
            // backgroundColor: "#6E56CF",
            borderBottomColor: "#6E56CF",
            borderWidth:1,
            paddingHorizontal: 8,
            paddingBottom:8,
            paddingTop:4
          }}>
          <Text
            style={{ color: "#E2DDFE", fontWeight: "bold", fontSize: 16 }}>
            Bem vindo, Lider Yan Carlos
          </Text>
        </View>
        {[0,1,2,3,4,5,6,7,8,9].map( I => (
          <View
          style={{
            backgroundColor: "#6E56CF",
            padding: 12,
            height:160,
            borderBottomEndRadius: 8,
            borderBottomStartRadius: 8,
            borderTopStartRadius: 8,
            borderTopEndRadius: 8,
            margin: 10
          }}>
          <Text
          style={{ color: "#E2DDFE", fontWeight: "bold", fontSize: 16 }}>
          TESTEEEEEEEEEEEEEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Text>
          </View>
          ))}
      </ScrollView>
    </View>
  );
}
