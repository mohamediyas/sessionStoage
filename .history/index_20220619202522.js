askForPermission();

const askForPermission = () => {
  if (Notification.permission === "granted") {
    createNotification(
      "Wow!, this is great",
      "created by @study.tonight",
      "https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png"
    );
  } else {
    Notification.requestPermission((permission) => {
      if (permission == "granted") {
        createNotification(
          "Wow!, this is great",
          "created by @study.tonight",
          "https://www.studytonight.com/css/resource.v2/icons/studytonight/st-icon-dark.png"
        );
      }
    });
  }
};

function createNotification(title, text, icon) {
  const not = new Notification(title, {
    body: text,
    icon,
  });
}
