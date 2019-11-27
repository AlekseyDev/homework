export interface ICity {
  id: number;
  name: string;
  favourite: boolean;
  cityInfo: ICityInfo;
  socialInfo: ISocialInfo;
}

export interface ICityInfo {
  country: string;
  continent: string;
  postindex: string;
  img: string;
  popularity: 1 | 2 | 3 | 4 | 5;
  description: string;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  folowing: number;
}
