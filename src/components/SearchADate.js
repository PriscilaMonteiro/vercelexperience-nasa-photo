import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

    

function SearchADate () {

  const[selectedDate, setSelectedDate] = useState(null)
  


  return (
    <div>
      Select a Date:
      <DatePicker 
        selected={selectedDate} 
        placeholder="Please select a date between June 20th, 1995 and Present-Day"
        onChange={date => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        maxDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  )
}

export default SearchADate


// const searchDate = new Date()
//     searchDate.toISOString().split('T')[0]