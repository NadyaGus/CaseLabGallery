import { Container, Grid, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../service/client";
import { Photo } from "../photo/photo";
import { useDisclosure } from "@mantine/hooks";
import { observer } from "mobx-react-lite";
import { PhotoStore } from "../../app/store/photoStore";
import { Modal } from "@mantine/core";
import PropTypes from "prop-types";

import classes from "./gallery.module.css";

const GalleryView = ({ store }) => {
  const [photos, setPhotos] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    client
      .get("/files")
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (photos.length > 0) {
      photos.map((photo) => store.addPhoto(photo));
    }
  }, [photos, store]);

  return (
    <main>
      <Container p={0}>
        <Grid gutter={40} m={20}>
          {store.photos.map((photo) => (
            <Photo key={photo.id} open={open} photo={photo} store={store} />
          ))}
        </Grid>

        <Modal
          className={classes.modal}
          opened={opened}
          onClose={close}
          centered
          trapFocus={false}
          title={store.openedPhoto?.title ?? "No title"}
        >
          <Image
            src={`http://localhost:8055/assets/${store.openedPhoto?.filename_disk}`}
          ></Image>
        </Modal>
      </Container>
    </main>
  );
};

GalleryView.propTypes = {
  store: PropTypes.instanceOf(PhotoStore).isRequired,
};

export const Gallery = observer(GalleryView);
