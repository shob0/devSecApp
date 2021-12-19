export const HANDLE_INPUT_TEXT = 'HANDLE_INPUT_TEXT';

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT_TEXT':
            return {
                ...state,
                [action.field]: action.payload,
            }
        
        default:
            return state;
    }
}

