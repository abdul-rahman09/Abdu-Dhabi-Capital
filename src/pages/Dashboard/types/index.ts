import { RouteComponentProps } from "react-router";

export interface RouteInfo {
  page?: string;
  id?: string;
}

export interface IDashboardProps extends RouteComponentProps<RouteInfo> {}

export interface IDashboardState {}
