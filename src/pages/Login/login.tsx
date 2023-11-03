import React, { useState, useEffect } from "react";
import { getColors } from "../../../Colors";
import { getTheme, useDarkMode } from "../../hooks/useDarkMode";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
  Alert
} from "react-native";

import axios from "axios";
import { makeRequest } from "../../services/fecth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useStorageToken,
  useStorageUser,
  useToken,
  useUser
} from "../../hooks/useAuth";

export const Login = ({}) => {
  const [isDark, toogleDark] = useDarkMode();
  const [storageToken, setStorageToken] = useStorageToken();
  const [storageUser, setStorageUser] = useStorageUser();
  const [token, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useUser();

  const colors = getColors(getTheme(isDark));
  const videira_black = require("../../assets/images/videira-black.png");
  const videira_white = require("../../assets/images/videira_white.png");

  const signIn = async () => {
    let url = "http://100.26.48.73/api/login";
    let dados = {
      email: 'yan.amorim.silva@gmail.com',
      password: 'admin123'
    };

    try {
      const { data, status } = await axios.post(url, dados);
      const { user, token } = data;
      Alert.alert(JSON.stringify(data.token, null,4))

      if (status == 200) {
        setStorageToken(token);
        setStorageUser(user);
        setToken(token);
        setUser(user);
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error, null,4))
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primaryColor,
        paddingHorizontal: 16
      }}>
      {isDark ? (
        <View style={{}}>
          <Image
            source={videira_black}
            style={{ width: 120, height: 120 }}
          />
        </View>
      ) : (
        <View style={{}}>
          <Image
            source={videira_white}
            style={{ width: 120, height: 120 }}
          />
        </View>
      )}
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          width: "100%",
          padding: 10,
          height: 250
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: colors.secondaryColor
          }}>
          Login
        </Text>
        <TextInput
          value={email}
          onChangeText={texto => {
            setEmail(texto);
          }}
          placeholder='Login'
          placeholderTextColor={colors.secondaryColor}
          style={{
            borderRadius: 4,
            width: "100%",
            height: 40,
            borderWidth: 0.5,
            paddingHorizontal: 16,
            borderColor: colors.secondaryColor,
            color: colors.secondaryColor
          }}
        />
        <TextInput
          value={password}
          onChangeText={texto => {
            setPassword(texto);
          }}
          placeholder='Senha'
          placeholderTextColor={colors.secondaryColor}
          style={{
            borderRadius: 4,
            width: "100%",
            height: 40,
            borderWidth: 0.5,
            paddingHorizontal: 16,
            borderColor: colors.secondaryColor,
            color: colors.secondaryColor
          }}></TextInput>
        <TouchableOpacity
          onPress={() => {
            signIn();
          }}
          style={{
            backgroundColor: "#399cff",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 4
          }}>
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          toogleDark();
        }}
        style={{
          position: "absolute",
          bottom: 8,
          left: 8,
          padding: 8,
          backgroundColor: "#000000a6",
          borderRadius: 99
        }}>
        <Text>{isDark ? "☀" : "🌘"}</Text>
      </TouchableOpacity>
    </View>
  );
};
