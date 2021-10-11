import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function ResturantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>

            <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                <ResturantImage />
                {/* Reasturant info */}
                <ReasturantInfo />
            </View>
        </TouchableOpacity>
    )
}

const ResturantImage = () => {
    return (
        <>
            <Image source={{ uri: "https://media.istockphoto.com/photos/restaurant-kitchen-crew-in-action-picture-id1277763706?b=1&k=20&m=1277763706&s=170667a&w=0&h=oFB9fgBOnyAH-0L4yMWlOj28kDDj6WbPzratZ4spP40=" }} style={{
                height: 180,
                width: "100%",
            }} />
            <TouchableOpacity style={{
                position: "absolute",
                right: 20,
                top: 20,
            }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
            </TouchableOpacity>
        </>
    )
}

const ReasturantInfo = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>The Royal kitchen Greater Noida </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>30-45 * min</Text>
            </View>

            <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: "center" }}>

                <Text>4.5</Text>

            </View>

        </View>

    )
}