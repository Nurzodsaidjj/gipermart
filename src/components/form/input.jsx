import { Stack, TextField } from "@mui/material";
import React from "react";

export default function Input({
  label,
  labelId,
  placeholder,
  type = "text",
  name,
  register,
}) {
  return (
    <>
      <form>
        <Stack>
          <label htmlFor={labelId}>{label}</label>
          <TextField
            id={labelId}
            type={type}
            name={name}
            placeholder={placeholder}
            {...register}
          />
        </Stack>
      </form>
    </>
  );
}
