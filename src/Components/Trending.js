import React ,{Component} from 'react';
import { View, Text, ScrollView,TouchableOpacity,Image,ActivityIndicator} from 'react-native';



class Trending extends React.Component {
    state = {news: []};
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=df1b613c4dea49b98ee483073f2bd86f')
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
            <View style={{marginTop:5}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.news.map((news, index) => (
                  <View key={index} style={{margin: 10,backgroundColor:'white',padding:7,borderRadius:17}}>
                    <Image source={{uri: `${news.urlToImage}`}} style={{height: 200, width: 300, borderRadius: 12}}/>
                    <Text style={{width: 290, textAlign: 'justify',marginTop:5,marginLeft:5}}>
                      {news.title}
                    </Text>
                  </View>
                ))}
              </ScrollView>
           
          </View>
        )
    }
}
 
export default Trending;