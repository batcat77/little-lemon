import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { 
  FormControl,
  Select,
  Input,
  Box
} from '@chakra-ui/react';


function BookingFrom() {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "birthday"
    },
    onSubmit: async (values) => {
      // await submit("/submit", values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required(),
      time: Yup.string().required(),
      guests: Yup.number().min(1).max(10).required(),
      occasion: Yup.string().required(),
    }),
  });

  return (
    <div className="bookingContainer">
      <form className="bookingForm" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
          <label htmlFor="res-date">Choose date</label>
          <Input type="date" id="date" name="date" {...formik.getFieldProps('date')}/>
        </FormControl>
        <FormControl isInvalid={formik.touched.time && formik.errors.time}>
          <label htmlFor="res-time">Choose time</label>
          <Select placeholder='Select time' id="time" name="time" {...formik.getFieldProps('time')}>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
          </Select>
        </FormControl>
        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
          <label htmlFor="guests">Number of guests</label>
          <Input type="number" placeholder="1 - 10" min="1" max="10" id="guests" name="guests" {...formik.getFieldProps('guests')}/>
        </FormControl>
        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
          <label htmlFor="occasion">Occasion</label>
          <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
          </Select>
        </FormControl>
        <Box className="actionBtn" as='button' fontSize='14px' type="submit" width="full">
          Make your reservation
        </Box>
      </form>
    </div>
  );
}

export default BookingFrom;