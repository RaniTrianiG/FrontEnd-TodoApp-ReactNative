import React from 'react'
import {Container, Content, Text, Input} from 'native-base'
import { Button } from 'react-native-elements'

class Todo extends Component {

    render(){
        return(

    <Container>
        <Content>
            <Text>Todo</Text>
            <Input placeholder="Ini"/>
            <Button style={{backgroundColor:'green'}} title='TAMBAH'/>
        </Content>
    </Container>
    
     );
    }
}
export default Todo;