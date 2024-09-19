
import { connectDB } from "@/Lib/connectDB";

export const POST = async (request) => {
    try {
        const newBooking = await request.json();

        const db = await connectDB();
        const bookingCollection = db.collection('bookings');

        const res = await bookingCollection.insertOne(newBooking);

        return new Response(JSON.stringify({ message: 'Booked Successfully' }), { status: 200 });
    } catch (error) {
        console.error("Booking error:", error);
        return new Response(JSON.stringify({ message: 'Something went wrong' }), { status: 400 });
    }
}
