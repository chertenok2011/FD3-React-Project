import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap';

import '../../less/custom.less';
import './header.less';

import Filter from '../filter/filter';

class Header extends React.PureComponent {
    render() {
        return (
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
                    {/* <div className='header-wrapper-search'>
                            <Filter products={this.state.listProducts} cbFilter={this.filter} />
                        </div> */}
                </div>
            </header>
        );
    }
};

export default Header;