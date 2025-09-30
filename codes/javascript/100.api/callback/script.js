function walking(onSuccess, onError) {
  const walk = true;

  if (walk) {
    // pass data to success callback
    onSuccess("Walking");
  } else {
    onError("Failed to walk");
  }
}

// invoke with inline (anonymous) functions
walking(
  result => console.log("Yay:", result),
  err => console.error("Oops:", err)
);