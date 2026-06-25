import { useEffect } from "react";
import { Log } from "./utils/logger";
import { NotificationsPage } from "./pages/NotificationsPage";

function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Application started"
    );
  }, []);

  return <NotificationsPage />;
}

export default App;