export interface IPhotos {
    url: string;
    type: string
}

export interface ISectionPhotos {
    [group: string]: {
        title: string;
        images: IPhotos[];
    }
  }