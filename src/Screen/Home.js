import React ,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categories from '../Components/Categories';
import Trending from '../Components/Trending';
class Home extends React.Component {
    render() { 
        return (
            <View style={styles.home}>
                <Categories/>
                <Trending/>
              <Text>Home Screens</Text>
            </View>
        )
    }
}
 
export default Home;

const styles=StyleSheet.create({
    home:{
     backgroundColor:'#2b2b2b',
    }
})