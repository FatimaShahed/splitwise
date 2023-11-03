import React from 'react';

const initialState = {
    Login: {
        userId:'',
        login:false
    },

    Users : [
        {
            id:1,
            email:'123@gmail.com',
            name:'abc',
            pendingAmount:0,
            ownedAmount:0,
            enteredAmount:0
        },
        {
            id:2,
            email:'123@gmail.com',
            name:'abc',
            pendingAmount:0,
            ownedAmount:0,
            enteredAmount:0


        },
        {
            id:3,
            email:'123@gmail.com',
            name:'abc',
            pendingAmount:0,
            ownedAmount:0,
            enteredAmount:0


        },
        {
            id:4,
            email:'123@gmail.com',
            name:'abc',
            pendingAmount:0,
            ownedAmount:0,
            enteredAmount:0


        },
        {
            id:5,
            email:'123@gmail.com',
            name:'abc',
            pendingAmount:0,
            ownedAmount:0,
            enteredAmount:0


        }

    ],
    Group : []
}
const Functions = (state=initialState,action) =>
{
    switch (action.type) {

        case "setLogin": {

            return {
                ...state, Login: {...state.Login, userId: action.payload, login: true}

            }
        }

        case "setEnteredAmount": {
            const userToAdd = state.Group.find((user) => user.id === action.payload.userId);
            const updatedGroup = state.Group.map((item) => {

                     return { ...item, enteredAmount: action.payload.amount };

             });

            return { ...state, Group: updatedGroup };

        }

        case "addInGroup": {

            const userToAdd = state.Users.find((user) => user.id === action.payload);
            if (userToAdd)
            {
                const updatedArr = [...state.Group, userToAdd];
                return {...state, Group: updatedArr};
            }
            return state;
        }

        case "paidByOne": {

            let avg=action.payload.amount/state.Group.length;
            const loggedInUser = state.Users.find((user) => user.id === action.payload.userId)
            const enteredAmount = loggedInUser.enteredAmount
            const newArray = state.Group.map((element, index, array) =>{

                    if(avg-element.enteredAmount<0)
                    {
                        element.pendingAmount=0
                        element.ownedAmount= enteredAmount-avg

                    }
                    else
                    {
                        element.pendingAmount = avg - element.enteredAmount
                        element.owneedAmount=0

                    }


                return element

            });

            const updatedGroup = state.Group.map((item) => {

                    return { ...item, pendingAmount: newArray.find(item).pendingAmount, ownedAmount: newArray.find(item).ownedAmount};

            });

            return {...state, Group: updatedGroup};
         }

        case "paidByMultiple": {

            let avg=action.payload.amount/state.Group.length;
            const loggedInUser = state.Users.find((user) => user.id === action.payload.userId)
            const enteredAmount = loggedInUser.enteredAmount
            const newArray = state.Group.map((element, index, array) =>{

                if(avg-element.enteredAmount<0)
                {
                    element.pendingAmount=0
                    element.ownedAmount=enteredAmount-avg
                }
                else if(avg===element.enteredAmount)
                {
                    element.pendingAmount=0
                    element.ownedAmount=0
                }
                else
                {
                    element.pendingAmount = avg-element.enteredAmount
                    element.ownedAmount=0
                }

                return element

            });

            const updatedGroup = state.Group.map((item) => {

                return { ...item, pendingAmount: newArray.find(item).pendingAmount, ownedAmount: newArray.find(item).ownedAmount};

            });

            return {...state, Group: updatedGroup};
        }





        default:
            return initialState
    }
}

export default Functions