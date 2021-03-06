import React from 'react';
import Title from './Title'

export default class Header extends React.Component {
    handleChange (e){
        let title = e.target.value;
        this.props.changeTitle(title);
    }


    render() {
        return (
    <div>
    <Title title={this.props.title}/>
    <input onChange={this.handleChange.bind(this)}/>
    </div>
    );

    }
}