import React ,{Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const categories=['Entertainment','Business','Politics','Health','Technology','Sports'];

class Categories extends React.Component {
    render() { 
        return (
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               {
                   categories.map((category,index)=>(
                    <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('GetNews', {
                        category,
                      })
                    }>
                       <View>
                    <Text style={{padding: 10,fontSize: 14,margin: 10,borderRadius: 12,color:'black',backgroundColor:'whitesmoke'}}>
                       {category}
                    </Text>
                       </View>
                       </TouchableOpacity>
                   ))
               }
               
           </ScrollView>
        )
    }
}
 
export default Categories;