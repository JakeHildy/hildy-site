"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Switch = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios.put("https://f85f-2001-569-f805-fe00-bde5-1a61-c2f-27f4.ngrok.io", {
      enable: checked ? 0 : 1,
    });
  }, [checked]);

  return (
    <input
      type="checkbox"
      onChange={() => setChecked((value) => !value)}
      value={checked}
    />
  );
};

export default Switch;
