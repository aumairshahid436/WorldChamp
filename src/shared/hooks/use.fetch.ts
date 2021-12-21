import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from ".";
import { ChampionList, WinnersList, RootState, setTotalPages } from "shared";

interface Props {
    action: (...args: any) => void;
}
interface State {
    isLoading: boolean;
    data: ChampionList[] | WinnersList[];
    total: number;
}

/*
 **** Note ***
 * Created common hook for state management and used in winner and champion components
 * because pattern was same for both component that's why created common hook and use for both component
 * manage data in local state not in global reason we only need data according to view (component) like champion or winner
 */
export default function useFetch({ action }: Props) {
    const dispatch = useDispatch();
    // load state from store
    const appState = useTypedSelector(
        (rootState: RootState) => rootState.appReducer
    );
    const [state, setState] = useState<State>({
        isLoading: true,
        data: [],
        total: 0,
    });

    // load data from API and set in state
    useEffect(() => {
        if (!state.isLoading) {
            setState((s: State) => ({ ...s, isLoading: true }));
        }
        dispatch(action(appState.selectedYear, appState.page, appState.pageSize, setData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appState.selectedYear, appState.page, appState.pageSize]);

    const setData = (list: ChampionList[] | WinnersList[], total: number) => {
        setState((s: State) => ({ ...s, isLoading: false, data: list, total }));
        dispatch(setTotalPages(total));
    };

    return { state }
}

