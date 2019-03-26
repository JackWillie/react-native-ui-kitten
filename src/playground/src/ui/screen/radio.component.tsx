import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { Radio } from '@kitten/ui';

type Props = & ThemedComponentProps & NavigationScreenProps;

interface State {
  isRadio1Checked: boolean;
  isRadio2Checked: boolean;
  isRadio3Checked: boolean;
  isRadio4Checked: boolean;
}

const STATUS: string = '';

class RadioScreen extends React.Component<Props, State> {

  static navigationOptions = {
    title: 'Radio',
  };

  public state: State = {
    isRadio1Checked: false,
    isRadio2Checked: true,
    isRadio3Checked: false,
    isRadio4Checked: true,
  };

  private onRadio1Change = (selected: boolean) => {
    this.setState({ isRadio1Checked: selected });
  };

  private onRadio2Change = (selected: boolean) => {
    this.setState({ isRadio2Checked: selected });
  };

  private onRadio3Change = (selected: boolean) => {
    this.setState({ isRadio3Checked: selected });
  };

  private onRadio4Change = (selected: boolean) => {
    this.setState({ isRadio4Checked: selected });
  };

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <View style={this.props.themedStyle.containerSection}>
          <Text style={this.props.themedStyle.textDescription}>Interactive</Text>
          <View style={this.props.themedStyle.containerPreview}>
            <Radio
              style={this.props.themedStyle.component}
              checked={this.state.isRadio1Checked}
              status={STATUS}
              onChange={this.onRadio1Change}
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={this.state.isRadio2Checked}
              status={STATUS}
              onChange={this.onRadio2Change}
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={this.state.isRadio3Checked}
              disabled={true}
              status={STATUS}
              onChange={this.onRadio3Change}
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={this.state.isRadio4Checked}
              disabled={true}
              status={STATUS}
              onChange={this.onRadio4Change}
            />
          </View>
        </View>
        <View style={this.props.themedStyle.containerSection}>
          <Text style={this.props.themedStyle.textDescription}>Size</Text>
          <View style={this.props.themedStyle.containerPreview}>
            <Radio
              style={this.props.themedStyle.component}
              checked={true}
              status={STATUS}
              size='large'
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={true}
              status={STATUS}
              size='medium'
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={true}
              status={STATUS}
              size='small'
            />
          </View>
        </View>
        <View style={this.props.themedStyle.containerSection}>
          <Text style={this.props.themedStyle.textDescription}>Text</Text>
          <View style={this.props.themedStyle.containerPreviewColumn}>
            <Radio
              style={this.props.themedStyle.component}
              status={STATUS}
              text='Place your text'
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={true}
              status={STATUS}
              text='Place your text'
            />
            <Radio
              style={this.props.themedStyle.component}
              disabled={true}
              status={STATUS}
              text='Place your text'
            />
            <Radio
              style={this.props.themedStyle.component}
              checked={true}
              disabled={true}
              status={STATUS}
              text='Place your text'
            />
          </View>
        </View>
      </View>
    );
  }
}

export default withStyles(RadioScreen, (theme: ThemeType) => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  containerSection: {
    marginVertical: 16,
  },
  containerPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  containerPreviewColumn: {
    marginTop: 4,
  },
  textDescription: {
    fontSize: 18,
  },
  component: {
    margin: 4,
  },
}));
