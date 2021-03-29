import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})