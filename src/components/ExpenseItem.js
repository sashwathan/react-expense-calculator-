import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'SUB_EXPENSE',
            payload: expense,
        });
    };

    // CSS styles for the button
    const buttonStyles1 = {
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '50%', // Makes the button round
        width: '30px', // Adjust as needed for the button size
        height: '30px', // Adjust as needed for the button size
        border: 'none',
        cursor: 'pointer',
    };

    const buttonStyles2 = {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%', // Makes the button round
        width: '30px', // Adjust as needed for the button size
        height: '30px', // Adjust as needed for the button size
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button style={buttonStyles1} onClick={() => increaseAllocation(props.name)}>
                    +
                </button>
            </td>
            <td>
            <button style={buttonStyles2} onClick={() => decreaseAllocation(props.name)}>
                    -
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;