import React, {Component} from 'react';
import './menu_list.sass';
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
        window.addEventListener('scroll', this.setTopOffset)
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
                <div className={(this.state.topOffset > 350) ? "menu-list__categories_fixed" : "menu-list__categories_fixed hidden"}>
                    {this.props.categories.map(cat => {
                        const id = `#${cat.name}`;
                        const renderedItem = (cat.name !== "Без категории") ? (
                            <a className="menu-list__categories__link" key={cat._id} href={id}>{(cat.name === "Без категории") ? null : cat.name}</a>
                        ) : null;
                        return renderedItem;
                    })}
                </div>
                <div className="menu-list__categories">
                    {this.props.categories.map(cat => {
                        const id = `#${cat.name}`;
                        const renderedItem = (cat.name !== "Без категории") ? (
                            <a className="menu-list__categories__link" key={cat._id} href={id}>{(cat.name === "Без категории") ? null : cat.name}</a>
                        ) : null;
                        return renderedItem;
                    })}
                </div>
                <div className="menu-list__block">
                    <MenuListBlock/>
                </div>
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