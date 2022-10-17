import Input from "@/components/formInput/Input";
import Layout from "@/containers/layout";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export type ValuesProps = {
  name?: string;
  email: string;
  phoneNumber?: string;
  password: string;
  confirmPassword?: string;
};

let initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const router = useRouter();

  const onSubmit = (values: ValuesProps) => {
    axios
      .post(`${process.env.BACKEND_URL}/api/user/signup`, values)
      .then((res) => {
        toast.success("ثبت نام شما با موفقیت انجام شد");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("لطفا نام و نام خانوادگی خود را وارد کنید")
      .min(3, "تعداد کارکتر وارد شده صحیح نمی باشد"),
    email: Yup.string()
      .email("لطفا ایمیل خود را به صورت صحیح وارد کنید")
      .required("لطفا ایمیل خود را وارد کنید"),
    phoneNumber: Yup.string()
      .required("لطفا شماره موبایل خود را وارد کنید")
      .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
      .nullable(),
    password: Yup.string()
      .required("لطفا رمز خود را وارد کنید")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "رمز باید شامل 8 کارکتر و حداقل یک حروف بزرگ ،یک حروف کوچک و یک عدد باشد"
      ),
    confirmPassword: Yup.string()
      .required("لطفا رمز خود را تکرار کنید")
      .oneOf([Yup.ref("password"), null], "تکرار رمز باید با رمز برابر باشد"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>Signup</title>
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

          <form onSubmit={formik.handleSubmit}>
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

            <Box mt={3}>
              <Link href={"/signin"}>
                <a>
                  قبلا ثبت نام کردی؟
                  <Typography color="primary" display="inline">
                    &nbsp;ورود
                  </Typography>
                </a>
              </Link>
            </Box>

            <Button
              type="submit"
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
