import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import CommonService from '../services/CommonService';
import { LOGIN_PATH} from '../constants'

export const ProtectedRoute = () => {
console.log('test')
  const isAuthenticated = CommonService.get().isAuthenticated()
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_PATH} />;
};
