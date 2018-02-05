import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Products from './page-Products';
import Page_ProductView from './page-ProductView';

class PagesRouter extends React.Component {          
    render() {  
        return (
            <div>
                <Route path="/" exact component={Page_Products} />
                <Route path="/product/:clid" component={Page_ProductView} />
            </div>
        );      
    }  
};
      
export default PagesRouter;
      