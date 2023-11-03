import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { makeRequest } from "../../services/fecth";
import axios from "axios";
import { useToken } from "../../hooks/useAuth";

export const Usuarios = () => {
  const [usuario, setUsers] = useState([]);
  const [token, setToken] = useToken();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      users();
    }, 500);
  }, []);

  const users = async () => {
    axios
      .get("http://100.26.48.73/api/users/index", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        if ((response.status = 200)) {
          setUsers(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    users();
  }, []);

  return (
    <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#5c267a",
          height: 60,
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: 16
        }}>
        <View style={{}}>
          <Text style={{ color: "#ffff", fontSize: 24 }}>Usuarios</Text>
        </View>
      </View>
      <ScrollView
        style={{ paddingHorizontal: 16, paddingVertical: 8 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
        {usuario.map(item => (
          <ScrollView
            style={{ paddingHorizontal: 16, paddingVertical: 8 }}
            key={item.id + item.name}>
            <View style={{ backgroundColor: "#fefefc", borderRadius: 4 }}>
              <Text style={{ color: "#000" }}>Nome: {item.name}</Text>
              <Text style={{ color: "#000000" }}>Email: {item.email}</Text>
              <Text style={{ color: "#000000" }}>
                Sexo: {item.sexo === "M" ? "MASCULINO" : "FEMININO"}
              </Text>
            </View>
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};
