import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../../less/custom.less';
import './main.less';

import Products from '../products/products';
import Filter from '../filter/filter';

class Main extends React.PureComponent {
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
        defCounter: PropTypes.number.isRequired
    };

    state = {
        products: this.props.products,
        defCounter: this.props.defCounter
    }

    filter = (filterList) => {
        this.state.products = filterList;
        this.setState({ products: this.state.products.slice() }, console.log(this.state.products));
    }

    render() {
        return (
            <div className='main-wrapper'>
                <main>
                    <div className='image-container'>
                        <img src='../../images/yoga-910-gold-898x793.png' />
                    </div>
                    <div className='search-container'>
                        <Filter products={this.state.products} cbFilter={this.filter} />
                    </div>
                    <div className='products-container'>
                        <Products products={this.state.products} defCounter={this.state.defCounter} />
                    </div>
                </main>
            </div>
        );
    }
};

export default Main;