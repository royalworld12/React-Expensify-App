import React from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';
import { setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused : null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if(e.target.value === 'date' ){
            this.props.sortByDate();
        } 
        if(e.target.value === 'amount'){
             this.props.sortByAmount();
         }
    }
    render() {
        return (
        <div>
        <input type="text" value={this.props.filters.text}
        onChange={this.onTextChange}></input>
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        focusedInput={this.state.calendarFocused}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        />
    </div>)
    }
}



const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setStartDate : (date) => dispatch(setStartDate(date)),
    setEndDate : (date) => dispatch(setEndDate(date)),
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount())
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);