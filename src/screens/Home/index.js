import foto1 from "../../../assets/icon.png";
import React from "react";
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { BodyMenu } from "../../component/bodyMenu/Index";
import { VideoCastis } from "../../component/videoCastis";
import { ItensBebidas, itensBebidas } from "../../component/itemBebidas/item-bebidas";
import {AdicionarBebidas} from '../AdicionarBebidas';
import { Audio } from 'expo-av';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Imprima_400Regular } from "@expo-google-fonts/dev";

export function Home() {

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={24} color="#000000" />
        <View style={styles.search}>
        <AntDesign name="search1" size={24} color="#000000" />
        <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Diga nao aos trabalhos repetitivos</Text>
      </View>
    <ScrollView>
      <View style={styles.viewSemiTitleGin}>
        <Text style={styles.textSemiTitle}>Bots</Text>
      </View>
      <View style={styles.boby}>
        <ItensBebidas/>
        <ItensBebidas />
      </View>
      <View style={styles.boby}>
        <ItensBebidas />
        <ItensBebidas />
      </View>
      <View style={styles.viewtextTitleVideo}>
        <Text style={styles.textTitle}>Veja um dos nossos trabalhos em execução</Text>
      </View>
      <VideoCastis></VideoCastis>
    </ScrollView>
      <View>
        <View style={styles.viewBodyMenu}>
        <BodyMenu></BodyMenu>
         
        </View>
      </View>
    </View>
  );
}
