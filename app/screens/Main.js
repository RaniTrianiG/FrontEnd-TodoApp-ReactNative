import React, { Component } from 'react';
import { ListView, StyleSheet, FlatList, Button, View } from 'react-native';
import { Container, ListItem, Item, Input, Icon, Text, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';

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

    render(){
        return(
            <Container>

                <Item rounded style={{top:20}}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
            
                <FlatList data={[{key: 'ranitriani23'}, {key: 'Programmer'}, {key: 'React'}, {key: 'Native'}]}
                            renderItem={({item}) => <ListItem><Text style={{color:'black', top:10}}>{item.key}</Text></ListItem>} />

                <Fab style={{ backgroundColor: 'green' }}
                    onPress={() => this.props.navigation.navigate('Todo')}>
                    <Icon type="FontAwesome" name="plus" style={{ backgroundColor: 'green' }}/>
                </Fab>
                {/* <View>
                    <Button title="Tambah" 
                    onPress= {() => this.props.navigation.navigate('Todo')} />
                </View> */}

             </Container>
            
        );
    }
}
export default withNavigation (Main);

