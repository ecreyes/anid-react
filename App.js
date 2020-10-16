import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Header, ListItem, SocialIcon, Image, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
// assets
import logoVoces from './assets/logo-voces.jpg';
import producto from './assets/producto.jpg';
import producto2 from './assets/producto2.jpg';
import producto3 from './assets/producto3.jpg';
import producto4 from './assets/producto4.jpg';
import producto5 from './assets/producto5.jpg';
import producto6 from './assets/producto6.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        barStyle="light-content"
        containerStyle={{
          backgroundColor: '#9C27B0',
        }}
        placement="left"
        leftComponent={{ text: 'Anid COVID', style: { color: '#fff', fontSize: 16, fontWeight: 'bold' } }}
      />
      <View style={{ flex: 1 }}>
        <ImageBackground source={logoVoces} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'space-between' }}>
          <View>
            <LinearGradient
              style={{opacity:0.8}}
              start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
              colors={['#BDBDBD', '#9C27B0']}
            >
              <Text style={{ fontSize: 18, color: 'white' }}>Voces de la naturaleza</Text>
            </LinearGradient>
          </View>
          <View>
            <View>
              <LinearGradient
                style={{ width: '100%',opacity:0.8 }}
                start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
                colors={['#BDBDBD', '#9C27B0']}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    color='#9C27B0'
                    name='person'
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ color: 'white'}}>Pris Beleg</Text>
                </View>
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                style={{ width: '100%',opacity:0.8 }}
                start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
                colors={['#BDBDBD', '#9C27B0']}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    color='#9C27B0'
                    name='email'
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{color:'white'}}>prisbeleg@gmail.com</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text>Whatsapp</Text>
            <SocialIcon
              style={{ backgroundColor: 'green', height: 30 }}
              type='whatsapp'
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text>Instagram</Text>
            <SocialIcon
              style={{ backgroundColor: '#9C27B0', height: 30 }}
              type='instagram'
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
            <Text>Facebook</Text>
            <SocialIcon
              style={{ height: 30 }}
              type='facebook'
            />
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <ListItem key="1">
            <ListItem.Content>
              <ListItem.Title style={{ color: '#9C27B0' }}>Descripción</ListItem.Title>
              <ListItem.Subtitle>
                Veterinaria, Msc Áreas silvestres y conservadora de la naturaleza,
                generando conciencia a través del arte.
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={{ flex: 2, marginHorizontal: 20 }}>
          <ListItem key="1">
            <ListItem.Content>
              <ListItem.Title style={{ color: '#9C27B0' }}>Productos</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ScrollView horizontal style={{ marginHorizontal: 20 }}>
            <Image
              source={producto}
              style={{ width: 80, height: 90, marginRight: 5 }} />
            <Image
              source={producto2}
              style={{ width: 80, height: 90, marginHorizontal: 10 }} />
            <Image
              source={producto3}
              style={{ width: 80, height: 90, marginHorizontal: 10 }} />
            <Image
              source={producto4}
              style={{ width: 80, height: 90, marginHorizontal: 10 }} />
            <Image
              source={producto5}
              style={{ width: 80, height: 90, marginHorizontal: 10 }} />
            <Image
              source={producto6}
              style={{ width: 80, height: 90, marginHorizontal: 10 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
