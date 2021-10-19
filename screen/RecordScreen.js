import React, { Component } from "react";
import { 
  StatusBar,
  Button,
  Plateform,
  API,
  ImageBackground,
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  View, 
  ScrollView, 
  TouchableHighlight, 
  SafeAreaView, 
  TouchableNativeFeedback
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default class RecordScreen extends Component {
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

    addHeader = () => (
      <View style={styles.line1}>
        <Text style={{fontSize:18, color:'#fff'}}>新增</Text>
      </View>
    )
    
    addInner = () => (
      <View style={styles.panel}>
        <View style={styles.panelContent}>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-box.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-plate.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-chopstick.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-ketchup.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.panelContent}>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-cup.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-strow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-bag.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconstyle}
              source={require('../assets/icon-gray-trashother.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnCheck}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
            <Image
              style={styles.iconstyle}
              source={require('../assets/btn-check.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
            <Image
              style={styles.iconstyle}
              source={require('../assets/btn-check.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )

    bs = React.createRef();
    fall = new Animated.Value(1);

  render() {
    return (
      <SafeAreaView>
         <ScrollView>
           <View style={styles.header}>
              <Image
                  style={styles.record_bg}
                  source={require('../assets/page-bg.png')}
                  />
              <View style={styles.record_date}>
                <Text style={styles.dateText}>日期</Text>
                <TouchableOpacity>
                  <View style={styles.date_bg}>
                    <Text style={styles.date}>2021 / 9 / 28</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.content}>
            <View style={styles.title_category}> 
              <Text style={styles.category_text}>類別</Text>
            </View>
            <View style={styles.block_category}> 
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-breakfast.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-lunch.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-dinner.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-drink.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-dessert.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-other.png')}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.title_item}> 
              <Text style={styles.item_text}>項目</Text>
            </View>
            <View style={styles.block_item}> 
            <TouchableHighlight>
                <Image
                style={styles.itemstyle}
                source={require('../assets/record/icon-plate.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.itemstyle}
                source={require('../assets/record/icon-chopstick.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                style={styles.itemstyle}
                source={require('../assets/record/icon-box.png')}
                />
              </TouchableHighlight>
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                <Image
                style={styles.btnstyle}
                source={require('../assets/record/btn-addnew.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                style={styles.btnstyle}
                source={require('../assets/record/btn-clean.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                style={styles.btnstyle}
                source={require('../assets/record/btn-store.png')}
                />
              </TouchableOpacity>
            </View> 
            <View style={styles.rootContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainerRight}>
                        <View style={styles.line1}>
                        <Text style={{fontSize:20, color:'#fff'}}>金額</Text>
                            <Text style={{fontSize:20, color:'#fff'}}>{this.state.displayValue} 元</Text>
                        </View>
                        <View style={styles.line2}>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'7')}><View style={styles.mygrid}><Text style={{fontSize:20}}>7</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'8')}><View style={styles.mygrid}><Text style={{fontSize:20}}>8</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'9')}><View style={styles.mygrid}><Text style={{fontSize:20}}>9</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.setOper.bind(this,4)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>-</Text></View></TouchableOpacity>
                        </View>
                        <View style={styles.line3}>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'4')}><View style={styles.mygrid}><Text style={{fontSize:20}}>4</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'5')}><View style={styles.mygrid}><Text style={{fontSize:20}}>5</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'6')}><View style={styles.mygrid}><Text style={{fontSize:20}}>6</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.setOper.bind(this,3)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>+</Text></View></TouchableOpacity>
                        </View>
                        <View style={styles.line4}>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'1')}><View style={styles.mygrid}><Text style={{fontSize:20}}>1</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'2')}><View style={styles.mygrid}><Text style={{fontSize:20}}>2</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'3')}><View style={styles.mygrid}><Text style={{fontSize:20}}>3</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.setOper.bind(this,2)}><View style={styles.mygrid2}><Text style={{fontSize:20}}>r</Text></View></TouchableOpacity>
                        </View>
                        <View style={styles.line5}>
                            <TouchableOpacity onPress={this.calc}><View style={styles.mygrid2}><Text style={{fontSize:20}}>c</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.clickNum.bind(this,'0')}><View style={styles.mygrid}><Text style={{fontSize:20}}>0</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.calc}><View style={styles.mygrid2}><Text style={{fontSize:20}}>=</Text></View></TouchableOpacity>
                            <TouchableOpacity onPress={this.calc}><View style={styles.mygrid2}><Image style={styles.btncheckstyle}source={require('../assets/record/btn-check.png')}/></View></TouchableOpacity>
                        </View>
                    </View>
                </View> 
            </View>

            <BottomSheet
              ref={this.bs}
              snapPoints={[400, 0]}
              renderContent={this.addInner}
              renderHeader={this.addHeader}
              initialSnap={1}
              callbackNode={this.fall}
              enabledGestureInteraction={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
     
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
  header: {
    height: 270,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  panel: {
    height: 360,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
  },
  panelContent: {
    marginTop: 15,
    flexDirection: 'row',
  },
  record_date:{
    width:250,
    height:50,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: -160,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 5,
  },
  dateText:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
    marginTop:18,
    left:35,
  },
  date_bg:{
    width:120,
    height:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginTop: -22,
    left:100,
    
  },
  date:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
    left:18,
    top:5
  },
  content:{
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  title_category:{
    width: 54,
    height: 45,
    backgroundColor: '#CCF2D6',
    borderRadius: 10,
    marginTop: -70,
    left:-148
  },
  category_text:{
    fontSize:14,
    fontWeight:"bold",
    color: '#909090',
    marginTop:5,
    left:12,
  },
  block_category:{
    width:350,
    height:75,
    backgroundColor:'#fff',
    borderRadius:20,
    marginTop:-20,
    flexDirection: 'row',
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 5,
  },
  iconstyle:{
    margin: 12,
  },
  title_item:{
    width: 54,
    height: 45,
    backgroundColor: '#CCF2D6',
    borderRadius: 10,
    marginTop: 20,
    left:-148
  },
  item_text:{
    fontSize:14,
    fontWeight:"bold",
    color: '#909090',
    marginTop:5,
    left:12,
  },
  block_item:{
    width:350,
    height:180,
    backgroundColor:'#fff',
    borderRadius:20,
    marginTop:-20,
    flexDirection: 'row',
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 5,
  },
  itemstyle:{
    left:10,
    top:10,
    margin:12,
  },
  btnstyle:{
    margin:5,
    top:120,
    left:-80
  },
  rootContainer : {
    top:30,
    width:414,
    height:280,
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
      flexDirection: 'row',
      height:40,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor:'#63CFA8',
      borderRadius: 10,
      shadowColor: '#707070',
      shadowOffset: { width: 0, height: 3,},
      shadowOpacity: 6,
  },
  line2:{
      height:50,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent: 'space-around',
  },
  line3:{
      height:50,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent: 'space-around',
  },
  line4:{
      height:50,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent: 'space-around',
  },
  line5:{
      height:50,
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent: 'space-around',
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
  },
  btncheckstyle:{
    width:34,
    height:33,
    left: 10
  }
});
