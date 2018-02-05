import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './product-view.less';

class ProductView extends React.PureComponent {
    static propTypes = {
        info: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
            code: PropTypes.number.isRequired,
            count: PropTypes.number,
            description: PropTypes.string.isRequired,
            specifications: PropTypes.string.isRequired,
            remainder: PropTypes.number
        })
    };

    render() {
        return (
            <div className='main-product-wrapper'>
                <main>
                    <div className='product-container'>
                        <div className='product-wrapper'>
                            <div className='cell'>
                                <img alt='lenovo' src={this.props.info.url} />
                            </div>
                            <div className='cell'>
                                <div className='product-head'>
                                    <h4 className='product-name' >{this.props.info.name}</h4>
                                </div>
                                <div className='product-body'>
                                    <p className='product-description'>
                                        <span>{this.props.info.description}</span>
                                    </p>
                                    <p className='product-specifications'>
                                        {this.props.info.specifications}
                                    </p>
                                </div>
                                <div className='product-footer'>
                                    <h4 className='product-count'>
                                        <span className='bold'>Цена: </span>
                                        <span>{this.props.info.count}</span>
                                        <span>$</span>
                                    </h4>
                                    <p className='product-remainder'>
                                        <span className='bold'>Осталось на складе: </span>
                                        <span>{this.props.info.remainder}</span>
                                    </p>
                                </div>
                                <div className='product-buttons'>
                                    <button className='button btn' onClick={this.addCart}>В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};

export default ProductView;
