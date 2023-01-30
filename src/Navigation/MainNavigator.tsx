import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from '../Screens/CameraScreen'
import ResultScreen from '../Screens/ResultScreen'
const MainStack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MainStack.Screen component={CameraScreen} name="CameraScreen" />
      <MainStack.Screen component={ResultScreen} name="ResultScreen" />
    </MainStack.Navigator>
  );
};
class MainNavigator extends React.Component {
  constructor(props: any) {
    super(props);
  }
  renderSelection = () => {
    return <MainStackNavigator props={this.props} />;
  };
  render() {
    return <View style={{ flex: 1 }}>{this.renderSelection()}</View>;
  }
}

export default MainNavigator;