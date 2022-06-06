import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParams } from "./NavigationParams";


export interface HomeNavigationProps<RouteName extends keyof HomeParams> {
    navigation: StackNavigationProp<HomeParams, RouteName>;
    route: RouteProp<HomeParams, RouteName>;
}