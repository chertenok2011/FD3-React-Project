import React from 'react';
import PropTypes from 'prop-types';

import './products.less';

import Product from '../product/product';

class Products extends React.PureComponent {

    static propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string,
                code: PropTypes.number.isRequired,
                count: PropTypes.number,
                description: PropTypes.string.isRequired,
                remainder: PropTypes.number
            })
        ),
        defCounter: PropTypes.number.isRequired,
        cbCard: PropTypes.func.isRequired
    };

    addCard = (code) => {
        let cardProduct = [];
        this.props.products.forEach(function(item) {
            if (item.code == code) {
                cardProduct.push(item);
            }
        });
        this.props.cbCard(cardProduct)
        //console.log(cardProduct);
    }

    render() {
        var productsMas = this.props.products.map(v =>
            <Product
                key={v.code}
                code={v.code}
                name={v.name}
                url={v.url}
                count={v.count}
                description={v.description}
                remainder={v.remainder}
                cbAddCard={this.addCard}
            />
        );

        return (
            <div className='products-row'>
                {productsMas}
            </div>
        );
    }
};

export default Products;