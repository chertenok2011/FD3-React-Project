import React from 'react';
import PropTypes from 'prop-types';

import './products.less';

import Form from '../form/form';
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
        //startWorkMode: PropTypes.number.isRequired,
        defCounter: PropTypes.number.isRequired
    };

    state = {
        // selectedCode: null,
        // selectedName: '',
        // selectedUrl: '',
        // selectedDescription: '',
        // selectedCount: null,
        // selectedRemainder: null,
        // workMode: this.props.startWorkMode,
        products: this.props.products,
        counter: this.props.defCounter,
        // errorName: false,
        // errorCount: false,
        // errorDescription: false,
        // errorReminder: false,
        // disableSave: false
    };

    render() {

        var productsMas = this.state.products.map(v =>
            <Product
                key={v.code}
                code={v.code}
                name={v.name}
                url={v.url}
                count={v.count}
                description={v.description}
                remainder={v.remainder}
                //workMode={this.state.workMode}
            />
        );
        //console.log(productsMas);

        return (
            <div className='products-row'>
                {productsMas}
            </div>    
                /* <div className = 'cell'>
                        <Form  
                            workMode = { this.state.workMode }
                            key = { this.props.selectedCode }
                            selectedCode = { this.state.selectedCode }
                            selectedName = { this.state.selectedName }
                            selectedDescription = { this.state.selectedDescription }
                            selectedCount = { this.state.selectedCount }
                            selectedRemainder = { this.state.selectedRemainder }
                            cbNameChanged = { this.nameChanged }
                            cbCountChanged = { this.countChanged }
                            cbDescriptionChanged = { this.descriptionChanged }
                            cbRemainderChanged = { this.remainderChanged }
                            cbSaveItem = { this.saveItem }
                            cbCloseForm = { this.closeForm }
                            errorName = { this.state.errorName }
                            errorCount = { this.state.errorCount }
                            errorDescription = { this.state.errorDescription }
                            errorReminder = { this.state.errorReminder }
                            disableSave = { this.state.disableSave }
                        />
                    </div>                 */
            
            // {/* <div className = 'button-new'>
            //     <button className = 'button' onClick = { this.newItem }>New</button>
            // </div> */}

        );
    }
};

export default Products;