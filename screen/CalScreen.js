import React, {Component} from 'react';
import {StyleSheet,View,TouchableNativeFeedback, Text,props} from 'react-native';


export default class Cal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:'0',
            b:'0',
            oper:null,
            displayValue:'0'
        };
        this.clickNum = this.clickNum.bind(this);
        this.setOper = this.setOper.bind(this);
        this.calc = this.calc.bind(this);
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainerRight}>
                        <View style={styles.line1}>
                            <Text style={{fontSize:20}}>{this.state.displayValue}</Text>
                        </View>
                        <View style={styles.line2}>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'7')}><View style={styles.mygrid}><Text style={{fontSize:20}}>7</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'8')}><View style={styles.mygrid}><Text style={{fontSize:20}}>8</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'9')}><View style={styles.mygrid}><Text style={{fontSize:20}}>9</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.setOper.bind(this,4)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>÷</Text></View></TouchableNativeFeedback>
                        </View>
                        <View style={styles.line3}>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'4')}><View style={styles.mygrid}><Text style={{fontSize:20}}>4</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'5')}><View style={styles.mygrid}><Text style={{fontSize:20}}>5</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'6')}><View style={styles.mygrid}><Text style={{fontSize:20}}>6</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.setOper.bind(this,3)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>×</Text></View></TouchableNativeFeedback>
                        </View>
                        <View style={styles.line4}>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'1')}><View style={styles.mygrid}><Text style={{fontSize:20}}>1</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'2')}><View style={styles.mygrid}><Text style={{fontSize:20}}>2</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'3')}><View style={styles.mygrid}><Text style={{fontSize:20}}>3</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.setOper.bind(this,2)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>-</Text></View></TouchableNativeFeedback>
                        </View>
                        <View style={styles.line5}>
                            <TouchableNativeFeedback onPress={this.calc}><View style={styles.mygrid2}><Text style={{fontSize:20}}>=</Text></View></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.clickNum.bind(this,'0')}><View style={styles.mygrid}><Text style={{fontSize:20}}>0</Text></View></TouchableNativeFeedback>
                            <View style={styles.mygrid2}><Text style={{fontSize:33}}>.</Text></View>
                            <TouchableNativeFeedback onPress={this.setOper.bind(this,1)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>+</Text></View></TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    //按數字
    clickNum(paramValue){
        /*let beforeValue=this.state.displayValue;
        let lastValue=‘0‘;
        if(beforeValue===‘0‘){
            lastValue=paramValue
        }else{
            lastValue=beforeValue+paramValue
        }
        this.setState({
            displayValue:lastValue
        })*/
        this.setState((beforeState,props)=>{
            //先判斷操作符是否為空
            if(beforeState.oper==null){
                //如果操作符為空，代表客戶輸入的數字，為a
                let lastValue='0';
                if(beforeState.a==='0'){
                    lastValue=paramValue
                }else{
                    lastValue=beforeState.a+paramValue
                }
                return{a:lastValue,displayValue: lastValue}
            }else{
                //操作符不為null，代表客戶輸入的數字，屬於b
                let lastValue='0';
                if(beforeState.b==='0'){
                    lastValue=paramValue;
                }else {
                    lastValue=beforeState.b+paramValue
                }
                return{b:lastValue,displayValue:lastValue}
            }
        })
    }
    //按操作符
    setOper(param){
        this.setState({
            oper:param
        })
    }
    //按等號
    calc(){
        let d=0;
        if(this.state.oper===1){
            d=(this.state.a*1.0)+this.state.b*1.0
        }
        if(this.state.oper==2){
            d=(this.state.a*1.0)-this.state.b*1.0
        }
        if(this.state.oper==3){
            d=(this.state.a*1.0)*this.state.b*1.0
        }
        if(this.state.oper==4){
            d=(this.state.a*1.0)/this.state.b*1.0
        }
        this.setState({
            a:'0',
            b:'0',
            oper:null,
            displayValue:d
        })
    }
}

const styles = StyleSheet.create({
    rootContainer : {
        top:450,
        flexDirection: 'column',
        backgroundColor:'#fff',
    },
    //底部view
    buttonContainer:{
        flexDirection: 'row'
    },
    //底部右邊view
    buttonContainerRight:{
        flex:3,
        flexDirection:'column'
    },
    //輸入列
    line1:{
        height:40,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor:'#63CFA8',
    },
    line2:{
        height:50,
        backgroundColor:'green',
        flexDirection:'row'
    },
    line3:{
        height:50,
        backgroundColor:'blue',
        flexDirection:'row'
    },
    line4:{
        height:50,
        backgroundColor:'red',
        flexDirection:'row'
    },
    line5:{
        height:50,
        backgroundColor:'pink',
        flexDirection:'row'
    },
    mygrid:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    mygrid2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    }

});