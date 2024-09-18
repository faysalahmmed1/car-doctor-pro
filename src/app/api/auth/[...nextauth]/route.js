import { connectDB } from '@/Lib/connectDB';
import NextAuth from 'next-auth/next';
import bcrypt from "bcrypt";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });
                if (!currentUser) {
                    return null;
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null;
                }
                return currentUser;
            }
        }),
    ],

    pages: {
        signIn: '/login'
    },

    // callbacks: {
    //     async signIn({ user, account }) {
    //         if (account.provider === 'google' || account.provider === 'github') {
    //             const { name, email, img } = user;
    //             try {
    //                 const db = connectDB();
    //                 const userCollectino = db.collection('users');
    //                 const userExist = await userCollectino.findOne(user);
    //                 if (!userExist) {
    //                     const res = await userCollectino.insertOne(user);
    //                     return user;

    //                 } else {
    //                     return user;
    //                 }

    //             }
    //             catch (error) {
    //                 console.log(error)

    //             }
    //         }
    //         else {
    //             return user
    //         }
    //     }
    // }




});
export { handler as GET, handler as POST }