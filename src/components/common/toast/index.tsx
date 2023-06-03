import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <div>
      <Toaster position="top-right" />
    </div>
  );
}

export const SucessToast = (alertMessage = "Sucessfully done") => {
  return toast.success(alertMessage, {
    id: "sucess_id",
    style: {
      border: "none",
      background: "#DDFFBB",
      padding: "16px",
      color: "#40513B",
    },
    iconTheme: {
      primary: "#DDFFBB",
      secondary: "#40513B",
    },
  });
};

export const ErrorToast = (alertMessage = "Something went wrong") => {
  return toast.error(alertMessage, {
    id: "error_id",
    style: {
      border: "none",
      background: "#F0D1D1",
      padding: "16px",
      color: "#850000",
    },
    iconTheme: {
      primary: "#F0D1D1",
      secondary: "#850000",
    },
  });
};

export default Toast;
