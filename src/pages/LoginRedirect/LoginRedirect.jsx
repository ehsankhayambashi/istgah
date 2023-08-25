import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function LoginRedirect() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const providerName = params.providerName;
  const backUrl = useSelector((state) => state.urlManager.backUrl);
  const [text, setText] = useState("Loading...");
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get("access_token");
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_UPLOAD_URL}/api/auth/${providerName}/callback?access_token=${accessToken}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        //show toast
        navigate(backUrl);
      })
      .catch((err) => {
        console.log(err);
        //show toast
        navigate("/login");
      });
  }, []);

  return (
    <>
      <div>{text}</div>
    </>
  );
}

export default LoginRedirect;
