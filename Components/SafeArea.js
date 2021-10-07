import React, { Children } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';

const Safearea = ({ children }) => {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default Safearea;
