import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../service/client";
import { Photo } from "../photo/photo";

export const Gallery = () => {
  const [photos, setPhotos] = useState([]);

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

  return (
    <section>
      <Container>
        <Grid>
          {photos.map((photo) => (
            <Photo
              key={photo.filename_disk}
              name={photo.filename_disk}
              src={photo.filename_disk}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
