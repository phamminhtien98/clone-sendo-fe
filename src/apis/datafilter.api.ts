import { IDataFilter } from "../@Types/Types";
import http from "../utils/http";

export const getListFilterSideBar = () => http.get<IDataFilter[]>("filters");
