import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Fast-Food"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
    return (

        <View style={{
            backgroundColor: "#fff",
            margin: 5,
            paddingVertical: 10,
            paddingLeft: 20,
        }}>


            <ScrollView horizontal>
                {items.map((item, index) => (

                    <View style={{
                        alignItems: "center",
                        marginRight: 30,
                    }} key={index}>

                        <Image source={item.image} style={{
                            height: 40,
                            width: 50,
                            resizeMode: "contain"
                        }} />
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "bold"
                        }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
