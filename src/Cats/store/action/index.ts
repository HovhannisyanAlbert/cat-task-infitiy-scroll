import { createAction } from "@reduxjs/toolkit";
import { GetCatsPayload } from "../types";

export const getCats = createAction<GetCatsPayload>("getCats");
