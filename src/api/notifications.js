const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWEwNGIwQHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4NDEyMiwiaWF0IjoxNzgyMzgzMjIyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2I5ZjBhY2YtMDk3Zi00NDBjLTlhZjAtNTMwNDc0YjY1MTA0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2luZ2FyYWp1IHZlbmthdGEgc3VqaXRoYSIsInN1YiI6ImQ2ZGE0NTNmLTk3OTEtNDM1ZS1hYzBjLWVlOTVjNDU1MmQ2NCJ9LCJlbWFpbCI6IjIzYjAxYTA0YjBAc3ZlY3cuZWR1LmluIiwibmFtZSI6InNpbmdhcmFqdSB2ZW5rYXRhIHN1aml0aGEiLCJyb2xsTm8iOiIyM2IwMWEwNGIwIiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiZDZkYTQ1M2YtOTc5MS00MzVlLWFjMGMtZWU5NWM0NTUyZDY0IiwiY2xpZW50U2VjcmV0IjoiVUhXR0J0c3VZWGtqV2phZCJ9.ypzCUHXYqJ0Z8JVJn4EJEEKnl3dCxOGFAZmhZP8ee00";

export async function fetchNotifications() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch notifications");
  }

  return {
    notifications: data.notifications || [],
    total: data.notifications?.length || 0,
  };
}