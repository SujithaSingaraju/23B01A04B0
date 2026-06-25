const API_URL = "http://4.224.186.213/evaluation-service/logs";

const ACCESS_TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWEwNGIwQHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4MDY2OCwiaWF0IjoxNzgyMzc5NzY4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjlhY2ZlNmMtMTQ2MC00YTQyLWE4NTMtMWQ4MDk5MjI4MTdhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2luZ2FyYWp1IHZlbmthdGEgc3VqaXRoYSIsInN1YiI6ImQ2ZGE0NTNmLTk3OTEtNDM1ZS1hYzBjLWVlOTVjNDU1MmQ2NCJ9LCJlbWFpbCI6IjIzYjAxYTA0YjBAc3ZlY3cuZWR1LmluIiwibmFtZSI6InNpbmdhcmFqdSB2ZW5rYXRhIHN1aml0aGEiLCJyb2xsTm8iOiIyM2IwMWEwNGIwIiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiZDZkYTQ1M2YtOTc5MS00MzVlLWFjMGMtZWU5NWM0NTUyZDY0IiwiY2xpZW50U2VjcmV0IjoiVUhXR0J0c3VZWGtqV2phZCJ9.jLqSq6iQ2qwELaFN0qgqvtMNicXSz0dDPHF6Ju87kR4"
export const Log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Log API Error:", data);
      return;
    }

   console.log("Log Created:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Logging Failed:", error);
  }
};