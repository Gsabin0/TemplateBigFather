
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    backgroundBebidas:{
        width: 270,
        height: 50,
        borderRadius: 14,
        backgroundColor: '#C0C0C0',
        marginRight: 70,
        marginTop: 10,
        borderColor:"#000000",
        borderStyle:"solid",
        borderWidth: 1,

    },

    viewDrinks:{
        justifyContent:"center",
        alignItems:"center",
       

    },

    imageDrinks:{
        width: 40,
        height:40,
        marginTop: 4,
        marginRight:210,
        borderRadius:10,
        
    },

    textInfo:{
        color:'#000000',
        marginTop:-40,
        marginLeft: 60,
        
    },

    textInfoDrinks:{
        color:'#000000',
        marginTop:-20,
        marginLeft: 60,

    },
    textovalor:{
        color:'#000000',
        marginTop:-18,
        marginLeft: 130,

    },

    coracao:{
        color:'#000000',
        marginTop:-30,
        marginLeft: 230,

    },
    listadesejo:{
        color:'#000000',
        fontSize: 22,
        marginTop: -15,
    },

    viewTouchableOpacityDrinks:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro semi-transparente
      },
    
      modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        elevation: 5, // Sombra para dar destaque ao modal
      },

        

})
