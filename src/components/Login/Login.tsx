import React from "react";
import { Typography, Box, Stack, CircularProgress } from "@mui/material";
import theme from "../../themes/theme";
import "./login.css";
import InputTextField from "../Input/InputField";
import MyButton from "../Button/Button";
import { InputIcon } from "../Icon";

interface LoginProps {
  userName?: string;
  password?: string;
  token?: string;
}

type LoginPageProps = {
  id?: string;
  formErrors: {
    errorMsg: string;
    loginError: boolean;
    userName: boolean;
    password: boolean;
  };
  formData: LoginProps;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
};

const LoginPage = (props: LoginPageProps) => {
  const { id, formErrors, formData, handleChange, handleSubmit, loading } = props;

  return (
    <div id={id} className="login-container">
      <Box
        className="form-wrapper"
        border={2}
        borderRadius={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.primary.main,
        }}
      >
        <Typography component="h1" variant="body1" textAlign="center" sx={{ fontSize: "60px" }}>
          Welcome
        </Typography>

        {formErrors.loginError && (
          <Typography
            variant="body2"
            color={theme.palette.error.main}
            textAlign="center"
            mt="6px"
            sx={{ marginLeft: "0" }}
          >
            {formErrors.errorMsg}
          </Typography>
        )}

        <Stack direction="column" gap={3} component="form" className="login-form" noValidate onSubmit={handleSubmit}>
          <InputTextField
            variant="outlined"
            required
            id="username"
            label="User name"
            name="username"
            autoFocus
            size="small"
            icon={<InputIcon />}
            value={formData.userName}
            onChange={(e) => handleChange(e, "userName")}
            error={formErrors.userName}
            helperText={
              formErrors.userName ? (formData.userName ? "Enter a valid username" : "Username is required") : ""
            }
          />
          <InputTextField
            variant="outlined"
            required
            size="small"
            name="password"
            label="Password"
            type="password"
            id="password"
            icon={<InputIcon />}
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => handleChange(e, "password")}
            error={formErrors.password}
            helperText={
              formErrors.password ? (formData.password ? "Enter a valid password" : "Password is required") : ""
            }
          />
          {/* <Typography variant="body3" color={theme.palette.text.secondary}>
            Forgot your password?
          </Typography> */}
          <Box mt={4}>
            <MyButton
              type="submit"
              variant="contained"
              color="primary"
              style={{
                borderRadius: "16px",
                width: "100%",
                padding: "16px 20px",
                height: "56px",
                textTransform: "capitalize",
              }}
            >
              <Typography>Login</Typography>
              {loading && <CircularProgress color="inherit" size={24} sx={{ ml: 1 }} />}
            </MyButton>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default LoginPage;
