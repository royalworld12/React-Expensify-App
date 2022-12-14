import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { editExpense,removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit=(expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/')
    }

    remove=() => {
        this.props.removeExpense({id : this.props.expense.id});
        this.props.history.push('/')
     }

    render(){
        console.log(this.props)
        return (
            <div>
            <ExpenseForm 
            expense = {this.props.expense}
            onSubmit={this.onSubmit}/>
      <button onClick={this.remove}>Remove</button>
       </div>
        )
    }


}

const mapStateToProps = (state,props) => {
return {
    expense : state.expenses.find((expense) => {
        return expense.id === props.match.params.id
    })
}
}

const mapDispatchToProps = (dispatch) => ({
    editExpense : (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense : (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);