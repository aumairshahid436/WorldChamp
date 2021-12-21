import * as ActionTypes from "shared"

const { SET_YEAR, SET_PAGE_SIZE, SET_PAGE, SET_TOTAL_PAGES, NEXT_PAGE, PREVIOUS_PAGE } = ActionTypes;

const INITIAL_STATE = {
    selectedYear: 2005,
    page: 1,
    pageSize: 5,
    totalPages: 1
};


export const appReducer = (
    state = INITIAL_STATE,
    action: {
        type: string
        payload?: any;
    }
) => {
    switch (action.type) {
        case SET_YEAR:
            return {
                ...state,
                selectedYear: action.payload,
                page: 1
            };
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload,
                page: 1
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: Math.ceil(action.payload / state.pageSize)
            };
        case NEXT_PAGE: {
            const page = state.page + 1;
            if (page <= state.totalPages) {
                return {
                    ...state,
                    page
                };
            };
            return state;
        }
        case PREVIOUS_PAGE: {
            const page = state.page - 1;
            if (page > 0) {
                return {
                    ...state,
                    page
                };
            };
            return state;
        }
        default:
            return state;
    }
};
