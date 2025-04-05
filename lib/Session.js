import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: "myapp_session",
  cookieOptions: {
    secure: true,
  },
};

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}
