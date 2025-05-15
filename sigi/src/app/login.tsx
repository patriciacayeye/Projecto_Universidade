import { useState } from "react"
import { View, Image, Text, StatusBar } from "react-native"
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { Link, Redirect } from "expo-router"
import { useRouter } from 'expo-router';

import { Input } from "../components/input"
import { colors } from "../styles/colors"
import { Button } from "../components/button"

const router = useRouter();

export default function Login(){
    return (
        <View className=" flex-1 bg-black  items-center justify-center">
            <StatusBar barStyle="light-content"/>
            
            <View className="w-full mt-8 gap-4">

                <Input >
                <MaterialIcons
                name="alternate-email"
                size={20}
                color={colors.orange[500]}
                />
                <Input.Field
                placeholder="Digite o seu email"
                className="text-lg"
                //onChangeText={}
                />
                </Input>
                <Input>
                <Ionicons
                name="key-outline"
                size={20}
                color={colors.orange[500]}
                />
                <Input.Field
                placeholder="Digite sua senha"
                //onChangeText={}
                />
                </Input>
                <Link  href="/register"  className=" text-gray-100 text-base font-bold text-left "> Esqueceu sua senha? </Link>
                
                <Button 
  title="Entrar" 
  onPress={() => router.push('/dashboard')} 
    />


                <View className="flex-row items-center justify-center  ">
             <Text className="text-gray-100 text-base font-bold text-center mt-8" >Ainda não tem uma conta?</Text> 
             <Link href="/register" className="text-orange-500 text-base font-bold text-center mt-8">Cadastra-se</Link>
             </View>

             <View className="flex-row items-center justify-center  ">
                <View className="h-1 bg-gray-100 w-56 my-2 " />
               <Text className="text-orange-500 text-base font-bold text-center "> Ou </Text>
               <View className="h-1 bg-gray-100 w-56 my-2 " />
             </View>

             <Button title="Entrar com google"//onPress={handleRegister} isLoading={isLoading}
             />
             

            </View>
        </View>
        
    )
}