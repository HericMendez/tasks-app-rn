import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeObject(id, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    // saving error
  }
}

