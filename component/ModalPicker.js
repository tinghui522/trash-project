import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'

const OPTIONS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {
    const onPressItem = (option) =>{
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) =>{
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 314,height: HEIGHT-850}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        backgroundColor:'#E2E2E2',
        borderRadius:20,
        marginLeft:-250,
        marginTop:-50
    },
    option:{
        alignItems: 'flex-start',
    },
    text:{
      margin:10,
      fontSize: 20,
      fontWeight: 'bold',
      color:"#909090"
    }
})
export {ModalPicker}