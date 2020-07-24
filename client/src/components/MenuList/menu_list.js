import React, {Component} from 'react';
import './menu_list.sass';
import './menu_list_mqueries.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MenuListBlock from '../MenuListBlock';


class MenuList extends Component  {
      constructor(props) {
          super(props);
          this.state = {
              topOffset: 0
          };
          this.setTopOffset = this.setTopOffset.bind(this);
      }

    componentDidMount() {
        window.addEventListener('scroll', this.setTopOffset);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setTopOffset)
    }

    setTopOffset = () => {
        this.setState({
            topOffset: window.pageYOffset
        })
    }


    

    



    render() {
        return (
            <div className="menu-list">
                
                    <div id="1" className={(this.state.topOffset > 350) ? "menu-list__categories_fixed" : "menu-list__categories_fixed hidden"}>
                        <div className="menu-list__cat-wrapper">
                            {this.props.categories.map(cat => {
                                    const renderedItem = (cat.name !== "Без категории") ? (
                                        <span className="menu-list__categories__link" key={cat._id} onClick={(e) =>{
                                            document.getElementById('1').scrollLeft = e.target.offsetLeft - 140;
                                            window.scrollTo(0, document.getElementById(cat.name).offsetTop - 140)
                                            } }>{(cat.name === "Без категории") ? null : cat.name}</span>
                                    ) : null;
                                    return renderedItem;
                                })}
                        </div>    
                    </div>
                
                
                    <div className="menu-list__categories" >
                        
                            {this.props.categories.map(cat => {
                                    const renderedItem = (cat.name !== "Без категории") ? (
                                        <span className="menu-list__categories__link" key={cat._id} onClick={(e) =>{
                                            window.scrollTo(0, document.getElementById(cat.name).offsetTop - 140);
                                            } }>{(cat.name === "Без категории") ? null : cat.name}</span>
                                    ) : null;
                                    return renderedItem;
                                })}
                        
                        
                    </div>
                
                
                
                <div className="menu-list__block">
                    <MenuListBlock/>
                </div>
                <div className="up"><a href="#root">&#8593; В начало страницы</a></div>
            </div>
        )
    }
    
}

MenuList.propTypes = {
    allItems: PropTypes.array,
    categories: PropTypes.array

}


const mapStateToProps = ({allItems, categories}) => {
      return {
          allItems,
          categories
      }
}

export default connect(mapStateToProps)(MenuList);