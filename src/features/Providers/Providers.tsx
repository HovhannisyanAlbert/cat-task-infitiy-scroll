"use client";
import { FC } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";

export const Providers: FC<{
  children?: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
