import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { 
  FormControl,
  FormErrorMessage,
  Select,
  Input,
  Button
} from '@chakra-ui/react';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { useNavigate } from "react-router-dom";


function BookingFrom() {
  const navigate = useNavigate();
  const { isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      name: "",
      email: "",
      occasion: "birthday"
    },
    onSubmit: async (values) => {
      await submit("/submit", values);
      onOpen(response.type, response.message);
      await wait(500);
      navigate("/reservation-success");
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number().min(1, "Guests must be greater than or equal to 1").max(10, "Guests must be less than or equal to 10").required("Guests is required"),
      email: Yup.string().email().required("Email is required"),
      name: Yup.string().required("Name is required"),
      occasion: Yup.string().required(),
    }),
  });

  return (
    <div className="bookingContainer">
      <form className="bookingForm" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
          <label htmlFor="res-date">Choose date</label>
          <Input type="date" id="date" name="date" {...formik.getFieldProps('date')}/>
          <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
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
          <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
          <label htmlFor="guests">Number of guests</label>
          <Input type="number" placeholder="1 - 10" min="1" max="10" id="guests" name="guests" {...formik.getFieldProps('guests')}/>
          <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
          <label htmlFor="occasion">Occasion</label>
          <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
          </Select>
          <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <Button className="actionBtn" colorScheme='yellow' fontSize='14px' type="submit" width="full" isLoading={isLoading}>
          Make your reservation
        </Button>
      </form>
    </div>
  );
}

export default BookingFrom;