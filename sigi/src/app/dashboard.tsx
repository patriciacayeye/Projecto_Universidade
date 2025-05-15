import { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import * as React from "react";
import { Button, Menu, Divider } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { colors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';


const router = useRouter();

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
     
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-row justify-start mt-4">
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu}>
                  <Ionicons
                    name="menu-outline"
                    size={25}
                    color={colors.orange[500]}
                  />
                </Button>
              }
            >
              <Menu.Item onPress={() => {router.replace('/alerta')}} title="Alerta" />
              <Menu.Item onPress={() => {router.replace('/grafico')}} title="Gráfico" />
              <Divider />
              <Menu.Item onPress={() => {router.replace('/temperatura')}} title=" Temperaturas registradas" />
                <Menu.Item onPress={() => {router.replace('/teste')}} title=" Teste" />
                  <Divider />
              <Menu.Item onPress={() => {router.replace('/configuracoes')}} title=" Configurações" />
                <Menu.Item onPress={() => {router.replace('/suporte')}} title=" Suporte" />
                  <Divider />
              <Menu.Item onPress={() => { 
    router.replace('/login')
    }} title=" Logout" />
                
            </Menu>
          </View>

        <View className="flex-clo justify-start start mt-20 ml-6 space-y-4 gap-8 " >
           <View className="flex-row items-start  gap-8 space-x-2">
    <View className="w-8 h-8 rounded-full bg-green-600" />
            <Text className="text-gray-100 text-base font-bold uppercase">Nível de % de gás</Text>
            </View>


            <View className="flex-row items-start gap-8 space-x-2">
    <View className="w-8 h-8 rounded-full bg-green-600" />
             <Text className="text-gray-100 text-base font-bold uppercase">Nível de % de Temperatura</Text>
       </View>
             <View className="flex-row items-start  gap-8 space-x-2">
    <View className="w-8 h-8 rounded-full bg-red-500" />
              <Text className="text-gray-100 text-base font-bold uppercase">Presença de chama</Text>
               </View>
              
              </View>


          <View className="flex-col justify-center items-center mt-52 space-y-4 gap-4 ">
            
            <View className="w-full mt-24 h-14 bg-green-600 items-center justify-center rounded-lg">
              <Text
               
                className="text-gray-100 text-base font-bold uppercase"
              >
                Seguro
              </Text>
            </View>

            <View className="w-full mt- h-14 bg-red-500 items-center justify-center rounded-lg">
              <Text
                
                className="text-gray-100 text-base font-bold uppercase"
              >
                Alerta
              </Text>
            </View>

            <View className=" text-gray-100 text-base font-bold uppercase w-full h-14 bg-orange-500 items-center justify-center rounded-lg">
              <Text
               
                className="text-gray-100 text-base font-bold uppercase"
              >
                Baixo
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
};

export default Dashboard;
