export interface Mrdata {
  xmlns: string
  series: string
  url: string
  limit: string
  offset: string
  total: string
}

type SeasonAPIResponse = { MRData: Mrdata & { SeasonTable: SeasonTable } };
type RacesAPIResponse = { MRData: Mrdata & { RaceTable: RaceTable } };

export interface SeasonTable {
  Seasons: Season[];
}

export interface Season {
  season: string;
  url: string;
}

export interface RaceTable {
  season: string;
  round?: string;
  Races: Race[]
}

export interface Race {
  season: string
  round: string
  url: string
  raceName: string
  Circuit: Circuit
  date: string
  time: string
  Results?: Result[]
}

export interface Circuit {
  circuitId: string
  url: string
  circuitName: string
  Location: Location
}

export interface Location {
  lat: string
  long: string
  locality: string
  country: string
}

export interface Result {
  number: string
  position: string
  positionText: string
  points: string
  Driver: Driver
  Constructor: Constructor
  grid: string
  laps: string
  status: string
  Time?: Time
  FastestLap: FastestLap
}

export interface Driver {
  driverId: string
  permanentNumber: string
  code: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
}

export interface Constructor {
  constructorId: string
  url: string
  name: string
  nationality: string
}

export interface Time {
  millis: string
  time: string
}

export interface FastestLap {
  rank: string
  lap: string
  Time: Time2
  AverageSpeed: AverageSpeed
}

export interface Time2 {
  time: string
}

export interface AverageSpeed {
  units: string
  speed: string
}

export interface Formula1State {
  // seasons: Season[];
  selectedSeason?: string;
  // seasonRaces: Race[];
  selectedRound?: string;
  // results: Result[];
}