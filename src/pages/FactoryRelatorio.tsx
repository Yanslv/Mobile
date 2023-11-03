import React, { useState, useRef, useEffect } from 'react'
import { Animated, View, Dimensions, Text} from 'react-native'
import { useDarkMode } from '../hooks/useDarkMode';
import { useNavigation } from '@react-navigation/native';
import { handleRequest } from '../services/fecth';

export const FactoryRelatorio = () => {
 return(
  <View>
    <Text>
      FactoryRelatorio
    </Text>
  </View>
 )
}

