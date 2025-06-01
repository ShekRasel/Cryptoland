import { useRoutes } from "react-router-dom";
import { routes } from "./routes/common.route";
export const App = () => {
  const router = useRoutes(routes);
  return <div>{router}</div>;
};
