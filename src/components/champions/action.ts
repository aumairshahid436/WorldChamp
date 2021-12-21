import axios from "axios";
import { Dispatch } from "redux";
import { BaseUrl } from "config";
import { ChampionList } from "shared";
import { ErrorNotification, GetOffSet, Messages, StatusCode } from "utils"
import { MapChampionResponseData } from "./helper";

/*  Fetch results of world champions for selected year */
export const GetChampions = (year: string, page: number, pageSize: number, setData: (data: ChampionList[], total: number) => void) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${BaseUrl}/${year}.json?limit=${pageSize}&offset=${GetOffSet(page, pageSize)}`);
        if (response?.status === StatusCode.Ok200) {
            const data: ChampionList[] = MapChampionResponseData(response.data);
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
