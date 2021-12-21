/* Helper methods for champions component */
import { ChampionList, Race, ResponseData } from "shared/types/api.response";

/* Map data for champion table */
export const MapChampionResponseData = (data: ResponseData): ChampionList[] => {
    let list: ChampionList[] = [];
    data.MRData.RaceTable.Races.forEach((item: Race) => {
        list = [...list, {
            ...{
                season: item.season,
                round: item.round,
                raceName: item.raceName,
                date: item.date,
                time: item.time,
                circuitName: item.Circuit.circuitName,
                locality: item.Circuit.Location.locality,
                country: item.Circuit.Location.country,
            }
        }];
    });
    return list;
}
