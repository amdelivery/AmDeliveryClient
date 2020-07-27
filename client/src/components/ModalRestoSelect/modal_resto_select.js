import React, {Component} from 'react';
import './modal_resto_select.sass';
import './modal_resto_select_mqueries.sass';
import {connect} from 'react-redux';
import {changeCurResto} from '../../actions/itemActions.js';



class ModalRestoSelect extends Component {
     constructor(props) {
         super(props);
         this.state = {
             chosenResto: ""
         }
     }

     

     setResto(e) {
         this.setState({
             chosenResto: e.target.value
         })
     }

     render() {

        return (
            <div className="modal-resto-select">      
                
                    
                    <form className="modal-resto-select-form">
                        <h3>На нашем сайте вы можете оформить предзаказ в ресторане KFC!</h3>
                        <h3>Выберите ресторан, в котором хотите оформить предзаказ:</h3>
                        <select value={this.state.chosenResto} onChange={(e) => this.setResto(e)}>
                            <option selected>Выберите ресторан</option>
                            {this.props.allResto.map(rest => (rest.name === "Admin" || rest.name === "Ресторан не выбран") ? null : (<option key={rest.name} value={rest.name}>{rest.name} ({rest.adress})</option>))}
                        </select>
                        <button className="modal-resto-select-form__button" onClick={(e) => {
                            e.preventDefault();
                            this.props.changeCurResto(this.state.chosenResto);
                        }}>Сохранить выбор</button>
                    </form>
                    
            </div>
            
        )
     }

     
    
}

const mapStateToProps = ({allResto}) => {
    return {
        allResto
    }
}


export default connect(mapStateToProps, {changeCurResto})(ModalRestoSelect);
