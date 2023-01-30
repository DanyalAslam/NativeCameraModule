const { StyleSheet } = require("react-native");
const { vw, vh } = require("../../Utils/Units");

const styles = StyleSheet.create({
    field: {
        height: '100%',
        width: '100%',
    },
    mainContainer: {
        height: vh * 100,
        width: vw * 100,
        backgroundColor:'#000000'
    },
    cameraContainer: {
        height: vh * 60,
        width: vw * 100,
    },
    buttonContainer: {
        height: vh * 20,
        width: vw * 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderView: {
        height: vh * 10,
        width: vw * 100,
    }
})

export default styles

