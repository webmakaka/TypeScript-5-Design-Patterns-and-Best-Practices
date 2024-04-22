function triggerNotification(emailClient, logger) {
  if (logger && typeof logger.log === "function") {
    logger.log("Sending email")
  }
  if (emailClient && typeof emailClient.send === "function") {
    emailClient.send("Message Sent")
  }
}

// This call might fail due to swapped parameter order (no type safety)
triggerNotification({ log: () => console.log("Logger call") }, { send: (msg) => console.log(msg) })
