import { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import * as React from "react";
import { colors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';


const router = useRouter();

export default function Configuracoes (){
    return(
        <View className="flex-1 bg-black items-center justify-center">
  <Text className="text-gray-100 text-base font-bold uppercase mb-4">Hi</Text>

  <Link
    href="/dashboard"
    className="text-gray-100 text-base font-bold uppercase w-32 h-14 bg-orange-500 items-center justify-center rounded-lg flex-row"
  >
    Voltar
  </Link>
</View>
    )

}