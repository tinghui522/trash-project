import React, { Component } from "react";
import { 
  Button,
  Plateform,
  API,
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  View, 
  ScrollView, 
  TouchableHighlight, 
  SafeAreaView,
  Modal, 
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import DateTimePicker from "react-native-modal-datetime-picker";
import DatePicker, { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import moment from "moment";

export default class RecordScreen extends Component {
  onIncrement = () => {
    this.setState({
      due_date_count: this.state.due_date_count + 1,
    })
  };

  onDecrement = () => {
    this.setState({
      due_date_count: this.state.due_date_count - 1,  
    })
  };

  constructor(props) {
    super(props);
    this.state = {
        a:'0',
        b:'0',
        oper:null,
        displayValue:'0',
        due_date_count:'1',
        modalVisible: false,
        date: getToday()
    };
    this.clickNum = this.clickNum.bind(this);
    this.setOper = this.setOper.bind(this);
    this.calc = this.calc.bind(this);
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  addHeader = () => (
    <View style={styles.line1}>
      <Text style={{fontSize:18, color:'#fff', fontWeight:"bold"}}>修改</Text>
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
      <View style={styles.qtyBlock}>
        <Text style={styles.qtyText}>數量</Text>
        <TouchableOpacity onPress={this.onDecrement}>
          <Text style={styles.btnQty}>-</Text>
        </TouchableOpacity>
          <View style={styles.qty_bg}>
            <Text style={styles.qty}>{this.state.due_date_count}</Text>
          </View>
        <TouchableOpacity onPress={this.onIncrement}> 
          <Text style={styles.btnQty}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => this.bsAdd.current.snapTo(1)}>
          <Image
            style={styles.btnCheck}
            source={require('../assets/btn-check.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  addCal = () =>(
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainerRight}>
          <View style={styles.line1}>
            <Text style={{fontSize:18, fontWeight:"bold", color:'#fff'}}>金額</Text>
            <View style={styles.line1_money_bg}>
              <Text style={{fontSize:18, fontWeight:"bold", color:'#909090'}}>{this.state.displayValue} 元</Text>
            </View>
          </View>
          <View style={styles.line2}>
            <TouchableOpacity onPress={this.clickNum.bind(this,'7')}><View style={styles.mygrid}><Text style={styles.money_btn}>7</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'8')}><View style={styles.mygrid}><Text style={styles.money_btn}>8</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'9')}><View style={styles.mygrid}><Text style={styles.money_btn}>9</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.setOper.bind(this,2)}><View style={styles.mygrid2}><Text style={styles.money_btn}>-</Text></View></TouchableOpacity>
          </View>
          <View style={styles.line3}>
            <TouchableOpacity onPress={this.clickNum.bind(this,'4')}><View style={styles.mygrid}><Text style={styles.money_btn}>4</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'5')}><View style={styles.mygrid}><Text style={styles.money_btn}>5</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'6')}><View style={styles.mygrid}><Text style={styles.money_btn}>6</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.setOper.bind(this,1)}><View style={styles.mygrid2}><Text style={styles.money_btn}>+</Text></View></TouchableOpacity>
          </View>
          <View style={styles.line4}>
            <TouchableOpacity onPress={this.clickNum.bind(this,'1')}><View style={styles.mygrid}><Text style={styles.money_btn}>1</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'2')}><View style={styles.mygrid}><Text style={styles.money_btn}>2</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'3')}><View style={styles.mygrid}><Text style={styles.money_btn}>3</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.calc}><View style={styles.mygrid2}><Text style={styles.money_btn}>C</Text></View></TouchableOpacity>
          </View>
          <View style={styles.line5}>
            <TouchableOpacity onPress={this.clickNum.bind(this,'00')}><View style={styles.mygrid2}><Text style={styles.money_btn}>00</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.clickNum.bind(this,'0')}><View style={styles.mygrid}><Text style={styles.money_btn}>0</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={this.calc}><View style={styles.mygrid2}><Text style={styles.money_btn}>=</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => this.bsCal.current.snapTo(1)}><View style={styles.mygrid2}><Image style={styles.btncheckstyle}source={require('../assets/record/btn-check.png')}/></View></TouchableOpacity>
          </View>
        </View>
      </View> 
    </View>
  )

  bsAdd = React.createRef();
  bsCal = React.createRef();
  fall = new Animated.Value(1);

  render() {
    const { modalVisible } = this.state;
    return (
      <SafeAreaView>
      <Animated.View
        style={{ height: 200, alignItems: 'center', backgroundColor:'#F6F6F6',
              opacity: Animated.add(0.3, Animated.multiply(this.fall, 0.8))}}>
        <View style={styles.record_date}>
          <Text style={styles.dateText}>日期</Text>
          <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
            <View style={styles.date_bg}>
              <Text style={styles.date}>{this.state.date}</Text>
            </View>
          </TouchableOpacity>
          <Modal 
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}>
            <View style={styles.modalBg}>
              <DatePicker
                options={{
                  backgroundColor: '#FFFFFF',
                  headerColor: '#909090',
                  textHeaderColor: '#63CFA8',
                  textDefaultColor: '#909090',
                  selectedTextColor: '#fff',
                  mainColor: '#63CFA8',
                  textSecondaryColor: '#909090',
                  borderColor: '#63CFA8',
                }}
                current={getToday()}
                maximumDate={getToday()}
                placeholder="select date"
                onDateChange={(date) => {this.setState({date: date});
                              this.setModalVisible(!modalVisible);}}
                format="YYYY-MM-DD"
                mode="calendar"
                style={{
                  width: 300,
                  height: 325,
                  borderRadius: 20,
                  marginTop: 220, 
                }}
              />
            </View>
          </Modal>
        </View>
      </Animated.View>
      <Animated.View
        style={{ height:500, alignItems: 'center', backgroundColor:'#F6F6F6',
              opacity: Animated.add(0.3, Animated.multiply(this.fall, 0.8))}}>
        <View style={styles.title_category_bg}> 
          <Text style={styles.item_text}>類別</Text>
        </View>
        <View style={styles.block_category}> 
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-breakfast.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>早餐</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-lunch.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>午餐</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-dinner.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>晚餐</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-drink.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>飲料</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-dessert.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>點心</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                style={styles.iconstyle}
                source={require('../assets/record/icon-other.png')}
                />
              </TouchableOpacity>
              <Text style={styles.icon_text}>其他</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.title_item_bg}> 
          <Text style={styles.item_text}>項目</Text>
        </View>
        <View style={styles.block_item}> 
        <TouchableHighlight>
            <Image
            style={styles.itemstyle}
            source={require('../assets/record/icon-bag.png')}
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
          <TouchableOpacity>
            <View style={styles.btn_clear}>
              <Text style={styles.btn_text}>清空</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.bsAdd.current.snapTo(0)}>
            <View style={styles.btn_change}>
              <Text style={styles.btn_text}>修改</Text>
            </View>
          </TouchableOpacity>
        </View> 
        <View style={styles.moneyBlock}>
          <View style={styles.moneyText_bg}>
            <Text style={styles.moneyText}>金額</Text>
          </View>
          <TouchableOpacity onPress={() => this.bsCal.current.snapTo(0)}>
            <View style={styles.money_bg}>
              <Text style={styles.money}>{this.state.displayValue}元</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.btn_send}>
            <Text style={styles.sendText}>丟垃圾</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <BottomSheet
        ref={this.bsAdd}
        snapPoints={[420, -10]}
        renderContent={this.addInner}
        renderHeader={this.addHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <BottomSheet
        ref={this.bsCal}
        snapPoints={[420, -10]}
        renderContent={this.addCal}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
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
    this.setState({
        a:'0',
        b:'0',
        oper:null,
        displayValue:d
    })
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    height: 200,
    alignItems: 'center',
    backgroundColor:'#F6F6F6'
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
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius: 20,
    marginTop: 45,
  },
  dateText:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
    marginTop:16,
    left:35,
  },
  date_bg:{
    width:120,
    height:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginTop: -24,
    left:100,
  },
  date:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
    left:13,
    top:5
  },
  modalBg:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center'
  },
  content:{
    height:500,
    alignItems: 'center',
    backgroundColor:'#F6F6F6'
  },
  title_category_bg:{
    width: 60,
    height: 50,
    backgroundColor: '#CCF2D6',
    borderRadius: 10,
    marginTop: -70,
    left:-145
  },
  block_category:{
    width:350,
    height:100,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius:20,
    marginTop:-20,
    flexDirection: 'row',
  },
  iconstyle:{
    margin: 7,
    marginTop:15,
    marginLeft:8,
    width: 50,
  },
  icon_text:{
    fontSize:16,
    fontWeight:"bold",
    color: '#909090',
    left:16,
  },
  title_item_bg:{
    width: 60,
    height: 50,
    backgroundColor: '#CCF2D6',
    borderRadius: 10,
    marginTop: 20,
    left:-145
  },
  item_text:{
    fontSize:18,
    fontWeight:"bold",
    color: '#909090',
    marginTop:7,
    left:12,
  },
  block_item:{
    width:350,
    height:180,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius:20,
    marginTop:-20,
    flexDirection: 'row',
  },
  btn_text:{
    fontSize:18,
    fontWeight:"bold",
    color: '#fff',
  },
  btn_clear:{
    width:65,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF867C',
    borderRadius:16,
    marginTop:120,
    left:-220,
  },
  btn_change:{
    width:65,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#63CFA8',
    borderRadius:16,
    marginTop:120,
    left:-50,
  },
  itemstyle:{
    left:10,
    top:8,
    margin:12,
  },
  btnstyle:{
    margin:5,
    top:120,
    left:-80
  },
  moneyBlock:{
    width:350,
    height:70,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  moneyText_bg:{
    width:75,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCF2D6',
    borderRadius:16,
    left:20,
  },
  moneyText:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
  },
  money_bg:{
    width:150,
    height:40,
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    marginTop: -40,
    left:178,
    alignItems: 'center',
    justifyContent: 'center',
  },
  money:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
  },
  money_btn:{
    color: '#909090',
    fontSize:20,
    fontWeight:"bold",
  },
  btn_send:{
    width:130,
    height:50,
    marginTop:30,
    backgroundColor: '#63CFA8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText:{
    fontSize:20,
    fontWeight:"bold",
    color: '#fff',
  },
  rootContainer : {
    marginTop:120,
    width:414,
    height:300,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
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
    height:50,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#63CFA8',
    borderRadius: 10,
  },
  line1_money_bg:{
    width:150,
    height:30,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line2:{
    height:50,
    marginTop: 15,
    backgroundColor: '#F2F2F2',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  line3:{
    height:50,
    backgroundColor: '#F2F2F2',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  line4:{
    height:50,
    backgroundColor: '#F2F2F2',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  line5:{
    height:50,
    backgroundColor: '#F2F2F2',
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  mygrid:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  mygrid2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F2F2F2',
  },
  btnCheck:{
    width: 35,
    height: 35,
    marginTop: 10,
  },
  qtyBlock:{
    flexDirection: 'row',
    width:240,
    height:50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor:'#D9D9D9',
    borderRadius: 20,
    marginTop: 10,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  qtyText:{
    color: '#909090',
    fontSize:18,
    fontWeight:"bold",
    marginRight: 15,
    marginLeft: 15
  },
  btnQty: {
    color: '#909090',
    fontSize: 22,
    fontWeight:"bold",
  },
  qty_bg:{
    width:70,
    height:30,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty:{
    color: '#909090',
    fontSize:16,
    fontWeight:"bold",
  },
});