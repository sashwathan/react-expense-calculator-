import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    var {dispatch } = useContext(AppContext);
    const setAction = (event) =>{
        console.log(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
        
    }
    return (
        <select className="form-select form-select-lg mb-3 alert alert-success" id="inputGroupSelect01" style={{color:'white'}} onChange={(event) => setAction(event)}>
            <option defaultValue value="£" name="Pound">£ Pound</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
        </select>
    )
};
export default Currency;