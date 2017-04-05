import React, {Component}from 'react';
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, View, Image, Text} from 'react-native'
import {RkText, RkTheme} from 'react-native-ui-kitten'
import {Avatar} from '../components/avatar'

import {UtilStyles} from '../style/styles';

export class AvatarScreen extends Component {
  static navigationOptions = {
    title: 'Avatar',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: RkTheme.current.colors.back.base
      }
    })
  };

  render() {
    return (
      <ScrollView automaticallyAdjustContentInsets={true}
                  style={UtilStyles.container}>
        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Base avatar</RkText>
          <View style={UtilStyles.columnContainer}>
            <Avatar source={require('../img/avatars/image3.png')} name='Elena Zhukova'/>
            <Avatar source={require('../img/avatars/image6.png')} name='Nick Kuznetsov'/>
          </View>

        </View>

        <View style={[UtilStyles.section, UtilStyles.bordered]}>
          <RkText rkType='header'>Avatar with caption</RkText>
          <View style={UtilStyles.columnContainer}>
            <Avatar source={require('../img/avatars/image1.png')}
                    name='Nataly Rover' caption='Secondary text'/>
            <Avatar source={require('../img/avatars/image5.png')}
                    name='Alex Gilbert' caption='Secondary text'/>
          </View>
        </View>

        <View style={[UtilStyles.section]}>
          <RkText rkType='header'>Avatar with caption</RkText>
          <View style={UtilStyles.columnContainer}>
            <Avatar rkType='round' source={require('../img/avatars/image4.png')}
                    name='Helen Milpon' caption='Secondary text'/>
            <Avatar rkType='round' source={require('../img/avatars/image2.png')}
                    name='Laura Meitner' caption='Secondary text'/>
          </View>
        </View>
      </ScrollView>
    )
  }
}