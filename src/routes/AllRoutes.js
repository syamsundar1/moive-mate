import { Routes, Route } from "react-router-dom";
import {MoiveDetail, MoiveList, PageNotFound, Search } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MoiveList/>} />
      <Route path="moive/:id" element={<MoiveDetail/>} />
      <Route path="search" element={<Search/>} />
      <Route path="moives" element={<MoiveList/>} />
      <Route path="moives/top" element={<MoiveList/>} />
      <Route path="moives/popular" element={<MoiveList/>} />
      <Route path="moives/upcoming" element={<MoiveList/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </>
  )
}






