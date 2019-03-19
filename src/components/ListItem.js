import React, {Component} from 'react'
import {Text} from 'react-native'
import CardSection from './common/CardSection'

class ListItem extends Component {
    render(){
        return (
            <CardSection >
                <Text style={styles.textStyle}>{this.props.library.title}</Text>
            </CardSection>
        )
    }
}


const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 10,
    }
}
export default ListItem