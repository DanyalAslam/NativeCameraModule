import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { vh, vw } from '../../Utils/Units';
import { icons } from '../../Utils/assets';
import IconButton from '../../Components/IconButton';
import styles from './styles';

class ResultScreen extends React.Component {
    state = {
        cameraVisible: false
    }
    render() {
        return (
            <View style={[styles.mainContainer,]} >
                <View style={[styles.HeaderView,]} >
                </View>
                <View style={[styles.cameraContainer,]} >
                    <Image
                        style={{ width: 100 * vw, height: 60 * vh, borderRadius: 5 * vw }}
                        source={
                            this.props?.route?.params?.imageResult
                            && { uri: this.props.route.params.imageResult.resultUrl }
                        }
                    />
                </View>
                <View style={[styles.buttonContainer,]} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'bblack', width: 100 * vw, height: 20 * vh, paddingHorizontal: 3 * vw }}>
                        <IconButton
                            Text='Retake'
                            style={{ marginLeft: 2 * vw }}
                            onPress={() => this?.props?.navigation.navigate('CameraScreen')}
                            icon={icons.Retake}
                        />
                        <IconButton
                            Text='Use photo'
                            style={{ marginLeft: 2 * vw }}
                            icon={icons.Tick}
                        />
                    </View>
                </View>
            </View>
        )
    }

}

export default ResultScreen

