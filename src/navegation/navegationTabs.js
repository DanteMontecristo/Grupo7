// Tabs = barra inferior
// Son independientes y el usuario salta entre ellas en un toque (RF-UX-01)

import {createBottomTabNavigator}
from "@react-navigation/bottom-tabs";
import {lonicons} from "@exxpo/vector-icons"; // Viene incluido con expo

import MovimientosScreen from "../screens/movmientos/MovimientosScreen";
import CategoriasScreen from "../screens/categorias/CategoriasScreen";
import MetasScreen from "../screens/metas/MetasScreen";
import PerfilScreen from "../screens/perfil/PerfilScreen";

const Tab = createBottomTabNavigator ();

// Icono de cada pestaña, mapeado por el nombre de la pantalla
//Fuera del componente para no recrear el objeto en cada render

const iconos = {
    Movimientos: "wallet-outline",
    Categorias: "pricetags-outline",
    Metas: "flag-outline",
    Perfil: "person-outline",
};

export default function AppTabs(){
    return(
        <Tab.Navigator
        // Funcion en vez de objeto, asi se recibe "route" y sabemos
        // que pestaña se esta dinujando
        screenOptions = {({route}) => ({
            //Color y size los inyecta React Navigation segun si esta activa
            tabBarlcon: ({color,size}) => (
                <Ionicons
                name = {iconos[route.name]} size = {size} color = {color} />
            ),
            tabBarActiveTintColor: "#2563eb",
        })}
        >
        {/* Movimiento va primero: es la accion mas frecuente y la que responde al P-01 
            (registro abandonado por friccion) */}
            <tab.Screen name = "Movimientos" component = {MovimientosScreen} />
            <tab.Screen name = "Categorias" component = {CategoriasScreen} />
            <tab.Screen name = "Metas" component = {MetasScreen} />
            <tab.Screen name = "Perfil" component = {PerfilScreen} />
            </Tab.Navigator>            
    );
}