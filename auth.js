import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {

            },
            authorize: async (credentials) => {
                let users = null;

                users = {
                    name: 'abunanserkayes',
                    email: 'venom@gmail.com',
                }
                if (!users) {
                    console.log('invalid credentials');
                    return null;
                }
                return users;
            }
        })
    ],

})