import React, { Component } from 'react';
import { ListView, StyleSheet, FlatList, Button, View } from 'react-native';
import { Container, ListItem, Item, Input, Icon, Text, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';
import Todo from './Todo';
import { connect } from 'react-redux';
import { fetchHeroes } from '../components/actions/heroes';
import _ from 'lodash';

class Main extends Component {

    static navigationOptions = {
        title: 'TODO APP',
        headerTitleStyle :{ textAlign: 'center', flexGrow: 1, color:'white'},
        headerStyle: {
            backgroundColor: 'green'
        },
        style: {
            paddingLeft: 5,
            paddingRight: 0,
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '18 Tahun',
            loading: false,      
            data: [],      
            error: null,
        }
        this.arrayholder = [];
    }

      componentDidMount() {
        this.props.dispatch(fetchHeroes());
    }
    
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <View>
            <ListItem><Text style={{color:'black', top:10}}>{item.name}</Text></ListItem>
        </View>
      );

      makeRemoteRequest = () => {    
        const url = `http://192.168.0.31:5000/api/heroes/`;
        this.setState({ loading: true });
        fetch(url)      
          .then(res => res.json())      
          .then(res => {        
            this.setState({          
              data: res.results,          
              error: res.error || null,          
              loading: false,        
            });        
           this.arrayholder = res.results;      
         })      
         .catch(error => {        
           this.setState({ error, loading: false });      
         });  
      };  

      searchFilterFunction = text => {    
        const newData = this.arrayholder.filter(item => {      
          const itemData = `${item.name.title.toUpperCase()}   
          ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ data: newData });  
      };  
      

    render(){
        return(
            <Container>

                <Item rounded style={{top:20}}>
                    <Icon name="ios-search" />
                    <Input onChangeText={text => this.searchFilterFunction(text)}
                     autoCorrect={false} placeholder="Search" />
                </Item>
            
                <FlatList
                        data={this.props.heroes}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />                   

                <Fab style={{ backgroundColor: 'green' }}
                    onPress={() => this.props.navigation.navigate('Todo')}>
                    <Icon type="FontAwesome" name="plus" style={{ backgroundColor: 'green' }}/>
                </Fab>

             </Container>
            
        );
    }
}
const mapStateToProps = (state) => {
    return{
        heroes : state.heroes.heroes
    }
}
export default connect(mapStateToProps)(Main);

