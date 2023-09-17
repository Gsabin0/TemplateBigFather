import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import iconpng from '../../../assets/download.jpeg';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; // Importe o ícone AntDesign

export function ItensBebidas() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(new Audio.Sound());

  return (
    <View style={styles.backgroundBebidas}>
      <View style={styles.viewDrinks}>
        <Image style={styles.imageDrinks} source={iconpng} />
      </View>
      <View style={styles.infoDrinks}>
        <Text style={styles.textInfoDrinks}>Robo Extrator</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textInfoDrinks}>Apartir de:</Text>
        <Text style={styles.textInfoDrinks}>R$149.99</Text>
        <AntDesign style={{ ...styles.icons, margin: 5}} name="hearto" size={20} color="#000000" />
      </View>
      <View style={styles.viewTouchableOpacityDrinks}>
        <TouchableOpacity style={styles.TouchableOpacityDrinks}>
          <Text style={styles.textComprar}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
