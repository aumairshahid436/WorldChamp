import axios from "axios";
import { Dispatch } from "redux";
import { BaseUrl } from "config";
import { WinnersList } from "shared/types/api.response";
import { ErrorNotification, GetOffSet, Messages, StatusCode } from "utils"
import { MapWinnerResponseData } from "./helper";

/* 
   * Fetch results of race for the selected year 
*/

export const GetWinners = (year: string, page: number, pageSize: number, setData: (data: WinnersList[], total: number) => void) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${BaseUrl}/${year}/results.json?limit=${pageSize}&offset=${GetOffSet(page, pageSize)}`);
        if (response?.status === StatusCode.Ok200) {
            const data: WinnersList[] = MapWinnerResponseData(response.data);
            const total: number = +response.data.MRData.total;
            setData(data, total);
        }
        else {
            ErrorNotification(Messages.FailedToLoadRecord);
            setData([], -1);
        }
    } catch (error) {
        ErrorNotification(Messages.SomethingWentWrong);
        setData([], -1);
    }
}
