import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import React from "react";

class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render(){
    return (
      <div>
          <input type="text" value={this.props.filters.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }}/>
          <select onChange={(e) => {
            if(e.target.value === "date"){
              this.props.dispatch(sortByDate());
            } else {
              this.props.dispatch(sortByAmount());
            }
          }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate} // Accepts moment object
            startDateId={"fluffykins"}
            endDateId={"fluffykins"}
            endDate={this.props.filters.endDate} // Accepts moment object
            onDatesChange={this.onDatesChange} // passes startDate and endDate to function, to set new state.
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange} // Sets focus state to calendarFocused state.
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => { // This lets us determine what aspects of the redux state we want to pass in.
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilter);