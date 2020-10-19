import {StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fluid:{
      position:'absolute',
      justifyContent: "center",
      top:responsiveScreenHeight(-25),
      zIndex:-99,
    },
    sectionTop:{
      flex:1,
      flexDirection:'row',

    },
    btnMenu:{
      flex:1,
      marginTop: responsiveHeight(3.5),
      marginLeft: responsiveWidth(5.5),
    },
    profile:{
      alignContent:'center',
      alignItems:'center',
      flexDirection: 'column',
      right: responsiveScreenWidth(35),
      top: responsiveScreenHeight(4)
    },
    card:{
      flex:1,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      alignSelf: 'center',
      backgroundColor:"#FFF",
      width: responsiveWidth(80),
      height: responsiveHeight(45),
      // marginHorizontal: responsiveWidth(15),
      marginVertical: responsiveScreenHeight(2),
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 3,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    cardText:{
      fontFamily: 'Poppins_700Bold',
    },
    cardChild:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: "center",
      backgroundColor: '#FFF',
      width: responsiveWidth(5),
      height: responsiveHeight(5),
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 3,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    modal:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      width: responsiveScreenWidth(65),
      height: responsiveScreenHeight(30),
      borderRadius: responsiveScreenWidth(3),
      backgroundColor: 'white'
    }
  });
