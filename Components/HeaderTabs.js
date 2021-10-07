import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <View style={styles.headerBtn}>
            <HeaderButtons text="Delivery"
                btnColor="black"
                activeTab={activeTab}
                setActive={setActiveTab}
                textColor="white" />

            <HeaderButtons
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActive={setActiveTab} />

        </View>
    );
}

const HeaderButtons = (props) => {
    return (
        <TouchableOpacity
            style={
                [styles.touch,
                { backgroundColor: props.activeTab === props.text ? "black" : "white", }]
            }
            onPress={() => props.setActive(props.text)}
        >
            <Text style={[styles.btn, { color: props.activeTab === props.text ? "white" : "black", }]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerBtn: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
    },
    touch: {

        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    btn: {

        fontSize: 15,
        fontWeight: '900'
    }
})

export default HeaderTabs;
