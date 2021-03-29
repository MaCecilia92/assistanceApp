import React from 'react';
import {Text, View, SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from '../GlobalStyles';


function Home() {
    
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={GlobalStyles.container}>
                    <View>
                        <Text>Soy home</Text>  
                    </View>
            </View> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
