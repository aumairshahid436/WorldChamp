/* Helper methods for winners component */
import { Race, WinnersList, RaceResult, ResponseData } from "shared/types/api.response";
import { DeepCopy } from "utils";

/* Map data for winner table */
export const MapWinnerResponseData = (data: ResponseData): WinnersList[] => {
    let list: WinnersList[] = [];
    data.MRData.RaceTable.Races.forEach((item: Race, outerIndex: number) => {
        item.Results?.forEach((res: RaceResult, innerIndex: number) => {
            list = [...list, {
                ...{
                    number: res.number,
                    driver: res.Driver.familyName,
                    constructor: res.Constructor.name,
                    laps: res.laps,
                    grid: res.grid,
                    time: res.Time?.time,
                    status: res.status,
                    points: res.points,
                    // added highlight property so we can use in table to highlight row
                    highlight: CheckWinner(outerIndex, innerIndex, res, data.MRData.RaceTable.Races)
                }
            }]
        });
    });
    return list;
}

/* This method will check winner has been the world champion in the same season */
const CheckWinner = (outerIndex: number, innerIndex: number, data: RaceResult, race: Race[]) => {
    // We don't want to compare current object in race results []
    // That's why remove it before iterating
    const raceArr = [...DeepCopy(race)];  // because we don't want to mutate orignal array
    raceArr[outerIndex].Results?.splice(innerIndex, 1);
    let isWinner = false;
    for (const element of raceArr) {
        const isWorlChamp = element.Results?.filter((x: RaceResult) => data.status === "Finished"
            && data.position === "1"
            && x.Driver.driverId === data.Driver.driverId);
        if (isWorlChamp && isWorlChamp.length > 0) {
            isWinner = true;
            break;
        }
    }
    return isWinner;
}
