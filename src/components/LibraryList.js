import React, {Component} from 'react';
import {Text,View, FlatList} from 'react-native';
import {connect} from 'react-redux'


class LibraryList extends Component{
   renderItem(library){
        return <ListItem library={library} />
   }

    render(){
        return (
            <FlatList 
                data={this.props.libraries}
                render={this.renderItem}
                key={(library) => library.id}
                 />
        )
    }
}

const mapStatetoProps = (state) => {
    return {libraries: state.libraries}
}

export default connect(mapStatetoProps)(LibraryList);