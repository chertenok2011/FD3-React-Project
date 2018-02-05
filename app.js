import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PageHeader from './pages/pageHeader';
import PagesRouter from './pages/pagesRouter';

ReactDOM.render(
    <BrowserRouter>
        <div className="main-container">
            <PageHeader />
            <PagesRouter />
        </div>
    </BrowserRouter>,
    document.getElementById('wrapper')
);