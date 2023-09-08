import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { Formik, Form, Field } from "formik";
import { theme } from "../../../../Theme";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import TextField from "@mui/material/TextField";
//rtl
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { addressSchema } from "../../../../schemas/index";

function AddressForm({ setShowForm, location, handleCloseMap }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const onSubmit = (values, errors) => {
    console.log("submitted");
    console.log(values);
    handleCloseMap();
  };
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const allStates = [
    {
      id: 1,
      name: "آذربایجان شرقی",
    },
    {
      id: 2,
      name: "آذربایجان غربی",
    },
    {
      id: 3,
      name: "اردبیل",
    },
    {
      id: 4,
      name: "اصفهان",
    },
    {
      id: 5,
      name: "البرز",
    },
    {
      id: 6,
      name: "ایلام",
    },
    {
      id: 7,
      name: "بوشهر",
    },
    {
      id: 8,
      name: "تهران",
    },
    {
      id: 9,
      name: "چهارمحال و بختیاری",
    },
    {
      id: 10,
      name: "خراسان جنوبی",
    },
    {
      id: 11,
      name: "خراسان رضوی",
    },
    {
      id: 12,
      name: "خراسان شمالی",
    },
    {
      id: 13,
      name: "خوزستان",
    },
    {
      id: 14,
      name: "زنجان",
    },
    {
      id: 15,
      name: "سمنان",
    },
    {
      id: 16,
      name: "سیستان و بلوچستان",
    },
    {
      id: 17,
      name: "فارس",
    },
    {
      id: 18,
      name: "قزوین",
    },
    {
      id: 19,
      name: "قم",
    },
    {
      id: 20,
      name: "کردستان",
    },
    {
      id: 21,
      name: "کرمان",
    },
    {
      id: 22,
      name: "کرمانشاه",
    },
    {
      id: 23,
      name: "کهگیلویه و بویراحمد",
    },
    {
      id: 24,
      name: "گلستان",
    },
    {
      id: 25,
      name: "لرستان",
    },
    {
      id: 26,
      name: "گیلان",
    },
    {
      id: 27,
      name: "مازندران",
    },
    {
      id: 28,
      name: "مرکزی",
    },
    {
      id: 29,
      name: "هرمزگان",
    },
    {
      id: 30,
      name: "همدان",
    },
    {
      id: 31,
      name: "یزد",
    },
  ];

  const allCities = [
    {
      id: 1,
      cities: [
        { id: 1, label: "اسکو" },
        { id: 2, label: "اهر" },
        { id: 3, label: "ایلخچی" },
        { id: 4, label: "آبش احمد" },
        { id: 5, label: "آذرشهر" },
        { id: 6, label: "آقکند" },
        { id: 7, label: "باسمنج" },
        { id: 8, label: "بخشایش" },
        { id: 9, label: "بستان آباد" },
        { id: 10, label: "بناب" },
        { id: 11, label: "بناب جدید" },
        { id: 12, label: "تبریز" },
        { id: 13, label: "ترک" },
        { id: 14, label: "ترکمانچای" },
        { id: 15, label: "تسوج" },
        { id: 16, label: "تیکمه داش" },
        { id: 17, label: "جلفا" },
        { id: 18, label: "خاروانا" },
        { id: 19, label: "خامنه" },
        { id: 20, label: "خراجو" },
        { id: 21, label: "خسروشهر" },
        { id: 22, label: "خضرلو" },
        { id: 23, label: "خمارلو" },
        { id: 24, label: "خواجه" },
        { id: 25, label: "دوزدوزان" },
        { id: 26, label: "زرنق" },
        { id: 27, label: "زنوز" },
        { id: 28, label: "سراب" },
        { id: 29, label: "سردرود" },
        { id: 30, label: "سهند" },
        { id: 31, label: "سیس" },
        { id: 32, label: "سیه رود" },
        { id: 33, label: "شبستر" },
        { id: 34, label: "شربیان" },
        { id: 35, label: "شرفخانه" },
        { id: 36, label: "شندآباد" },
        { id: 37, label: "صوفیان" },
        { id: 38, label: "عجب شیر" },
        { id: 39, label: "قره آغاج" },
        { id: 40, label: "کشکسرای" },
        { id: 41, label: "کلوانق" },
        { id: 42, label: "کلیبر" },
        { id: 43, label: "کوزه کنان" },
        { id: 44, label: "گوگان" },
        { id: 45, label: "لیلان" },
        { id: 46, label: "مراغه" },
        { id: 47, label: "مرند" },
        { id: 48, label: "ملکان" },
        { id: 49, label: "ملک کیان" },
        { id: 50, label: "ممقان" },
        { id: 51, label: "مهربان" },
        { id: 52, label: "میانه" },
        { id: 53, label: "نظرکهریزی" },
        { id: 54, label: "هادی شهر" },
        { id: 55, label: "هرگلان" },
        { id: 56, label: "هریس" },
        { id: 57, label: "هشترود" },
        { id: 58, label: "هوراند" },
        { id: 59, label: "وایقان" },
        { id: 60, label: "ورزقان" },
        { id: 61, label: "یامچی" },
      ],
    },
    {
      id: 2,
      cities: [
        { id: 62, label: "ارومیه" },
        { id: 63, label: "اشنویه" },
        { id: 64, label: "ایواوغلی" },
        { id: 65, label: "آواجیق" },
        { id: 66, label: "باروق" },
        { id: 67, label: "بازرگان" },
        { id: 68, label: "بوکان" },
        { id: 69, label: "پلدشت" },
        { id: 70, label: "پیرانشهر" },
        { id: 71, label: "تازه شهر" },
        { id: 72, label: "تکاب" },
        { id: 73, label: "چهاربرج" },
        { id: 74, label: "خوی" },
        { id: 75, label: "دیزج دیز" },
        { id: 76, label: "ربط" },
        { id: 77, label: "سردشت" },
        { id: 78, label: "سرو" },
        { id: 79, label: "سلماس" },
        { id: 80, label: "سیلوانه" },
        { id: 81, label: "سیمینه" },
        { id: 82, label: "سیه چشمه" },
        { id: 83, label: "شاهین دژ" },
        { id: 84, label: "شوط" },
        { id: 85, label: "فیرورق" },
        { id: 86, label: "قره ضیاءالدین" },
        { id: 87, label: "قطور" },
        { id: 88, label: "قوشچی" },
        { id: 89, label: "کشاورز" },
        { id: 90, label: "گردکشانه" },
        { id: 91, label: "ماکو" },
        { id: 92, label: "محمدیار" },
        { id: 93, label: "محمودآباد" },
        { id: 94, label: "مهاباد" },
        { id: 95, label: "میاندوآب" },
        { id: 96, label: "میرآباد" },
        { id: 97, label: "نالوس" },
        { id: 98, label: "نقده" },
        { id: 99, label: "نوشین" },
      ],
    },
    {
      id: 3,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 4,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 5,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 6,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 7,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 8,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 9,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 10,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 11,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 12,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 13,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 14,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 15,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 16,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 17,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 18,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 19,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 20,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 21,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 22,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 23,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 24,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 25,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 26,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 27,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 28,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 29,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 30,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
    {
      id: 31,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
  ];
  const findCities = (stateId) => {
    return allCities.find((item, index) => item.id === stateId).cities;
  };
  const [cities, setCities] = useState(findCities(1));
  // console.log(allCities.find((item, index) => item.id === 1).cities);

  return (
    <>
      <Box height="80vh" display="flex" flexDirection="column">
        <Box height="100%" sx={{ overflowY: "scroll", marginBottom: "60px" }}>
          <Formik
            initialValues={{
              location,
              address: "",
              state: null,
              city: null,
              unit: "",
              vahed: "",
              postalCode: "",
            }}
            validationSchema={addressSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form autoComplete="off">
                <CacheProvider value={cacheRtl}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box mt={1} px={2} sx={{ direction: "rtl" }}>
                      <Field name="address">
                        {({ field }) => (
                          <TextField
                            {...field}
                            color="primary"
                            id="address"
                            label="نشانی"
                            multiline
                            maxRows={2}
                            padding="1rem"
                            fullWidth
                            dir="rtl"
                            error={touched.address && Boolean(errors.address)}
                            helperText={touched.address && errors.address}
                          />
                        )}
                      </Field>
                    </Box>
                    <Box
                      color="dodgerblue"
                      display="flex"
                      alignItems="center"
                      px={2}
                      sx={{ cursor: "pointer", width: "fit-content" }}
                      onClick={() => {
                        setShowForm(false);
                      }}
                    >
                      <Typography>اصلاح موقعیت مکانی روی نقشه</Typography>
                      <BiChevronLeft size={25} />
                    </Box>
                    <Divider />
                  </Box>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1}>
                        <Field name="state">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.state}
                              isOptionEqualToValue={(option, value) =>
                                option.value === value.value
                              }
                              onChange={(event, newValue) => {
                                setFieldValue("state", newValue.label);
                                setCities(findCities(newValue.id));
                              }}
                              options={allStates}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="استان"
                                  variant="outlined"
                                  error={touched.state && Boolean(errors.state)}
                                  helperText={touched.state && errors.state}
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1}>
                        <Field name="city">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.city}
                              isOptionEqualToValue={(option, value) =>
                                option.value === value.value
                              }
                              onChange={(event, newValue) => {
                                setFieldValue("city", newValue.label);
                              }}
                              options={cities}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="شهر"
                                  variant="outlined"
                                  error={touched.city && Boolean(errors.city)}
                                  helperText={touched.city && errors.city}
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="unit">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="unit"
                              label="پلاک"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              error={touched.unit && Boolean(errors.unit)}
                              helperText={touched.unit && errors.unit}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="vahed">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="vahed"
                              label="واحد"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              // error={Boolean(errors.vahed)}
                              // helperText={errors.vahed}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box px={2} pt={1} sx={{ direction: "rtl" }}>
                        <Field name="postalCode">
                          {({ field }) => (
                            <TextField
                              {...field}
                              color="primary"
                              id="postalCode"
                              label="کدپستی"
                              multiline
                              maxRows={2}
                              padding="1rem"
                              fullWidth
                              dir="rtl"
                              error={
                                touched.postalCode && Boolean(errors.postalCode)
                              }
                              helperText={
                                touched.postalCode && errors.postalCode
                              }
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box
                    width="100%"
                    height="60px"
                    position="fixed"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bottom="0"
                    zIndex={2}
                    sx={{ boxShadow: " 0px 0px 0px #888, 0px -2px 5px #888" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "90%",
                        py: "0.7rem",
                        borderRadius: "0.6rem",
                      }}
                      type="submit"
                    >
                      ثبت آدرس
                    </Button>
                  </Box>
                </CacheProvider>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
