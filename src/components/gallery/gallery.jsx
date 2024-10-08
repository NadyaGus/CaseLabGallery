import { Container, Grid, Image, ScrollArea } from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../service/client";
import { Photo } from "../photo/photo";
import { useDisclosure } from "@mantine/hooks";
import { observer } from "mobx-react-lite";
import { PhotoStore } from "../../app/store/photoStore";
import { Modal } from "@mantine/core";
import PropTypes from "prop-types";

import { BASE_URL } from "../../app/variables";

import classes from "./gallery.module.css";
import { Pagination } from "../pagination/pagination";
import { useSearchParams } from "react-router-dom";

export const PHOTO_PER_PAGE = 12;

const GalleryView = ({ store }) => {
  const [photos, setPhotos] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (photos && photos.length > 0) {
      photos.map((photo) => store.addPhoto(photo));
    }
  }, [photos, store]);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    client
      .get(`/files/?limit=${PHOTO_PER_PAGE}&page=${page}`)
      .then((res) => {
        store.clearPhotos();
        setPhotos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [store, searchParams]);

  return (
    <main>
      <Container p={0}>
        <Grid gutter={40} m={20}>
          {store.photos.map((photo) => (
            <Photo key={photo.id} open={open} photo={photo} store={store} />
          ))}
        </Grid>

        <Pagination />

        <Modal
          size={"lg"}
          scrollAreaComponent={ScrollArea.Autosize}
          className={classes.modal}
          opened={opened}
          onClose={close}
          centered
          trapFocus={false}
          title={store.openedPhoto?.title ?? "No title"}
        >
          <Modal.Body>
            <Image
              alt={store.openedPhoto?.filename_download}
              src={`${BASE_URL}/assets/${store.openedPhoto?.filename_disk}`}
            ></Image>
          </Modal.Body>
        </Modal>
      </Container>
    </main>
  );
};

GalleryView.propTypes = {
  store: PropTypes.instanceOf(PhotoStore).isRequired,
};

export const Gallery = observer(GalleryView);
