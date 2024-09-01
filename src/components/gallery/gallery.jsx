import { Container, Grid, Image, Pagination, ScrollArea } from "@mantine/core";
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

const PHOTO_PER_PAGE = 12;

const GalleryView = ({ store }) => {
  const [photos, setPhotos] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    client
      .get(`/files`)
      .then((res) => {
        const pages = Math.ceil(res.data.length / PHOTO_PER_PAGE) ?? 1;
        setTotalPage(pages);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (photos && photos.length > 0) {
      photos.map((photo) => store.addPhoto(photo));
    }
  }, [photos, store]);

  useEffect(() => {
    client
      .get(`/files/?limit=${PHOTO_PER_PAGE}&page=${activePage}`)
      .then((res) => {
        store.clearPhotos();
        setPhotos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [activePage, store]);

  return (
    <main>
      <Container p={0}>
        <Grid gutter={40} m={20}>
          {store.photos.map((photo) => (
            <Photo key={photo.id} open={open} photo={photo} store={store} />
          ))}
        </Grid>

        <Pagination
          className={classes.pagination}
          total={totalPage}
          value={activePage}
          onChange={setPage}
        />

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
