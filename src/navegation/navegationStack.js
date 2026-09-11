import { ActivityIndicator, View } from "react-native";
// NavigationContainer: contenedor raíz de React Navigation.
// Debe existir uno solo en toda la app y envolver a los navegadores.
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";

export default function RootNavigator() {
  // Datos que expone AuthProvider
  const { usuario, cargando } = useAuth();

  // Mientras Firebase revisa si hay sesión guardada, mostramos un spinner.
  // Evita el parpadeo del login al abrir la app estando ya autenticado.
  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* EL CORAZÓN DE LA NAVEGACIÓN:
          si hay usuario se monta AppTabs, si no AuthStack.
          No hacemos navigation.navigate() después del login: el estado manda.
          Ventaja de seguridad: sin sesión, las pantallas privadas ni siquiera
          existen en el árbol, así que es imposible llegar a ellas. */}
      {usuario ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}