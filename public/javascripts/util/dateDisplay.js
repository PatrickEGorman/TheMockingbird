import React from 'react'

var x = new Date();
var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
             'November', 'December'];

class DateDisplay extends React.Component {
    render(){
        let month = months[Number(this.props.date.substring(5,7))-1];
        let day = this.props.date.substring(8,10);
        let year = this.props.date.substring(0,4);

        let time = this.props.date.split('T')[1];
        let hour = time.substring(0,2) - currentTimeZoneOffsetInHours;
        hour = (hour< 1)?24-hour:hour;
        let minutes = time.substring(3,5);
        let timeOfDay = (hour>=12)?'PM':'AM';
        hour = (hour > 12)?hour-12:hour;
        return (
            <div>
                <p>{hour}:{minutes} {timeOfDay}
                <br/>
                {month} {day}, {year}</p>
            </div>
        )
    }
}

export default DateDisplay;