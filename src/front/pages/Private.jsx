import React, { useEffect, useState } from "react";

const Private = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/private", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.logged_in_as || "Sin acceso"))
      .catch(() => setMessage("No autorizado"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Zona Privada</h2>
      <p>{message}</p>
    </div>
  );
};

export default Private;
