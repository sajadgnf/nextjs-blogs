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

let initialValues = {
  email: "",
  password: "",
};

const RegisterForm = () => {
  const onSubmit = (values: ValuesProps) => {
    console.log(values);
  };

  const validate = (values: ValuesProps) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("لطفا ایمیل خود را به صورت صحیح وارد کنید")
      .required("لطفا ایمیل خود را وارد کنید"),
    password: Yup.string()
      .required("لطفا رمز خود را وارد کنید")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "رمز باید شامل 8 کارکتر و حداقل یک حروف بزرگ ،یک حروف کوچک و یک عدد باشد"
      ),
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
