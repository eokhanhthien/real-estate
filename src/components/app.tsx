import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import Header from "../components/include/header";
import Loading from "../components/include/loading";
import Bottomnavigation from "../components/include/bottomnavigation";

import ViewRealEstate from "../pages/view_real_estate";
import News from "../pages/news";
import Book from "../pages/book";
import InfoBook from "../pages/info_book";
import CreateBook from "../pages/create_book";
import ChooseEstate from "../pages/choose_estate";
import RealCategory from "../pages/category_real_estate";
import DetailRealEstate from "../pages/detail";

// Toast
import "react-toastify/dist/ReactToastify.css";

// Redux
import {store} from "../store/index";
import { Provider } from "react-redux";

const MyApp = () => {
  return (
    <RecoilRoot>
     <Provider store={store}>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Header />
            <AnimationRoutes>
              <Route path="/" element={ <React.Suspense fallback={<Loading />}> <HomePage></HomePage> </React.Suspense> }></Route>
              <Route path="/view-real-estate" element={<ViewRealEstate></ViewRealEstate>} ></Route>
              <Route path="/detail-real-estate/:id" element={<DetailRealEstate></DetailRealEstate>}></Route>
              <Route path="/category-real-estate" element={<RealCategory></RealCategory>}></Route>
              <Route path="/news" element={<News></News>}></Route>
              <Route path="/book" element={<Book></Book>}></Route>
              <Route path="/create-book" element={<CreateBook></CreateBook>}></Route>
              <Route path="/choose-estate" element={<ChooseEstate></ChooseEstate>}></Route>
              <Route path="/info-book" element={<InfoBook></InfoBook>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </AnimationRoutes>
            <Bottomnavigation />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
      </Provider>
    </RecoilRoot>
  );
};
export default MyApp;
