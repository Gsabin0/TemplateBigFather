import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, Modal } from "react-native";
import { styles } from "./styles";
import iconpng from '../../../assets/download.jpeg';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons'; 

export function ItensBebidas() {
  const [coracaoCor, setCoracaoCor] = useState('#000000'); // Cor inicial do ícone coração
  const [sound, setSound] = useState();
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [favoritado, setFavoritado] = useState(false); // Estado para controlar se o item está favoritado

  const handleCoracaoClick = async () => {
    // Altere a cor do ícone coração quando clicado
    const novaCor = coracaoCor === '#000000' ? '#FF0000' : '#000000'; // Exemplo: alternar entre preto e vermelho
    setCoracaoCor(novaCor);

    // Carregue o arquivo de áudio
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audioCompra.mp3")
    );

    setSound(sound);

    // Reproduza o áudio
    await sound.playAsync();

    // Altere o estado de favoritado quando o coração é clicado
    setFavoritado(!favoritado);
  };

  return (
    <View style={styles.backgroundBebidas}>
      <View style={styles.viewDrinks}>
        <Image style={styles.imageDrinks} source={iconpng} />
      </View>
      <View style={styles.infoDrinks}>
        <Text style={styles.textInfo}>Robo Extrator</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textInfoDrinks}>Apartir de:</Text>
        <Text style={styles.textovalor}>R$149.99</Text>
        <TouchableOpacity onPress={handleCoracaoClick}>
          <AntDesign style={{ ...styles.coracao, color: coracaoCor }} name="hearto" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTouchableOpacityDrinks}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.TouchableOpacityDrinks}>
          <Text style={styles.listadesejo}>Lista de Desejos</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Itens Favoritos:</Text>
            {favoritado && (
              <View>
                <Text>Robo Extrator</Text>
                <Text>R$149.99</Text>
              </View>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ItensBebidas;
