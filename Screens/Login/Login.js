import React from 'react';
import { SafeAreaView, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import LoginForm from '../../Components/LoginForm/LoginForm' 

function Login() {
    
    return (
        <SafeAreaView>
            <View style={GlobalStyles.container} >
                <LoginForm />
            </View>
        </SafeAreaView>
    )

}

export default Login; 