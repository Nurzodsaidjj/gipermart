import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { Search } from "../../config/ui/style";
import Search_icons from "../../assets/icon/search_icons";

export default function Form({ page }) {
  const { handleSubmit, register, reset } = useForm();
  const size_Search = useMediaQuery("(min-width:1229px )");
  const size_Searchres = useMediaQuery("(min-width:813px )");
  const nav = useNavigate();
  const submit = (data) => {
    if (page == "login") {
      saveState("user", data);
    }

    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      {page == "login" && (
        <>
          <TextField {...register("name")} placeholder="name" />
          <Button style={{ margin: "10px" }} type="submit" variant="outlined">
            send
          </Button>
        </>
      )}

      {page == "header" && (
        <>
          {size_Search ? (
            <TextField
              style={{ width: "610px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search_icons />
                  </InputAdornment>
                ),
              }}
              {...register("search")}
              placeholder="search"
            />
          ) : (
            <>
              {size_Searchres ? (
                <TextField
                  style={{ width: "410px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search_icons />
                      </InputAdornment>
                    ),
                  }}
                  {...register("search")}
                  placeholder="search"
                />
              ) : (
                <TextField
                  style={{ width: "280px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search_icons />
                      </InputAdornment>
                    ),
                  }}
                  {...register("search")}
                  placeholder="search"
                />
              )}
            </>
          )}
        </>
      )}
    </form>
  );
}
