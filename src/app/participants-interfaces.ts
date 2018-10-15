export interface IParticipant {
    order?: number;
    nickName: string;
    email: string;
    throws?: IArrThrow[];
}

export interface IArrThrow {
    steps: IStep[];
}

export interface IStep {
    points: number;
    coefficient?: number;
    winningRatio?: boolean;
    error?: boolean;
    numberOfShots?: number;
}

export interface IGame {
    name: string;
    value: number;
    mainSteps: number;
    secondarySteps: number;
}