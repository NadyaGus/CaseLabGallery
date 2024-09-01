// import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header"
import { PhotoStore } from "../store/photoStore";
import { Gallery } from "../../components/gallery/gallery";

export const Layout = () => {
  const store = new PhotoStore();

  return (
    <>
      <Header />

      {/* <Outlet /> */}
      <Gallery store={store} />
    </>
  )
}
