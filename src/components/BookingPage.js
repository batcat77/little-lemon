import BookingFrom from "./BookingForm";
import { ChakraProvider } from "@chakra-ui/react"

function BookingPage() {
  return (
    <main className="reservation">
      <div className="reservationBanner">
        <h2>Reserve a Table</h2>
      </div>
      <ChakraProvider>
        <BookingFrom/>
      </ChakraProvider>
    </main>
  )
}

export default BookingPage;