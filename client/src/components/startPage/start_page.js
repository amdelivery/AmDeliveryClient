import React from 'react';
import './start_page.sass';
import {connect} from 'react-redux';
import logo from '../../img/AmD3.jpg';
import {ReactComponent as Spinner} from '../../img/Spinner.svg';
import {getDataFromServer, setCitySelected} from '../../actions/itemActions.js';
import PropTypes from 'prop-types';


const StartPage = ({citySelected, loadingDataIsOver, getDataFromServer, setCitySelected}) => {

      const renderedItem = (citySelected === true && loadingDataIsOver === false) ? <Spinner/> : (
        <div className="startpage__citylist">
            <div className="startpage__citylist__title">Выберите город:</div>
            <div
             className="startpage__citylist__cityname"
             onClick={() => {
                 getDataFromServer();
                 setCitySelected();
             }}
            >Крымск</div>
        </div>
      )

      return (
          <div className="startpage">
              <img className="startpage__logo" src={logo} alt="logo"></img>
              {renderedItem}
          </div>
      )
}

StartPage.propTypes = {
    citySelected: PropTypes.bool.isRequired,
    loadingDataIsOver: PropTypes.bool.isRequired,
    getDataFromServer: PropTypes.func.isRequired,
    setCitySelected: PropTypes.func.isRequired
}

const mapStateToProps = ({citySelected, loadingDataIsOver}) => {
    return {
        citySelected,
        loadingDataIsOver
    }
}




export default connect(mapStateToProps, {getDataFromServer, setCitySelected} )(StartPage);
