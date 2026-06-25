import { Card, CardContent, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {notification.title}
        </Typography>

        <Typography variant="body2">
          {notification.message}
        </Typography>

        <Typography variant="caption">
          {notification.type}
        </Typography>
      </CardContent>
    </Card>
  );
}