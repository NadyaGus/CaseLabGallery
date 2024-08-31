import { autorun, makeAutoObservable } from "mobx";

export class PhotoStore {
  photos = [];
  openedPhoto = null;

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.logStoreData();
    });
  }

  get totalPhotos() {
    return this.photos;
  }

  get modalPhoto() {
    return this.openedPhoto;
  }

  addPhoto(photo) {
    this.photos.push(photo);
  }

  setOpenedPhoto(photo) {
    this.openedPhoto = photo;
  }

  get storeData() {
    return this;
  }

  logStoreData() {
    console.log(this.storeData);
  }
}
