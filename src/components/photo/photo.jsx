import { GridCol, Image } from "@mantine/core";
import PropTypes from 'prop-types';

export const Photo = ({name, src}) => {
  return (
    <GridCol key={name} span={4}>
      <Image
        alt={name}
        h={300}
        key={src}
        src={`http://localhost:8055/assets/${src}`}
      />
    </GridCol>
  );
};

Photo.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
