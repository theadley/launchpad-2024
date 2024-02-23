export interface IKartRun {
  filename: string;
  trackName: string;
  sessionName: string;
  serial: string;
  date: string;
  time: string;
  driver: string;
  vehicleClass: string;
  lapSummaries?: IKartLapSummary[];
}

interface IKartLapSummary {
  lap: number;
  "time lap": number;
  "time partiel number": number;
  "time partiel 2": number;
  "time partiel 3": number;
  "time partiel 4": number;
  "time partiel 5": number;
  "time partiel 6": number;
  "Min RPM": number;
  "Max RPM": number;
  "Min Speed GPS": number;
  "Max Speed GPS": number;
  "Min Tnumber": number;
  "Max Tnumber": number;
  "Min T2": number;
  "Max T2": number;
  "Min T3": number;
  "Max T3": number;
  "Min T4": number;
  "Max T4": number;
  "Min Speed sensor": number;
  "Max Speed sensor": number;
  "RPM max gear": number;
  "Type de champs": number;
  Vbattery: number;
  "max EGT": number;
  Hdop: number
}