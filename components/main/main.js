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
        defCounter: PropTypes.number.isRequired,
        card: PropTypes.array.isRequired
    };

    state = {
        stateProducts: this.props.products,
        defCounter: this.props.defCounter,
        filter: '',
        card: this.props.card
    }

    filter = (filterList, filter) => {
        this.setState({
            stateProducts: filterList.slice(),
            filter: filter
        });
    }

    card = (product) => {
        console.log(product);

    }

    render() {
        return (
            <div className='main-wrapper'>
                <main>
                    <div className='image-container'>
                        <img src='../../images/yoga-910-gold-898x793.png' />
                    </div>
                    <div className='search-container'>
                        <Filter products={this.state.stateProducts} cbFilter={this.filter} />
                    </div>
                    <div className='products-container'>
                        {
                            (this.state.stateProducts != 0) &&
                            <Products products={this.state.stateProducts} defCounter={this.state.defCounter} cbCard={this.card}/>
                        }
                        {
                            (this.state.stateProducts == 0) &&
                            <div className='products-not-found'>Не найдены продукты с название "{this.state.filter}"</div>
                        }
                    </div>
                </main>
            </div>
        );
    }
};

export default Main;