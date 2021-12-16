import React ,{Component} from 'react';
import { ActivityIndicator,ScrollView,Text,View,Image,Dimensions,TouchableOpacity, StyleSheet, } from "react-native";
import Categories from '../Components/Categories';
import Trending from '../Components/Trending';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Home extends React.Component {
    state = {news: []};
    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=df1b613c4dea49b98ee483073f2bd86f`)
          .then(res => res.json())
          .then(response => {
            this.setState({
              news: response.articles,
            });
          })
          .catch(error => {
            console.log(error);
          });
    }
    render() { 
        return (
            <View style={styles.home}>
                <Categories navigation={this.props.navigation}/>
                <Trending navigation={this.props.navigation}/>
                {/* <View style={{alignItems: 'center'}}>
          {this.state.news.length === 0 ? (
            <View
            style={{
              width: deviceWidth,
              height:deviceHeight,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color="black" size="large" />
          </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.news.map((news, index) =>
                news.urlToImage ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('WebView', {
                        url: news.url,
                      })
                    }>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        elevation: 4,
                        width: deviceWidth - 30,
                        marginVertical: 7,
                      }}>
                      <Image
                        source={{uri: `${news.urlToImage}`}}
                        style={{height: 100, width: 100, borderRadius: 10}}
                      />
                      <Text
                        style={{
                          width:deviceWidth - 130,
                          padding:5,
                        }}>
                        {news.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </ScrollView>
          )}
        </View> */}
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