import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";
import TestAPage from "../pages/tests";
import Error from "../pages/errorPage";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
} from "./const";

import { practice, presentation, tutorial } from "../utils/routes";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={TUTORIAL_PAGE}>
          {tutorial.map(({ path, element: Element, id }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={PRESENTATION_PAGE}>
          {presentation.map(({ path, element: Element, id }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>

        <Route path={PRACTICE_PAGE}>
          {practice.map(({ path, element: Element, id }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path={TEST_PAGE} element={<TestAPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default router;
