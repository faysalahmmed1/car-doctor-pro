import { connectDB } from "@/Lib/connectDB"
import { ObjectId } from "mongodb";





// Get Methods
export const GET = async (request, { params }) => {

    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {

        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params.id) })
        return Response.json({ message: 'booking found', response: resp });
    } catch (error) {
        return Response.json({ message: 'somethings want wrongs' });

    }

}

//Patch Methods
export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    const updateDoc = await request.json(); 

    try {
        const resp = await bookingsCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updateDoc
                }
            },
            {
                upsert: true,
            }
        );
        return new Response(JSON.stringify({
            message: 'Booking updated successfully',
            response: resp
        }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Something went wrong', error }), { status: 500 });
    }
};

//delete methods
export const DELETE = async (request, { params }) => {

    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    try {

        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) })
        return Response.json({ message: 'delete the booking', response: resp });
    } catch (error) {
        return Response.json({ message: 'somethings want wrongs' });

    }

}

