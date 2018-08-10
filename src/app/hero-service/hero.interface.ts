export interface Hero {
    name: HeroName;
    appearances: HeroAppearances;
    powers: HeroPower[];
}

export interface HeroName {
    alias: string;
    realName: string;
}

export interface HeroAppearances {
    comics: boolean;
    movies: boolean;
    games: boolean;
}

export interface HeroPower {
    name: string;
    description: string;
}

