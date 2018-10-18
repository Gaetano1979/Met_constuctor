import React from 'react';

class App extends React.Component{
    constructor(){
        super()
        this.state= {mensaje:'Bienvenido al metodo constructor'}
        console.log('prima fase del constructor');
        
    }

    render(){
        console.log('tercera Fase: Metodo Render');
        
        let nuemero1=500;
        let numero2=450;
        let resultado=nuemero1*numero2;
        return(
            <div>
                <h1>{this.state.mensaje}</h1>
                <div>
                    <h3>El valor de la moltiplicazione es:{resultado}</h3>
                </div>
            </div>
        )
    }

    componentWillMount(){
        console.log('Bienvenido en componentWillMount');
        console.log('Segunda Fase: Metodo componentWillMount');        
    }
    componentDidMount(){
        console.log('Cuarta Fase: Metodo componentDidMount');
        this.setState({mensaje:'Bienvendido al metodo componentDidMount'})
        
    }
}

export default App;