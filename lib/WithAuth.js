import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "./session";

export function withAuth(gssp) {
  return withIronSessionSsr(async (context) => {
    const user = context.req.session.user;

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    // Injeta o `user` nos `pageProps`
    const result = await gssp(context);
    return {
      ...result,
      props: {
        ...(result.props || {}),
        user,
      },
    };
  }, sessionOptions);
}
