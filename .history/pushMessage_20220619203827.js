// push message

if (!("ServiceWorker" in window)) {
  return;
}

if (!("PushManager" in window)) {
  return;
}
