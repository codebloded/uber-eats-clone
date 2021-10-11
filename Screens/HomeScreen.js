import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../Components/Categories';
import HeaderTabs from '../Components/HeaderTabs';
import ResturantItem from '../Components/ResturantItem';
import Safearea from '../Components/SafeArea';
import SearchBar from '../Components/SearchBar';

const Homescreen = () => {
    return (
        <Safearea style={{ backgroundColor: "#eee", flex: 1 }}>

            <View style={styles.sx} >
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <ResturantItem />
                <ResturantItem />
                <ResturantItem />
            </ScrollView>
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
