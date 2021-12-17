import React ,{Component} from 'react';
import { ActivityIndicator,ScrollView,Text,View,Image,Dimensions,TouchableOpacity, StyleSheet, } from "react-native";
import Categories from '../Components/Categories';
import Trending from '../Components/Trending';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Home extends React.Component {
    state = {news: []};
    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-12-17&sortBy=popularity&apiKey=df1b613c4dea49b98ee483073f2bd86f`)
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
              <View>
              <Categories navigation={this.props.navigation}/>
                <Trending navigation={this.props.navigation}/>
              </View>
              <View style={{alignItems: 'center',backgroundColor:'#2b2b2b',marginBottom:10}}>
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            color="black"
          />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (
                
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      elevation: 4,
                      padding:10,
                      marginVertical: 7,
                    }}>
                    <Image
                      source={{uri: `${news.urlToImage}`}}
                      style={{height: 200, width: 320, borderRadius: 10}}
                    />
                    <Text
                      style={{
                        width:320,
                        padding:5,
                        fontWeight:'bold',
                        textAlign:'justify'
                      }}>
                      {news.title}
                    </Text>
                    <Text
                      style={{
                        width:320,
                        padding:5,
                        fontSize:10,
                        textAlign:'justify'
                      }}>
                      {news.description}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{backgroundColor:'#2b2b2b',borderRadius:10,color:'white',padding:20,textAlign:'center',fontWeight:'bold'}}  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('WebView', {
                      url: news.url,
                    })
                  }>Learn More</Text>
                        </TouchableOpacity>
                  </View>
            
              ) : null,
            )}
          </ScrollView>
        )}
      </View>
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