import { makeAutoObservable } from "mobx";

export class PhotoStore {
  photos = [];
  openedPhoto = null;

  constructor() {
    makeAutoObservable(this);
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

  clearPhotos() {
    this.photos = [];
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
