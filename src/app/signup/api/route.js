import { connectDB } from "@/Lib/connectDB";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'user in exists' }, { status: 304 })
        }
        const resp = await userCollection.insertOne(newUser);
        return Response.json({ message: 'user in Created' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'something want wrong', error }, { status: 500 })

    }

}