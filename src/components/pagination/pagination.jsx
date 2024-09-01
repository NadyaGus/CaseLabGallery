import { Pagination as MantinePagination } from "@mantine/core";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { client } from "../../service/client";
import { PHOTO_PER_PAGE } from "../gallery/gallery";

import classes from "./pagination.module.css";
import { useSearchParams } from "react-router-dom";

export const Pagination = () => {
  const [totalPage, setTotalPage] = useState(1);

  const [searchParams] = useSearchParams();

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

  return (
    <MantinePagination
      className={classes.pagination}
      total={totalPage}
      value={+searchParams.get("page") || 1}
      getItemProps={(page) => ({
        component: "a",
        href: `?page=${page}`,
      })}
      getControlProps={(control) => {
        if (control === "first") {
          return { component: "a", href: "?page=1" };
        }

        if (control === "last") {
          return { component: "a", href: `?page=${totalPage}` };
        }

        if (control === "next") {
          return {
            component: "a",
            href: `?page=${+searchParams.get("page") + 1}`,
          };
        }

        if (control === "previous") {
          return {
            component: "a",
            href: `?page=${+searchParams.get("page") - 1}`,
          };
        }

        return {};
      }}
    ></MantinePagination>
  );
};

Pagination.propTypes = {
  setPage: PropTypes.func,
};
