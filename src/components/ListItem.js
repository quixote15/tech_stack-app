import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import CardSection from './common/CardSection';
import * as actions from '../actions';
import {connect} from 'react-redux'


class ListItem extends Component {

    renderDescription(){
        const {library, expended}  = this.props
        if(expended)
            return <Text>{library.description}</Text>
    }
    
    render(){
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection >
                        <Text style={styles.textStyle}>{title}</Text>
                    </CardSection>

                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 10,
    }
}

const mapStatetoProps = (state, ownProps) => {
    const expended = ownProps.library.id === state.selectedLibraryId;
    return {expended}
}

export default connect(mapStatetoProps, actions)(ListItem)