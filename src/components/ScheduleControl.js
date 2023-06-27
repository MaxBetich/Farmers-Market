import React from "react";
import Schedule from  "./Schedule";

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: "sunday"
    }
  }

  clickSunday = () => {
    this.setState(() => ({
      day: "sunday"
    }));
  }

  clickMonday = () => {
    this.setState(() => ({
      day: "monday"
    }));
  }

  clickTuesday = () => {
    this.setState(() => ({
      day: "tuesday"
    }));
  }
  
  clickWednesday = () => {
    this.setState(() => ({
      day: "wednesday"
    }));
  }

  clickThursday = () => {
    this.setState(() => ({
      day: "thursday"
    }));
  }

  clickSaturday = () => {
    this.setState(() => ({
      day: "saturday"
    }));
  }

  render(){ 
    let currentDaySchedule = null;
    if (this.state.day === "sunday") {
      currentDaySchedule = <Schedule
                            day={marketSchedule[0]["day"]}
                            location={marketSchedule[0]["location"]}
                            hours={marketSchedule[0]["hours"]}
                            booth={marketSchedule[0]["booth"]}/>
    } else if (this.state.day === "monday") {
      currentDaySchedule = <Schedule
                            day={marketSchedule[1]["day"]}
                            location={marketSchedule[1]["location"]}
                            hours={marketSchedule[1]["hours"]}
                            booth={marketSchedule[1]["booth"]}/>
    } else if (this.state.day === "tuesday") {
      currentDaySchedule = <Schedule
                            day={marketSchedule[2]["day"]}
                            location={marketSchedule[2]["location"]}
                            hours={marketSchedule[2]["hours"]}
                            booth={marketSchedule[2]["booth"]}/>
    } else if (this.state.day === "wednesday") {
      currentDaySchedule = <Schedule
                            day={marketSchedule[3]["day"]}
                            location={marketSchedule[3]["location"]}
                            hours={marketSchedule[3]["hours"]}
                            booth={marketSchedule[3]["booth"]}/>
    } else if (this.state.day === "thursday") {
      currentDaySchedule = <Schedule
                            day={marketSchedule[4]["day"]}
                            location={marketSchedule[4]["location"]}
                            hours={marketSchedule[4]["hours"]}
                            booth={marketSchedule[4]["booth"]}/>
    } else {
      currentDaySchedule = <Schedule
                            day={marketSchedule[5]["day"]}
                            location={marketSchedule[5]["location"]}
                            hours={marketSchedule[5]["hours"]}
                            booth={marketSchedule[5]["booth"]}/>
    }
    return(
      <React.Fragment>   
        {currentDaySchedule}
        <button onClick={this.clickSunday}>Sunday</button>
        <button onClick={this.clickMonday}>Monday</button>
        <button onClick={this.clickTuesday}>Tuesday</button>
        <button onClick={this.clickWednesday}>Wednesday</button>
        <button onClick={this.clickThursday}>Thursday</button>
        <button onClick={this.clickSaturday}>Saturday</button>
      </React.Fragment>
    );
  }
}
export default ScheduleControl;

