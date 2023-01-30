const { StyleSheet } = require("react-native");
const { vw } = require("../../Utils/Units");

const styles = StyleSheet.create({
    icon:{
        height:4*vw,
        width:4*vw,
        resizeMode:'contain',
        marginHorizontal:2*vw
    }
})
export default styles