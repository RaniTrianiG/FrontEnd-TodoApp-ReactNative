import React, { Component } from 'react';
import { ListView, StyleSheet, FlatList, Button, View, Alert } from 'react-native';
import { Container, ListItem, Item, Input, Icon, Text, Fab, Header, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import Todo from './Todo';
import { connect } from 'react-redux';
import { fetchHeroes, updateHeroes, deleteHeroes } from '../components/actions/heroes';
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
            val:''
        }
        this.arrayholder = [];
    }

      componentDidMount() { 
        this.props.dispatch(fetchHeroes());
    }
    Next = (id) => {
        this.props.dispatch(deleteHeroes(id));
    }
    
    _keyExtractor = ({_id}, index) => _id;

    _renderItem = ({item, data, index}) => (
        <View>
            <ListItem
                keyExtractor={this._keyExtractor}
                onPress={() => Alert.alert(
                    'Notification!',
                    'Are you sure want to delete this list item ?',
                    [
                        {text: 'DELETE', onPress: () => this.Next(item._id)}
                    ])}
                >
            
                <Text style={{color:'black', top:10}}>{item.name}</Text>
            </ListItem>
        </View>
      );

    render(){
        const searchFilter = this.props.heroes.filter((filter) => {
            return(filter.name.toLowerCase().indexOf(this.state.val.toLowerCase())!==-1)    
        })
        return(
            <Container>
                <Header  searchBar noShadow style={{backgroundColor: null}}>
                    <Item rounded reguler>
                        <Icon name="ios-search" />
                        <Input value={this.state.val} onChangeText={(text)=> this.setState({val:text})} placeholder="Search" />
                    </Item>
                </Header>
                <Content>
                    <FlatList
                            data={searchFilter}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />                   
                </Content>
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

