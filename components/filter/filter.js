import React from 'react';
import PropTypes from 'prop-types';

import './filter.less';

class Filter extends React.PureComponent {
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
        cbFilter: PropTypes.func.isRequired
    }

    state = {
        products: this.props.products,
        defaultFilter: this.props.products
    }

    filter = (EO) => {
        var defFilter = this.state.defaultFilter.slice();
        var filter = EO.target.value;
        var filterList = [];
        if (filter) {
            defFilter.forEach(function (item) {
                if (item.name.toLowerCase().indexOf(filter) != -1) {
                    filterList.push({
                        name: item.name,
                        url: item.url,
                        code: item.code,
                        count: item.count,
                        description: item.description,
                        remainder: item.remainder
                    });
                }
            });
            this.props.cbFilter(filterList);
        } else {
            filterList = defaultFilter.slice();
            this.props.cbFilter(filterList);
        }
    }

    render() {
        return (
            <p>
                <span>Поиск:</span>
                <input className='search form-control' placeholder='Введите название модели' onChange={this.filter} />
            </p>
        )
    }
};

export default Filter;