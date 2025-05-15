import { useState } from "react"
import { View, Image, Text, StatusBar } from "react-native"
import { Link, Redirect } from "expo-router"



import { colors } from "../styles/colors"
import { Button } from "../components/button"


export default function Home(){
    
    return (
        <View className=" flex-1 bg-black  items-center justify-center">
            <StatusBar barStyle="light-content"/>
            
            <View className="w-full mt-8 gap-6">

                <Text className="text-gray-100 text-4xl font-bold uppercase mb-8 text-center ">Bem-Vindo</Text>

                <View className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg ">
                    <Link href="/login" className="text-green-500 text-base font-bold uppercase">Entrar</Link>

                </View>


                <View className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg ">
                    <Link href="/register" className="text-green-500 text-base font-bold uppercase">cadastra-se</Link>

                </View>


             <View className="flex-row items-center justify-center mt-12 ">
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