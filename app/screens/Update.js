import React, { Component } from 'react'
import { FlatList, Alert } from 'react-native';
import {Container, Content, Text, Input, View, Item, Footer, FooterTab, Button} from 'native-base'

import { connect } from 'react-redux';
import { updateHeroes } from '../components/actions/heroes';

class Update extends Component {

    static navigationOptions = {
        title: 'UPDATE',
        headerTitleStyle :{ textAlign: 'center', flexGrow: 1, color:'white'},
        headerTintColor: 'white',
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
            name: this.props.navigation.state.params.name,
            age: '18 Tahun',
        };
      }
    
      Next = (id) => {
          this.props.dispatch(updateHeroes(id, this.state)).then((err, res) =>{
              this.props.navigation.popToTop()
          })
      }

    render(){
        const data = this.props.navigation.state.params;

        return(

    <Container>
        <Content style={{top:20}}>
           
            <Item>
                <Input value ={this.state.name} onChangeText={(text) => this.setState({name: text})} />
            </Item>
        </Content>
        <Button block style={{backgroundColor: 'green', bottom: 0}} onPress={() => this.Next(data._id)}>
                <Text>UPDATE</Text>
        </Button>
    </Container>
    
     );
    }
}

const mapStateToProps = (state) => {
    return{
        heroes : state.heroes.heroes
    }
}
export default connect(mapStateToProps)(Update);