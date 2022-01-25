import { text } from "../static/data/text";

const SET_LANGUAGE = 'SET_LANGUAGE';

export const initialState = {
    language: 'EN',
    textData: text.EN
};

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    language
});

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LANGUAGE: return {
            ...state,
            language: action.language,
            textData: text[action.language]
        };
        default: return state;
    }
};