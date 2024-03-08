import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    let spent = budget - remaining;
    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;
        if(inputValue > 20000)
            window.alert(`The value cannot exceed remaining funds ${remaining}`);
        else if(inputValue < spent)
            window.alert("you cannot reduce the budget value lower than the spending");
        else{
            setNewBudget(inputValue);
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;