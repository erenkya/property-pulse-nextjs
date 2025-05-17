import GoogleGrovider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleGrovider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoked on successfull sign in
    async signIn({ profile }) {
      //1.Connect to the database
      //2.Check if user exist
      //3.If not create user
      //4.Return true to allow sign in
    },
    async session({ session }) {},
  },
};
