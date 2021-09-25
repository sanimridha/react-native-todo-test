import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    const [value, setvalue] = useState("");
    const [arrayItem, setArrayItem] = useState([]);
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
                }}
                resizeMode="contain"
                style={{ height: 50, width: 50 }}
            />
            <Text>Real time data update with react native</Text>
            <Text style={{ fontSize: 25 }}>{value}</Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                <TextInput
                    value={value}
                    onChangeText={setvalue}
                    style={{
                        borderWidth: 1,
                        borderColor: "skyblue",
                        borderRadius: 8,
                        height: 30,
                        width: 300,
                        marginRight: 10,
                    }}
                />
                <TouchableOpacity
                    style={{
                        height: 30,
                        width: 80,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "skyblue",
                    }}
                    onPress={() => {
                        arrayItem.push(value);
                        setvalue("");
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            {arrayItem.map((item, key) => {
                console.log(arrayItem);
                return (
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            padding: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: "skyblue",
                            width: "100%",
                            alignSelf: "center",
                        }}
                    >
                        <Text key={key} style={{}}>
                            {item}
                        </Text>
                        <Image
                            source={{
                                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png",
                            }}
                            resizeMode={"contain"}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
        marginTop: 50,
    },
});
