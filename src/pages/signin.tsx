import Input from "@/components/formInput/Input";
import Layout from "@/containers/layout";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import React from "react";
import Link from "next/link";
import { ValuesProps } from "./signup";
import ReCAPTCHA from "react-google-recaptcha";

let initialValues = {
  email: "",
  password: "",
  recaptcha: "",
};

const RegisterForm = () => {
  const onSubmit = (values: ValuesProps) => {
    console.log(values);
  };

  const validate = (values: ValuesProps) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name length is not valid"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Invalid Phone Number")
      .nullable(),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    recaptcha: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>Signin</title>
      </Head>

      <Box display="flex" flexDirection="column" alignItems="center" pb={10}>
        <Box width={500}>
          <Typography
            mb={5}
            component="h3"
            variant="h5"
            fontWeight="black"
            color="secondary"
          >
            ثبت نام
          </Typography>

          <form>
            <Input label="ایمیل" name="email" type="email" formik={formik} />
            <Input
              label="رمز عبور"
              name="password"
              type="password"
              formik={formik}
            />

            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={formik.handleChange("recaptcha")}
            />

            <Box mt={3}>
              <Link href={"/signup"}>
                <a>
                  هنوز ثبت نام نکردی؟
                  <Typography color="primary" display="inline">
                    &nbsp;ثبت نام
                  </Typography>
                </a>
              </Link>
            </Box>

            <Button
              variant="contained"
              fullWidth
              disabled={!formik.isValid}
              sx={[
                {
                  marginTop: 2,
                  height: 42,
                  borderRadius: 2,
                  backgroundColor: "primary",
                },
                formik.isValid
                  ? {
                      background:
                        "linear-gradient(121deg, rgba(60,110,247,1) 0%, rgba(115,61,216,1) 100%)",
                    }
                  : { background: "#d4d4d4" },
              ]}
            >
              ثبت
            </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
};

export default RegisterForm;
