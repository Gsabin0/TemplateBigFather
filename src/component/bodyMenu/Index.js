import { React } from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { styles } from "./sytles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';


export function BodyMenu() {
  return (

   <NavigationContainer>
    <View style={styles.bobyMenu}>
      <View>
      <TouchableOpacity>
        <Feather style={styles.icons} name="home" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <AntDesign style={styles.icons} name="hearto" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <AntDesign style={styles.icons} name="shoppingcart" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <AntDesign style={styles.icons} name="search1" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
        <Ionicons  name="person-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
    </NavigationContainer>
    
  );
}
