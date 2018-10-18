import React from 'react';
import Component from '../Props/Component';

class App extends React.Component{
    constructor(){
        super()
        this.state= {mensaje:'Bienvenido al metodo constructor'}
    }

    render(){
        return(
            <div>
                {this.state.mensaje}
            </div>
        )
    }
}

export default App;