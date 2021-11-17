import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker
        onSelectedChange={date => setSelectedDate(date)}
        format="DD-MM-YYYY"
        options={{
        backgroundColor: '#FFFFFF',
        textHeaderColor: '#FFA25B',
        textDefaultColor: '#909090',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor: '#909090',
        borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        curren={getToday()}
        mode="calendar"
        style={{
        width: 350,
        height: 325,
        borderRadius: 10 
        }}
    />
  );
};

export default CalendarPicker;