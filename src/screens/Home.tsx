import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '../utils/Theme';
import { SCREENS } from '../App';
import { HomeNavigationProps } from '../navigation/NavigationProps';
import { HomeParams } from '../navigation/NavigationParams';

type Props = {

};

const Home = ({navigation}: HomeNavigationProps<'Home'> ) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          contentInsetAdjustmentBehavior="automatic">
          <View style={styles.innerScrollView}>
            <Text>{theme}</Text>
            <Button title="TOGGLE" onPress={() => toggleTheme()} />
            <View>
              {Object.keys(SCREENS).map((key, i) => {
                const screenName = SCREENS[key];
                if (screenName === SCREENS.HOME) return null;

                return (
                  <Pressable
                    key={i}
                    style={styles.button}
                    onPress={() => navigation.navigate<keyof HomeParams>(screenName)}>
                    <Text>{screenName}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    backgroundColor: "#9ebbcc",
    justifyContent: "center",
    alignItems: "center"
  }
});
