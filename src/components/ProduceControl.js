import React from "react";
import ProduceSelection from "./ProduceSelection";

const availableProduce = [  
  {  
     month: "January",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  },
  {  
     month: "February",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "March",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "April",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Garlic",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "May",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Cauliflower",
        "Garlic",
        "Lettuce",
        "Potatoes",
        "Radishes"
     ]
  },
  {  
     month: "June",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Blackberries",
        "Cherries",
        "Raspberries",
        "Strawberries",
        "Asparagus",
        "Broccoli",
        "Cauliflower",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash"
     ]
  },
  {  
     month: "July",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Raspberries",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "August",
     selection: [  
        "Apples",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Rhubarb",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "September",
     selection: [  
        "Apples",
        "Blueberries",
        "Grapes",
        "Melons",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "October",
     selection: [  
        "Apples",
        "Grapes",
        "Hazelnuts",
        "Melons",
        "Peaches",
        "Pears",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Pumpkins",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "November",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "December",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
       "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  }
];

class ProduceControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      month: "january"
    }
  }

  clickJanuary = () => {
    this.setState(() => ({
      month: "january"
    }));
  }

  clickFebruary = () => {
    this.setState(() => ({
      month: "february"
    }));
  }

  clickMarch = () => {
    this.setState(() => ({
      month: "march"
    }));
  }

  clickApril = () => {
    this.setState(() => ({
      month: "april"
    }));
  }

  clickMay = () => {
    this.setState(() => ({
      month: "may"
    }));
  }

  clickJune = () => {
    this.setState(() => ({
      month: "june"
    }));
  }

  clickJuly = () => {
    this.setState(() => ({
      month: "july"
    }));
  }

  clickAugust = () => {
    this.setState(() => ({
      month: "august"
    }));
  }

  clickSeptember = () => {
    this.setState(() => ({
      month: "september"
    }));
  }

  clickOctober = () => {
    this.setState(() => ({
      month: "october"
    }));
  }

  clickNovember = () => {
    this.setState(() => ({
      month: "november"
    }));
  }

  clickDecember = () => {
    this.setState(() => ({
      month: "december"
    }));
  }
  
render(){
  let monthSchedule = null;
  if (this.state.month === "january"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[0]["month"]}
                    selection={availableProduce[0]["selection"]}/>
  } else if (this.state.month === "february"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[1]["month"]}
                    selection={availableProduce[1]["selection"]}/>
  } else if (this.state.month === "march"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[2]["month"]}
                    selection={availableProduce[2]["selection"]}/>
  } else  if (this.state.month === "april"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[3]["month"]}
                    selection={availableProduce[3]["selection"]}/>
  } else  if (this.state.month === "may"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[4]["month"]}
                    selection={availableProduce[4]["selection"]}/>
  } else  if (this.state.month === "june"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[5]["month"]}
                    selection={availableProduce[5]["selection"]}/>
  } else  if (this.state.month === "july"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[6]["month"]}
                    selection={availableProduce[6]["selection"]}/>
  } else  if (this.state.month === "august"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[7]["month"]}
                    selection={availableProduce[7]["selection"]}/>
  } else  if (this.state.month === "september"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[8]["month"]}
                    selection={availableProduce[8]["selection"]}/>
  } else  if (this.state.month === "october"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[9]["month"]}
                    selection={availableProduce[9]["selection"]}/>
  } else  if (this.state.month === "november"){
    monthSchedule = <ProduceSelection
                    month={availableProduce[10]["month"]}
                    selection={availableProduce[10]["selection"]}/>
  } else {
    monthSchedule = <ProduceSelection
                    month={availableProduce[11]["month"]}
                    selection={availableProduce[11]["selection"]}/>
  }
  
  return(
    <React.Fragment>   
      {monthSchedule}
      <button onClick={this.clickJanuary}>January</button>
      <button onClick={this.clickFebruary}>February</button>
      <button onClick={this.clickMarch}>March</button>
      <button onClick={this.clickApril}>April</button>
      <button onClick={this.clickMay}>May</button>
      <button onClick={this.clickJune}>June</button>
      <button onClick={this.clickJuly}>July</button>
      <button onClick={this.clickAugust}>August</button>
      <button onClick={this.clickSeptember}>September</button>
      <button onClick={this.clickOctober}>October</button>
      <button onClick={this.clickNovember}>November</button>
      <button onClick={this.clickDecember}>December</button>
    </React.Fragment>
  );
};
}

export default ProduceControl;