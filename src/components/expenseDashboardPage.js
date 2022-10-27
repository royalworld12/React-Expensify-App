import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter';


const expenseDashboardPage = () => (
    <div>
        <ExpenseListFilter/>
        <ExpenseList />
    </div>
)

export default expenseDashboardPage;