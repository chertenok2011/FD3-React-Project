import React from 'react';
import PropTypes from 'prop-types';
import Bootstrap from 'react-bootstrap';

import './product.less';

class Product extends React.PureComponent {

    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
        count: PropTypes.number,
        description: PropTypes.string.isRequired,
        remainder: PropTypes.number,
        //workMode: PropTypes.number.isRequired,
        //cbEditItem: PropTypes.func.isRequired,
        //cbDeletedItem: PropTypes.func.isRequired
    }

    // editItem = (EO) => {
    //     this.props.cbEditItem(this.props.code, this.props.name, this.props.url, this.props.description, this.props.count, this.props.remainder);
    // }

    // deleteItem = (EO) => {
    //     this.props.cbDeletedItem(this.props.code);
    // }

    render() {
        return (
            <div className='product-column'>
                <div className='product-wrapper'>
                    <div className='product-head'>
                        <img alt='lenovo' src={this.props.url} />
                        <h4 className='product-name' >{this.props.name}</h4>
                    </div>
                    <div className='product-body'>
                        <p className='product-description'>
                            <span>{this.props.description}</span>
                        </p>
                    </div>
                    <div className='product-footer'>
                        <h4 className='product-count'>
                            <span className='bold'>Цена: </span>
                            <span>{this.props.count}</span>
                            <span>$</span>
                        </h4>
                        <p className='product-remainder'>
                            <span className='bold'>Осталось на складе: </span>
                            <span>{this.props.remainder}</span>
                        </p>
                    </div>
                    <div className='product-buttons'>
                        <button className='button btn' onClick={this.detailsItem}>Подробнее</button>
                        <button className='button btn ' onClick={this.addCart}>В корзину</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Product;