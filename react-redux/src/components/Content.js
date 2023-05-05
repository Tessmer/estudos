import React from "react";
import LoginForm from "./LoginForm";
import Photos from "./Photos";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Content = () => {
  const { user, token } = useSelector((state) => state.login);

  if (user.loading || token.loading) return <Loading />;
  if (user.data) return <Photos />;
  else return <LoginForm />;
};

export default Content;
