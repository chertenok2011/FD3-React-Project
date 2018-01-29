import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../../less/custom.less';
import './main.less';

import Products from '../products/products';
import Filter from '../filter/filter';

var defCounter = 1;
var listArr = require('../../products.json');

for (var i = 0; i < listArr.length; i++) {
    listArr[i].code = defCounter++
}

class Main extends React.PureComponent {

    state = {
        listProducts: listArr,
        defCounter: defCounter
    }

    filter = (filterList) => {
        this.setState({ listProducts: filterList });
    }

    render() {

        return (
            <div className="main-container">
                <header>
                    <div className='header-wrapper'>
                        <div className='header-wrapper-title'>
                            <h3>Ноутбуки и ультрабуки Lenovo</h3>
                        </div>
                        <div className="header-wrapper-cart btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Корзина <span className="caret"></span></button>
                            <div className="dropdown-menu" role="menu">

                            </div>
                        </div>
                        <div className='header-wrapper-search'>
                            <Filter products={this.state.listProducts} cbFilter={this.filter} />
                        </div>
                    </div>
                </header>
                <div className='main-wrapper'>
                    <main>
                        <div className='image-container'>
                            <img src='../../images/yoga-910-gold-898x793.png' />
                        </div>
                        <div className='products-container'>
                            <Products products={this.state.listProducts} startWorkMode={0} defCounter={this.state.defCounter} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
};

export default Main;