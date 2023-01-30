import React from 'react'
import { findNodeHandle, requireNativeComponent, UIManager, View, Image, TouchableOpacity } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import styles from './styles';
import { icons } from '../../Utils/assets';
const CameraView = requireNativeComponent(`CameraView`);

class CameraScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            cameraVisible: false
        }
    }
    takePhoto = () => {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.cameraRef),
            UIManager.getViewManagerConfig('CameraView').Commands
                .takePhoto,
            []
        );
    }
    componentDidMount(): void {
        request(PERMISSIONS.IOS.CAMERA).then((result) => {
            if (result == RESULTS.GRANTED) {
                this.setState({ cameraVisible: true })
            }
        });
    }
    render() {
        return (
            <View style={[styles.mainContainer,]} >
                <View style={[styles.HeaderView,]} >
                </View>
                <View style={[styles.cameraContainer,]} >
                    {this.state.cameraVisible ? <CameraView
                        ref={_ref => this.cameraRef = _ref}
                        onResultImageExported={(data: any) => this?.props?.navigation.navigate('ResultScreen', ({ imageResult: data?.nativeEvent }))}

                        style={styles.field} /> : null}
                </View>
                <View style={[styles.buttonContainer,]} >
                    <TouchableOpacity onPress={this.takePhoto}>
                        <Image
                            source={icons.backBlack}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default CameraScreen

