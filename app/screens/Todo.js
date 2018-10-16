import React, { Component } from 'react'
import { FlatList, Alert } from 'react-native';
import {Container, Content, Text, Input, View} from 'native-base'
import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import { fetchHeroes, createHeroes } from '../components/actions/heroes';

class Todo extends Component {

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
        console.log(this.props.heroes);
        return(

    <Container>
        <Content>
            <Text>Todo App</Text>
            <Input 
                placeholder="Ini" value={this.state.value}
                onChangeText={(name) => this.setState({name})}
            />
            <Button style={{backgroundColor:'green'}} 
            title="TAMBAH"
             onPress={() => Alert.alert(
            'Berhasil!',
            'Data berhasil di masukkan ke database.',
            [
                {text: 'OK', onPress: () => this.Next( this.setState({
                    value : ''
                }))}
            ])}
            >   
            </Button>

        </Content>
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