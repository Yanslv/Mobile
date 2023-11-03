import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUserStore, setTokenStore } from "../redux/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../api';


export const useStorageToken = () => {
    const [token, setToken] = useState('');

    const asyncToken =  async() => {
        let hasToken = await AsyncStorage.getItem('@token');
        if (hasToken){
            setToken(hasToken);
        }
    };
    
    useEffect(() => {
        asyncToken();
    }, [])
    
    const changeToken = async(token: string) => {
        await AsyncStorage.setItem('@token',token);
        setToken(token);
    };

    return [token, changeToken];
}

export const useStorageUser = () => {
    const [user, setUser] = useState(null);

    const asyncUser = async() => {
        const hasUser = await AsyncStorage.getItem('@user');
        if (hasUser){
            setUser(JSON.parse(hasUser));
        }

    } 
    
    useEffect(() => {
        asyncUser();
    }, [])

    const changeUser = async(user: any) => {
        await AsyncStorage.setItem('@user',JSON.stringify(user));
        setUser(user);
    };

    return [user, changeUser];
}

export const useUser = () => {
    // Asuuma que o usuário está no redux store;
    const user = useSelector(state => state.auth.user)?.payload??null;
    const dispatch = useDispatch();
    const setUser = (user: any) => dispatch(setUserStore(user));
  
    return [user, setUser];
  };

  export const useToken = () => {
    // Asuuma que o usuário está no redux store;
    const token = useSelector(state => state.auth.token)?.payload??null;
    const dispatch = useDispatch();
    const setToken = (token: string) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return dispatch(setTokenStore(token));
    };
  
    return [token, setToken];
  };