import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';

export default function TrashSuggestScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source= {require('../assets/suggest/header-bg.png')} 
               style= {{ height: 275 }}/>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                    style={styles.profileiconStyle}
                    source={require('../assets/icon-profile.png')}
                    />
            </TouchableOpacity>
        <Text style={styles.headerText}>統計分析</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MoneySuggest')}>
          <Image source= {require('../assets/suggest/btn-moneySuggest.png')}
                style= {{ marginTop: 30, marginLeft: 45,}}/>
        </TouchableOpacity>
        <Image source= {require('../assets/suggest/btn-trashOnTouch.png')}
               style= {{ marginTop: -44, marginLeft: 54,}}/>
      </View>
      <View style={styles.container}>
        <View style={styles.chart}>
          <Image source= {require('../assets/suggest/statistics-chart.png')}/>
        </View>

        <View style={styles.trashSuggest}>
            <Text style={styles.suggestText}>五月已累積丟了___</Text>
            <View style={styles.dashLine} />
            <Text style={styles.suggestText}>建議區</Text>
            <View style={styles.suggestCharacter}>
              <Image source= {require('../assets/suggest/character_Earth.png')} 
                    style ={{ width: 167, height: 167 }}/>
            </View>
        </View>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  header: {
    height: 275,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -150,
    marginLeft: 50,
  },
  profileiconStyle:{
    width:58,
    height:58,
    marginLeft:325,
    marginTop:-200
  },
  container: {
    alignItems: 'center',
  },
  chart: {
    backgroundColor: '#fff',
    width: 365,
    height: 337,
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  trashSuggest: {
    backgroundColor: '#fff',
    width: 365,
    height: 540,
    borderRadius: 20,
    shadowColor: '#707070',
    shadowOffset: { width: 0, height: 3,},
    shadowOpacity: 6,
    marginTop: 50,
  },
  suggestText: {
    color: '#909090',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 30,
  },
  dashLine: {
    marginTop: 200,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#35A67D',
  },
  suggestCharacter: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
