import React from 'react';

export const setLogin = (userId) => {
    return {
        type: "setLogin",
        payload: userId
    }

}

export const addToCart = (productId) => {
    return {
        type: "addToCart",
        payload: productId
    }

}