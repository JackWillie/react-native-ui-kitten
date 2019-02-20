import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  fireEvent,
  render,
} from 'react-native-testing-library';
import {
  styled,
  StyleProvider,
  StyleProviderProps,
} from '@kitten/theme';
import * as config from './bottomTabNavigator.spec.config';
import * as tabsConfig from './bottomNavigatorTab.spec.config';
import {
  BottomTabNavigator as BottomTabNavigatorComponent,
  Props as BottomTabNavigatorProps,
} from './bottomTabNavigator.component';
import {
  BottomNavigatorTab as BottomNavigatorTabComponent,
  Props as BottomNavigatorTabProps,
} from './bottomNavigatorTab.component';

const BottomTabNavigator = styled<BottomTabNavigatorComponent, BottomTabNavigatorProps>(BottomTabNavigatorComponent);
const BottomNavigatorTab = styled<BottomNavigatorTabComponent, BottomNavigatorTabProps>(BottomNavigatorTabComponent);

describe('@bottom-tab-navigator: component checks', () => {

  const Mock = (props?: BottomTabNavigatorProps): React.ReactElement<StyleProviderProps> => (
    <StyleProvider mapping={config.mapping} theme={config.theme} styles={{}}>
      <BottomTabNavigator {...props} />
    </StyleProvider>
  );

  const MockTab = (props: BottomNavigatorTabProps): React.ReactElement<StyleProviderProps> => (
    <StyleProvider mapping={tabsConfig.mapping} theme={tabsConfig.theme} styles={{}}>
      <BottomNavigatorTab {...props} />
    </StyleProvider>
  );

  const tab1Uri: string = 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png';
  const tab2Uri: string = 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/attachment.png';
  const tab3Uri: string = 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/announcements.png';

  const getTab1Uri = (selected: boolean): ImageSourcePropType => ({ uri: tab1Uri });
  const getTab2Uri = (selected: boolean): ImageSourcePropType => ({ uri: tab2Uri });
  const getTab3Uri = (selected: boolean): ImageSourcePropType => ({ uri: tab3Uri });

  const tabTestId: string = '@tab/last';

  it('* empty', () => {
    const component = render(<Mock children={[]}/>);
    expect(component).toMatchSnapshot();
  });

  it('* with routes', () => {
    const component = render(
      <Mock>
        <MockTab getIconSource={getTab1Uri} title='Screen 1' selected={false}/>
        <MockTab getIconSource={getTab2Uri} title='Screen 2' selected={true}/>
        <MockTab getIconSource={getTab3Uri} title='Screen 3' selected={false}/>
      </Mock>,
    );
    expect(component).toMatchSnapshot();
  });

  it('* current index', () => {
    const component =
      <Mock selectedIndex={1}>
        <MockTab getIconSource={getTab1Uri} title='Screen 1' selected={false}/>
        <MockTab getIconSource={getTab2Uri} title='Screen 2' selected={true}/>
        <MockTab getIconSource={getTab3Uri} title='Screen 3' selected={false}/>
      </Mock>;
    const rendered = render(component);
    expect(component.props.selectedIndex).toBe(1);
    expect(rendered).toMatchSnapshot();
  });

  it('* tab choose', () => {
    const onSelect = jest.fn();
    const component = render(
      <Mock
        selectedIndex={1}
        onSelect={onSelect}>
        <MockTab getIconSource={getTab1Uri} title='Screen 1' selected={false}/>
        <MockTab getIconSource={getTab2Uri} title='Screen 2' selected={true}/>
        <MockTab testID={tabTestId} getIconSource={getTab3Uri} title='Screen 3' selected={false}/>
      </Mock>,
    );

    fireEvent(component.getByTestId(tabTestId), 'select');

    expect(component).toMatchSnapshot();
    expect(onSelect).toHaveBeenCalled();
  });

  it('* choose selected tab', () => {
    const onSelect = jest.fn();
    const component = render(
      <Mock
        selectedIndex={1}
        onSelect={onSelect}>
        <MockTab getIconSource={getTab1Uri} title='Screen 1' selected={false}/>
        <MockTab testID={tabTestId} getIconSource={getTab2Uri} title='Screen 2' selected={true}/>
        <MockTab getIconSource={getTab3Uri} title='Screen 3' selected={false}/>
      </Mock>,
    );
    fireEvent(component.getByTestId(tabTestId), 'select');
    expect(component).toMatchSnapshot();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('* additional appearance', () => {
    const component = render(
      <Mock appearance='highlight'>
        <MockTab getIconSource={getTab1Uri} title='Screen 1' selected={false}/>
        <MockTab getIconSource={getTab2Uri} title='Screen 2' selected={true}/>
        <MockTab testID={tabTestId} getIconSource={getTab3Uri} title='Screen 3' selected={false}/>
      </Mock>,
    );
    expect(component).toMatchSnapshot();
  });

});

