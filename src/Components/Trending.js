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
            <View style={{marginTop:15,marginVertical:10}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.news.map((news, index) => (
                  <View style={{margin: 10,backgroundColor:'white',padding:7,borderRadius:17,elevation: 4}}>
                    <Image source={{uri: `${news.urlToImage}`}} style={{height: 200, width: 210, borderRadius: 12}}/>
                    <Text style={{width: 200, textAlign: 'justify',marginTop:5,marginLeft:5}}>
                      {news.title}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{backgroundColor:'#2b2b2b',color:'white',padding:20,textAlign:'center',fontWeight:'bold'}}  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('WebView', {
                      url: news.url,
                    })
                  }>Learn More</Text>
                        </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
           
          </View>
        )
    }
}
 
export default Trending;