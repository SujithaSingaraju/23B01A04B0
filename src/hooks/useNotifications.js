import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { Log } from "../utils/logger";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications();

        setNotifications(data.notifications ?? []);
        setTotal(data.total ?? 0);

        // await Log(
        //   "frontend",
        //   "info",
        //   "hook",
        //   "Notifications loaded successfully"
        // );

        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong");

        // await Log(
        //   "frontend",
        //   "error",
        //   "hook",
        //   "Failed to load notifications"
        // );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const totalPages = Math.ceil(total / 10);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}