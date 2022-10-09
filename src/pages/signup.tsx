import Input from "@/components/formInput/Input";
import Layout from "@/containers/layout";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Head from "next/head";
import React from "react";

let initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  console.log(formik);

  return (
    <Layout>
      <Head>
        <title>Signup</title>
      </Head>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={5}
      >
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
            <Input label="نام و نام خانوادگی" name="name" formik={formik} />
            <Input label="ایمیل" name="email" type="email" formik={formik} />
            <Input label="شماره موبایل" name="phoneNumber" formik={formik} />
            <Input
              label="رمز عبور"
              name="password"
              type="password"
              formik={formik}
            />
            <Input
              label="تکرار رمز"
              name="confirmPassword"
              type="password"
              formik={formik}
            />

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

export default Signup;
