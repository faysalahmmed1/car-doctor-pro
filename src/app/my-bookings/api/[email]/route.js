import { connectDB } from "@/Lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const Bookings = await bookingCollection.find({ email: params.email }).toArray();
        return new NextResponse(JSON.stringify({Bookings }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: "Failed to fetch bookings" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
