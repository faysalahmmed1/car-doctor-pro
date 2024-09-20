import { connectDB } from "@/Lib/connectDB"
import { ObjectId } from "mongodb";

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
