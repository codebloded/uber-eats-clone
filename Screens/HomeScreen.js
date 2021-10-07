import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Categories from '../Components/Categories';
import HeaderTabs from '../Components/HeaderTabs';
import Safearea from '../Components/SafeArea';
import SearchBar from '../Components/SearchBar';

const Homescreen = () => {
    return (
        <Safearea style={{ backgroundColor: "#eee", flex: 1 }}>

            <View style={styles.sx} >
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </Safearea>
    );
}

const styles = StyleSheet.create({
    sx: {
        backgroundColor: "white",
        padding: 15,
    }
})

export default Homescreen;
