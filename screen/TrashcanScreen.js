import React, { Component, Fragment } from "react";
import {Text,StatusBar,Button,StyleSheet,Platform,API,TouchableOpacity,Image,View,ScrollView,TouchableHighlight,SafeAreaView} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { color } from "react-native-reanimated";
import RecordScreen from "./RecordScreen";
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

class Box extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      //backgroundColor:'pink',
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
            <Image 
                style={
                    {   top:-18,
                        left:-10,
                        width: 70,
                        height: 70
                    }
                }
                source={require('../assets/img_box.png')}>
                
            </Image>
          </View>
      );
  }
}
class Cup extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   left:-5,
                          width: 40,
                          height: 50
                      }
                  }
                  source={require('../assets/img_cup.png')}>
                  
              </Image>
          </View>
      );
  }
}

class Beg extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      //backgroundColor: this.props.color || "pink",
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   top:-3,
                          left:-10,
                          width: 60,
                          height: 60
                      }
                  }
                  source={require('../assets/img_beg.png')}>
                  
              </Image>
          </View>
      );
  }
}

class Cho extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      // backgroundColor: this.props.color || "pink",
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   
                          top:-10,
                          left:-15,
                          width: 70,
                          height: 70
                      }
                  }
                  source={require('../assets/img_cho.png')}>
                  
              </Image>
          </View>
      );
  }
}

class Other extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      // backgroundColor: this.props.color || "pink",
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   
                          top:-10,
                          left:-15,
                          width: 70,
                          height: 70
                      }
                  }
                  source={require('../assets/img_other.png')}>
                  
              </Image>
          </View>
      );
  }
}

class Plate extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      // backgroundColor: this.props.color || "pink",
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   
                          top:-10,
                          left:-2,
                          width: 70,
                          height: 70
                      }
                  }
                  source={require('../assets/img_plate.png')}>
                  
              </Image>
          </View>
      );
  }
}

class Tomato extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      // backgroundColor: this.props.color || "pink",
                      transform: [{ rotate: angle + "rad" }],
                  }
              }
          >
              <Image 
                  style={
                      {   
                          top:-10,
                          left:-5,
                          width: 90,
                          height: 90
                      }
                  }
                  source={require('../assets/img_tomato.png')}>
                  
              </Image>
          </View>
      );
  }
}


class Wall extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      //backgroundColor:'pink',
                      transform: [{ rotate: angle + "rad" }],
                  }
              } 
          >

          </View>
          
      );
  }
}

class Floor extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      //backgroundColor:'pink',
                      transform: [{ rotate: angle + "rad" }]
                  }
              } 
          >
              <Image 
                  style={
                      {
                          width:300,
                          height: 370,
                          left:-25,
                          top:-350
                      }
                  }
                  source={require('../assets/img_trashbar.png')}>
                  
              </Image>

          </View>
          
      );
  }
}

class Head extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const width = this.props.size[0];
      const height = this.props.size[1];
      const x = this.props.body.position.x - width / 2;
      const y = this.props.body.position.y - height / 2;
      const angle = this.props.body.angle;

      return (
          <View
              style={
                  {
                      position: "absolute",
                      left: x,
                      top: y,
                      width: width,
                      height: height,
                      transform: [{ rotate: angle + "rad" }]
                  }
              } 
          >
              <Image 
                  style={
                      {
                          top:-1
                      }
                  }
                  source={require('../assets/img_trashhead.png')}>
                  
              </Image>

          </View>
          
      );
  }
}
let boxIds = 0;

const distance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

const Physics = (state, { touches, time }) => {
  let engine = state["physics"].engine;

  Matter.Engine.update(engine, time.delta);

  return state;
};

