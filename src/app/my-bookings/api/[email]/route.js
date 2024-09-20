import { connectDB } from "@/Lib/connectDB";

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const Bookings = await bookingCollection.find({ email: params.email }).toArray();
        return new Response(JSON.stringify({Bookings }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to fetch bookings" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
