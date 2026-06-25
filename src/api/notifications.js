export async function fetchNotifications() {
  return {
    notifications: [
      {
        id: 1,
        title: "Placement Drive",
        message: "TCS placement drive starts tomorrow",
        type: "Placement",
      },
      {
        id: 2,
        title: "Exam Result",
        message: "Semester results announced",
        type: "Result",
      },
      {
        id: 3,
        title: "College Fest Events",
        message: "Registrations are opened",
        type: "Event",
      },
    ],
    total: 3,
  };
}