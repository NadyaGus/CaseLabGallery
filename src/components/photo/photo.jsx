import { GridCol, Image } from "@mantine/core";
import PropTypes from "prop-types";

import classes from "./photo.module.css";

export const Photo = ({ photo, open, store }) => {

  const handleClick = () => {
    store.setOpenedPhoto(photo);
    open();
  }

  return (
    <GridCol key={photo.id} span={4} className={classes.photo} onClick={handleClick}>
      <Image
        alt={photo.filename_download}
        h={300}
        key={photo.filename_disk}
        src={`http://localhost:8055/assets/${photo.filename_disk}`}
      />
    </GridCol>
  );
};

Photo.propTypes = {
  open: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
