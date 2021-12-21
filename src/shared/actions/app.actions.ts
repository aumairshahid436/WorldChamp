// reducer actions
import { NEXT_PAGE, PREVIOUS_PAGE, SET_PAGE, SET_PAGE_SIZE, SET_TOTAL_PAGES, SET_YEAR } from "../";

export const setYear = (payload: number) => ({ type: SET_YEAR, payload });
export const setPageSize = (payload: number) => ({ type: SET_PAGE_SIZE, payload });
export const setPage = (payload: number) => ({ type: SET_PAGE, payload });
export const setTotalPages = (payload: number) => ({ type: SET_TOTAL_PAGES, payload });
export const setNextPage = () => ({ type: NEXT_PAGE });
export const setPreviousPage = () => ({ type: PREVIOUS_PAGE });