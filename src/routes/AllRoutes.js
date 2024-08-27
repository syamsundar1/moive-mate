import { Routes, Route } from "react-router-dom";
import {MoiveDetail, MoiveList, PageNotFound, Search } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
      <Route path="" element={<MoiveList apiPath="movie/now_playing" />} />
      <Route path="moive/:id" element={<MoiveDetail/>} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="moives" element={<MoiveList apiPath="movie/now_playing" />} />
      <Route path="moives/top" element={<MoiveList apiPath="movie/top_rated" />}  />
      <Route path="moives/popular" element={<MoiveList apiPath="movie/popular" />}  />
      <Route path="moives/upcoming" element={<MoiveList apiPath="movie/upcoming" />}   />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </div>
  )
}






