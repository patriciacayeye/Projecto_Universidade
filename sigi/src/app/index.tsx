import { useState } from "react"
import { View, Image, Text} from "react-native"
import { Link, Redirect } from "expo-router"
  import * as React from 'react';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';




import { colors } from "../styles/colors"
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


const Dashboard = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);



  return (

    <PaperProvider >
        <SafeAreaView className="bg-black">
      <View
        className=" flex-row  items-center justify-center h-full">
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>
            <Ionicons
             name="menu-outline"
             size={25}
             color={colors.orange[500]}
             /> 
             </Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Dashboard;
            
            
        
    
