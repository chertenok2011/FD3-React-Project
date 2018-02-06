import React from 'react';
import ProductView from '../components/product-view/product-view';
import appData from '../appData';

class Page_Products extends React.PureComponent {
    render() {
        let productId = parseInt(this.props.match.params.clid);
        console.log(this.props.match.params);
        let productData = appData.products.find(c => c.code == productId);

        return (
            <ProductView info={productData} />
        );
    }
};

export default Page_Products;