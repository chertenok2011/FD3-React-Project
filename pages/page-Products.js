import React from 'react';

import Main from '../components/main/main';
import appData from '../appData';

class Page_Products extends React.PureComponent {    
    render() {
        return (
            <Main products={appData.products} defCounter={appData.defCounter} />
        );
    }
};

export default Page_Products;