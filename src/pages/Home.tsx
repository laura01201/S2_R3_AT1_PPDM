import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../types/RootStackParamList";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function App() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>
        Seja bem-vindo ao Diário de Viagem!
      </Text>
      <Text style={styles.txtContainer}>Clique no que você deseja:</Text>

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.buttonCamera}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.titleButtonCamera}>Câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGPS}
          onPress={() => navigation.navigate("GPS")}
        >
          <Text style={styles.titleButtonGPS}>Localização atual</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAcelerometro}
          onPress={() => navigation.navigate("Acelerometro")}
        >
          <Text style={styles.titleButtonAcelerometro}>
            Acelerômetro em tempo real
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF0",
    gap: 20,
    padding: 20,
  },

  titleContainer: {
    fontSize: 35,
    fontStyle: "italic",
    textAlign: "center",
    color: "#6a452c",
    fontWeight: "bold",
  },
  txtContainer: {
    fontSize: 15,
    color: "#1b1b1bff",
    gap: 0.5,
    fontStyle: "italic",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonCamera: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 40,
    borderRadius: 30,
    borderWidth: 0.2,
    borderBottomWidth: 3,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#626161c3",
    borderColor: "#2e2e2eff",
    marginBottom: 25,
  },
  buttonGPS: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 40,
    borderRadius: 30,
    borderWidth: 0.2,
    borderBottomWidth: 3,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#3e95ffff",
    borderColor: "#022463ff",
    marginBottom: 25,
  },
  buttonAcelerometro: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 40,
    borderRadius: 30,
    borderWidth: 0.2,
    borderBottomWidth: 3,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#55c997ff",
    borderColor: "#21633dff",
    marginBottom: 25,
  },

  titleButtonCamera: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
  },
  titleButtonGPS: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
  },
  titleButtonAcelerometro: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
  },
});
