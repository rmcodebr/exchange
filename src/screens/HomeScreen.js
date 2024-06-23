import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import dataf from "../../assets/data.json";
import available from "../../assets/avaliable.json";
import FetchExchange from "../services/FetchExchange";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    initialExchange();
    setData(available);
    // Fetch the JSON data (replace with actual data fetching logic if necessary)
    // fetch("../../assets/avaliable.json")
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error));
  }, []);

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleSearch = (text) => {
    setQuery(text);
    if (text) {
      const filtered = data.filter((item) =>
        removeAccents(item.name).toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const initialExchange = async () => {
    const response = await FetchExchange.get("last/USD-BRL,EUR-BRL,BTC-BRL");
    setInitialData(response.data);
    console.log(response.data);
  };

  const exchange = async (from_to) => {
    const response = await FetchExchange.get(`/last/${from_to}`);
    console.log(response.data);
    setResponseData(response.data[from_to.replace("-", "")]);
  };

  return (
    <View className="flex-1 m-2 space-y-3">
      <View className="space-y-3">
        <View className="">
          <Image
            className="h-16"
            resizeMode="contain"
            source={require("../../assets/img/rmcodelogo.png")}
          />
        </View>
        <View>
          <Text className="text-center text-4xl font-bold text-green-800">
            EXCHANGE
          </Text>
        </View>
        <View>
          <Text>oi</Text>
          <FlatList
            data={initialData}
            renderItem={(initialData) => (
              <View>
                <Text>{initialData.item}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View className="p-2 bg-slate-500/25 border rounded-md">
        <View className="flex flex-row justify-between items-center">
          <TextInput
            className="w-[85%] border-2 py-3 px-1 text-lg font-medium rounded-md"
            placeholder="Digite a Moeda"
            value={query}
            onChangeText={handleSearch}
          />
          <Pressable
            className="mx-2"
            onPress={() => {
              setQuery("");
            }}
          >
            <FontAwesome name="trash-o" size={40} color="black" />
          </Pressable>
        </View>
      </View>

      <View>
        {filteredData.length > 0 && (
          <FlatList
            className=""
            data={filteredData}
            keyExtractor={(item) => item.from_to.toString()}
            renderItem={({ item }) => (
              <Pressable
                className="bg-slate-500/25 px-1 py-3 border-2 border-slate-50/25"
                onPress={() => {
                  setQuery(item.name);
                  setFilteredData([]);
                  exchange(item.from_to);
                }}
              >
                <Text className="text-lg font-semibold">{item.name}</Text>
              </Pressable>
            )}
          />
        )}
      </View>
      {query && (
        <View className="bg-slate-700/25 rounded-md">
          <View className="flex flex-row m-2 justify-around">
            <View className="flex border items-center rounded-md">
              <Text className="p-2 text-3xl">Compra</Text>
              <View className="flex flex-row items-center m-2">
                <Text className="text-lg">R$</Text>
                <Text className="p-2 text-4xl">{responseData["bid"]}</Text>
              </View>
            </View>
            <View className="flex border items-center rounded-md">
              <Text className="p-2 text-3xl">Venda</Text>
              <View className="flex flex-row items-center m-2">
                <Text className="text-lg">R$</Text>
                <Text className="p-2 text-4xl">{responseData["ask"]}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
