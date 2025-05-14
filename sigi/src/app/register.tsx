import { useState } from "react";
import { View, Image, StatusBar, Alert, Text } from "react-native"
import { AntDesign, FontAwesome6 , Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import axios from "axios"

import { Input } from "../components/input";
import { colors } from "../styles/colors";
import { Button } from "../components/button";


export default function Register(){
    return(
        
        <View  className=' flex-1 bg-black items-center justify-center'>
          <StatusBar barStyle="light-content" />
     
         
         <View className="w-full mt-8 gap-4 ">

             <Input>

             <FontAwesome6
             name="user-circle"
             size={20}
             color={colors.green[200]}
             />
             <Input.Field
             placeholder="Digite o seu nome "
             //onChangeText={setName}
             />


             </Input>

             <Input>

             <MaterialIcons
             name="alternate-email"
             size={20}
             color={colors.green[200]}
             />
             <Input.Field
             placeholder="Digite o seu email " keyboardType="email-address"
             //onChangeText={setEmail}
             />
              </Input>

              <Input>
              <AntDesign
             name="phone"
             size={20}
             color={colors.green[200]}
             />
             <Input.Field
             placeholder="Digite o seu contacto  " keyboardType="phone-pad"
             //onChangeText={setEmail}
             />


             </Input>

             <Input>
              <Ionicons
             name="key-outline"
             size={20}
             color={colors.green[200]}
             />
             <Input.Field
             placeholder="Digite a sua senha  " 
             //onChangeText={setEmail}
             />


             </Input>

             <Input>
              <Ionicons
             name="key-outline"
             size={20}
             color={colors.green[200]}
             />
             <Input.Field
             placeholder="Confirme a sua senha  " 
             //onChangeText={setEmail}
             />


             </Input>

             <Button title="Cadastrar" //onPress={handleRegister} isLoading={isLoading}
             />
             <View className="flex-row items-center justify-center  ">
             <Text className="text-gray-100 text-base font-bold text-center mt-8" >Já possui uma conta?</Text> 
             <Link href="/" className="text-orange-500 text-base font-bold text-center mt-8"> Entrar </Link>
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