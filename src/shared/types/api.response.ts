export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}
export interface Circuit {
    circuitId: string;
    circuitName: string;
    url: string;
    Location: Location
}

export interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}
export interface Constructure {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}
export interface Time {
    millis: string;
    time: string;
}
export interface RaceDetail {
    date: string;
    raceName: string;
    round: string;
    season: string;
    time: string;
}
interface CommonResult {
    number: string;
    points: string;
    grid: string;
    laps: string;
    status: string;

}
export interface RaceResult extends CommonResult {
    positionText: string;
    position: string;
    Driver: Driver;
    Constructor: Constructure;
    Time: Time;
}
export interface Race extends RaceDetail {
    Circuit: Circuit;
    Results?: RaceResult[];

}
export interface ChampionList extends RaceDetail {
    locality: string;
    country: string;
    circuitName: string;
}
export interface ResponseData {
    MRData: {
        RaceTable: {
            season: string;
            Races: Race[]
        },
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
    }
}
export interface WinnersList extends CommonResult {
    driver: string;
    constructor: string;
    time: string;
    highlight: boolean;
}