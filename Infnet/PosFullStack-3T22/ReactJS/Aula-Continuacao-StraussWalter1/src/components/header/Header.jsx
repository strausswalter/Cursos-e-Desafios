import React, { Component } from 'react';

class Header extends Component{
    verificar = true;
    textoGeral = 'hahaha'
    timer = null;

    constructor(props){
        super(props);
        this.state = {
            name1: "Tiago Silva",
            name2: "Marcelo",
            name3: "Maria"
        }
        this.changeNames = this.changeNames.bind(this);
    }

    componentDidMount(){
        this.changeNames();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    generateText(){
        this.textoGeral = 'alterado';
    }

    changeNames(){
        this.setState({name1: "João", name2: "Junior"})
        console.log("Fiz a mudança")
    }

    formatName(name){
        this.props.func();
        return name.replace(" ", "-")
    }
    
    render(){
        this.generateText();
        const texto = "Olá mundo";
        if(this.verificar){
            return (
                <header>
                    <h2>{texto} {this.state.name1} - {this.state.name2} - {this.state.name3} no cabeçalho {this.textoGeral} verdade {this.formatName("Tiago Silva")}</h2>
                    <p>Olá {this.props.name}</p>
                    <button onClick={this.changeNames}>Mudar nomes</button>
                </header>
            )
        }else{
            return <h2>{texto} no cabeçalho {this.textoGeral} mentira</h2>
        }
    }
}

Header.defaultProps = {
    name: "",
    func: () => {}
}

export default Header;