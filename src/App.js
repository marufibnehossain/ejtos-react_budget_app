import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
// import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Add Budget component here under */}
                    <div className='col-sm'>
                        <Budget />
                    </div>        
                    {/* Add Remaining component here under */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>    
                    {/* Add ExpenseTotal component here under */}  
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>      
                <div className='row mt-3'>
                    {/* Add ExpenseList component here under */} 
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>        
                {/* Add ExpenseItem component here under */}        
                {/* <div className='col-sm'>
                    <ExpenseItem />
                </div> */}

                {/* Add AllocationForm component here under */}        
                <div className='col-sm'>
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
