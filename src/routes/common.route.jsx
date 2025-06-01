import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PasswordReset from "../pages/PasswordReset";
import MailSuccess from "../pages/MailSuccess";
import Error from "../pages/Error";
import BlogGrid from "../pages/BlogGrid";
import SingleBlog from "../pages/SingleBlog";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "passwordReset",
        element: <PasswordReset />,
      },
      {
        path: "mailSusscess",
        element: <MailSuccess />,
      },
      {
        path: "errorPage",
        element: <Error />,
      },
      {
        path: "blogGrid",
        element: <BlogGrid />,
      },
      {
        path: "singleBlog",
        element: <SingleBlog />,
      },
    ],
  },
];
