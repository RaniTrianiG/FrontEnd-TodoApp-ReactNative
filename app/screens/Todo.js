import React, { Component } from 'react'
import { FlatList, Alert } from 'react-native';
import {Container, Content, Text, Input, View, Item, Footer, FooterTab, Button} from 'native-base'

import { connect } from 'react-redux';
import { fetchHeroes, createHeroes } from '../components/actions/heroes';

class Todo extends Component {

    static navigationOptions = {
        title: 'TODO APP',
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
            name: '',
            age: '18 Tahun',
        };
      }

    componentDidMount() {
        this.props.dispatch(fetchHeroes());
    }
    
      Next = () => {
          this.props.dispatch(createHeroes(this.state));
      }

    render(){
        const heroes = this.props.heroes;
        return(

    <Container>
        <Content style={{top:20}}>
           
            <Item>
                <Input 
                    placeholder="Input text here ..." value={this.state.value}
                    onChangeText={(name) => this.setState({name})}
                />
            </Item>
        </Content>
        <Footer> 
            <FooterTab>
                <Button block style={{backgroundColor:'green'}}
                onPress={() => Alert.alert(
                'Berhasil!',
                'Data berhasil di masukkan ke database.',
                [
                    {text: 'OK', onPress: () => this.Next( this.setState({
                        value : ''
                    }))}
                ])}
                > 
                <Text style={{fontSize:15, color: 'white'}}>ADD</Text>  
                </Button>
            </FooterTab>
        </Footer>
    </Container>
    
     );
    }
}

const mapStateToProps = (state) => {
    return{
        heroes : state.heroes.heroes
    }
}
export default connect(mapStateToProps)(Todo);