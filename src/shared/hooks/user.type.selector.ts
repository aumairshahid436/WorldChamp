import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "shared/";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