const MoveBox = (state, { touches }) => {
  let constraint = state["physics"].constraint;

  //-- Handle start touch
  let start = touches.find(x => x.type === "start");

  if (start) {
      let startPos = [start.event.pageX, start.event.pageY];

      let boxId = Object.keys(state).find(key => {
          let body = state[key].body;

          return (
              body &&
              distance([body.position.x, body.position.y], startPos) < 25
          );
      });

      if (boxId) {
          constraint.pointA = { x: startPos[0], y: startPos[1] };
          constraint.bodyB = state[boxId].body;
          constraint.pointB = { x: 0, y: 0 };
          constraint.angleB = state[boxId].body.angle;
      }
  }

  //-- Handle move touch
  let move = touches.find(x => x.type === "move");

  if (move) {
      constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
  }

  //-- Handle end touch
  let end = touches.find(x => x.type === "end");

  if (end) {
      constraint.pointA = null;
      constraint.bodyB = null;
      constraint.pointB = null;
  }

  return state;
};

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

export default class TrashcanScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  addHeader = () => (
    <View style={styles.header_bg}>
      <Image
        style={styles.headerLine}
        source={require('../assets/trashcan/header_線線.png')}
        />
    </View>
  )

  addTrash = () => (
    <View style={styles.bsContainer}>
      <RecordScreen></RecordScreen>
    </View>
  )

  bs = React.createRef();
  fall = new Animated.Value(1);

  render() {
    const { navigation } = this.props;

    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;
    const body1 = Matter.Bodies.rectangle(60, 10, 50, 40,{render: {fillStyle: 'red'}});
    const body2 = Matter.Bodies.rectangle(60 , -20, 30, 50);
    const body3 = Matter.Bodies.rectangle(90, -30, 40, 50);
    const body4 = Matter.Bodies.rectangle(90, 10, 35, 50);
    const body5 = Matter.Bodies.rectangle(55, -10, 45, 45);
    const body6 = Matter.Bodies.rectangle(70, -10, 65, 50 );
    const body7 = Matter.Bodies.rectangle(80, -50, 30, 55 );

    const wall1 = Matter.Bodies.rectangle(-120, 330, 25, 370, { isStatic: true ,angle:-0.1});//左桶邊
    const wall2 = Matter.Bodies.rectangle(130, 330, 25, 370, { isStatic: true,angle:0.1 });//右桶邊
    const floor = Matter.Bodies.rectangle(-5, 500, 280, 25, { isStatic: true});//桶底部
    const trashbar_head = Matter.Bodies.rectangle(10, -200, 330, 40);

    const r1 = Matter.Bodies.rectangle(0, 520, 414, 50, { isStatic: true});
    const r2 = Matter.Bodies.rectangle(257, 220, 100, 800, { isStatic: true});//右牆
    const r3 = Matter.Bodies.rectangle(-257, 220, 100, 800, { isStatic: true});//左牆
    const constraint = Matter.Constraint.create({
        label: "Drag Constraint",
        pointA: { x: 0, y: 0 },
        pointB: { x: 0, y: 0 },
        length: 0.01,
        stiffness: 0.2
        // angularStiffness: 1
    });

    Matter.World.add(world, [body1, body2, body3 ,body4,body5,body6,body7,wall2,wall1,floor,r1,r2,r3,trashbar_head]);
    Matter.World.addConstraint(world, constraint);

    return (
      <SafeAreaView style={{flex:1}}>
        <View>
          <Animated.View style={{backgroundColor: '#F6F3F6', width:414, height:900, alignItems: 'center',
            opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0))}}>
              <Image
                style={styles.homebgStyle}
                source={require('../assets/trashcan/home-bg.png')}
                />
              <Text style={styles.titleStyle}>本月垃圾量 16 件</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Image
                  style={styles.profileiconStyle}
                  source={require('../assets/icon-profile.png')}
                  />
              </TouchableOpacity>
                  {/* <Image
                  style={styles.trashledStyle}
                  source={require('../assets/trashcan/trash-led.png')}
                  />
                  <Image
                  style={styles.trashcanStyle}
                  source={require('../assets/trashcan/trashcan.png')}
                  /> 
                  <Image
                  style={styles.trash1Style}
                  source={require('../assets/item-bag.png')}
                  /> 
                  <Image
                  style={styles.trash2Style}
                  source={require('../assets/item-box.png')}
                  /> 
                  <Image
                  style={styles.trash3Style}
                  source={require('../assets/item-chopstick.png')}
                  /> 
                  <Image
                  style={styles.trash4Style}
                  source={require('../assets/item-cup.png')}
                  /> 
                  <Image
                  style={styles.trash5Style}
                  source={require('../assets/item-box.png')}
                  />
                  <Image
                  style={styles.trash6Style}
                  source={require('../assets/item-plate.png')}
                  /> */}
                  {/* <Image
                  style={styles.trashcangifStyle}
                  source={require('../assets/homeTrash.gif')}
                  /> */}
                  <GameEngine
                    systems={[Physics, MoveBox]}
                    entities={{
                        physics: { engine: engine, world: world, constraint: constraint },
                        box1: { body: body1, size: [50, 40], color: "pink", renderer: Box },
                        box2: { body: body2, size: [30, 50], color: "pink", renderer: Cup },
                        box3: { body: body3, size: [40, 50], color: "pink", renderer: Beg },
                        box4: { body: body4, size: [35, 50], color: "pink", renderer: Cho },
                        box5: { body: body5, size: [45, 45], color: "pink", renderer: Other },
                        box6: { body: body6, size: [65, 50], color: "pink", renderer: Plate },
                        box7: { body: body7, size: [30, 55], color: "pink", renderer: Tomato },
                        wall1: { body: wall1, size: [25, 370], color: "pink",renderer:Wall },
                        wall2: { body: wall2, size: [25, 370], color: "pink",renderer:Wall },
                        floor: { body: floor, size: [230, 25], color: "pink", renderer:Floor },
                        trashbar_head: { body: trashbar_head, size: [330, 40],renderer:Head },
                        r1: { body: r1, size: [414, 50], color: "#fff", renderer:Wall },
                        r2: { body: r2, size: [100, 800], color: "pink", renderer:Wall },
                        r3: { body: r3, size: [100, 800], color: "pink", renderer:Wall }
                    }}
                  >
                      <StatusBar hidden={true} />
                  </GameEngine>
              <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                <Image
                  style={styles.btnaddtrashStyle}
                  source={require('../assets/trashcan/btn-addtrash.png')}
                />
              </TouchableOpacity>
          </Animated.View>
          <BottomSheet
            ref={this.bs}
            snapPoints={[875, 0]}
            renderHeader={this.addHeader}
            renderContent={this.addTrash}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          />

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container0: { flex: 1},
  contentStyle: {
    backgroundColor: '#E9E9E9',
    width:414,
    height:896,
    alignItems: 'center',
  },
  titleStyle:{
    fontSize:26,
    fontWeight:"bold",
    color:"#fff",
    marginTop:-70
  },
  homebgStyle:{
    width:414,
    height:194,
    marginTop:-48
  },
  profileiconStyle:{
    width:50,
    height:50,
    marginLeft:290,
    marginTop:-110
  },
  trashledStyle:{
    width:331,
    height:39,
    marginTop:90,
  },
  trashcanStyle:{
    width:319,
    height:396,
    marginTop:30,
  },
  trash1Style:{
    width:80,
    height:80,
    marginTop:-100,
  },
  trash2Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:120
  },
  trash3Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:-130
  },
  trash4Style:{
    width:80,
    height:80,
    marginTop:-130,
    marginLeft:150
  },
  trash5Style:{
    width:80,
    height:80,
    marginTop:-100,
    marginLeft:-140
  },
  trash6Style:{
    width:80,
    height:80,
    marginTop:-80,
    marginLeft:20
  },
  trashcangifStyle:{
    width:414,
    marginTop:50
  },
  header_bg:{
    height: 50,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor:'#F6F6F6',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  bsContainer:{
    backgroundColor:'#F6F6F6',
  },
  btnaddtrashStyle:{
    marginTop:-230,
    marginLeft:250,
    zIndex:99,
  },
});