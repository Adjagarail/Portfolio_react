import React, { Component } from 'react';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/competences.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            });
    }
    render(){
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            console.log('Chargement en cours....')
            return(
                <div> Chargement en cours ....</div>
            );
        }
        else{
            console.log(items)
        return(
            <div>
                Données chargées
                <ul>
                    {items.map(item =>(
                        <li key={item.id}>
                            {item.Titre} | <img src={item.Image} alt="" srcSet={item.Image} />
                        </li>
                    ))};
                </ul>
            </div>
        );
        }
    }
}
export default Menu;