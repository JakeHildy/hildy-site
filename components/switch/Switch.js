"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const Switch = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    axios.put(process.env.NEXT_PUBLIC_PI_ENDPOINT, {
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
