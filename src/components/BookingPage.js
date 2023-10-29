import BookingFrom from "./BookingForm";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";

function BookingPage() {
  return (
    <main className="reservation">
      <div className="reservationBanner">
        <h2>Reserve a Table</h2>
      </div>
      <ChakraProvider>
        <AlertProvider>
          <BookingFrom/>
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </main>
  )
}

export default BookingPage;