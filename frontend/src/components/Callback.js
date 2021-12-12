import React from "react"
import { useState } from "react"
import axios from 'axios'
import { items } from "./utils/items";
import './../App.css';
var arr=[];
var res=[{
    "Name": "shrimp &amp; cilantro ceviche",
    "Nutrient": "vitamin_a",
    "Veg_Non": "veg",
    "Price": 300,
    "Diet": " ketogenic_diet",
    "Disease": " anemia goitre",
    "description": "prawns, gherkin, onion, cilantro, mix bell pepper, tiger milk, sweet corn, sea salt, black pepper, green lemon juice, cherry tomato, edible flower, coriander stems, celery stalks, garlic, ginger, red onion, lemon juice, sea salt, black pepper"
},
{
    "Name": "spicy watermelon soup",
    "Nutrient": "vitamin_a",
    "Veg_Non": "veg",
    "Price": 300,
    "Diet": " ketogenic_diet",
    "Disease": " anemia goitre",
    "description": "prawns, gherkin, onion, cilantro, mix bell pepper, tiger milk, sweet corn, sea salt, black pepper, green lemon juice, cherry tomato, edible flower, coriander stems, celery stalks, garlic, ginger, red onion, lemon juice, sea salt, black pepper"
},
{
    "Name": "homemade gulab jamun",
    "Nutrient": "vitamin_a",
    "Veg_Non": "veg",
    "Price": 300,
    "Diet": " ketogenic_diet",
    "Disease": " anemia goitre",
    "description": "prawns, gherkin, onion, cilantro, mix bell pepper, tiger milk, sweet corn, sea salt, black pepper, green lemon juice, cherry tomato, edible flower, coriander stems, celery stalks, garlic, ginger, red onion, lemon juice, sea salt, black pepper"
}];
// const submitForm=()=>{
    
// }
export default function Callback() {
    const getFormattedName = (value) => `${value}`;

    const [checked, setChecked] = useState([]);
    
    const [checkedState, setCheckedState] = useState(
        new Array(items.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        var i = 0;
        const elements = updatedCheckedState.filter((currentState, index) => {
            if (currentState === true) {
                arr[i]=items[index].value;
                i++;
                console.log(items[index].value);
            }
            return 0;
        });
        console.log(arr);
        // arr=elements;
        setCheckedState(updatedCheckedState);
    };

    const submitForm = () => {
        const article = JSON.stringify(arr);
        console.log("e:",article);

        axios.post('http://localhost:8000/getFood/', article)
        .then(response => {
            // res=response.data;
            console.log(response.data[0]["Name"]);
        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });

    }

    return (
        <div className="App">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    {items.map(({ name, value }, index) => {
                        return (
                            <li key={index}>
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={value}
                                        value={value}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    {getFormattedName(name)}
                                </div>
                            </li>
                        );
                    })}
                    <button class="button-34" role="button"  onClick={() => submitForm()}>Submit</button>
                    <div>
                        {
                            res.map((items =>
                                <th key="">
                                    {items.Name}
                                </th>
                            ))
                        }
            </div>
            </div>
            </div>
            
        </div>
    );
}