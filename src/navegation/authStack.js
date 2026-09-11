// Stack = navegacion por pila, cada pantalla de apila sobre la anterior
// y se vuelve con el boton atras

import {createNativeStackNavigator}
from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import RegistroScreen from "../screens/auth/RegistroScreen";

const Stack = createNativeStackNavigator ();

export default function AuthStack() {
    return(
        //screenOptions aplica a todas las pantallas del stack
        //headerShown: false porque login y registro llea su propio diseño
        <Stack.Navigator
        screenOptions = {{headerShown: false}}>
            {/* La primera declarada es a la que se muestra al arrancar*/}
            <Stack.Screen name = "Login" component = "LoginScreen" />
            <Stack.Screen name = "Registro" component = "RegistroScreen" />
            </Stack.Navigator>
    );
}