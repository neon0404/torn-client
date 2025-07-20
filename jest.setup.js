beforeEach(async () => {
  // Delay to avoid hitting 100 RPM limit TODO: Review and find a way to use internal rate limiter
  await new Promise((resolve) => setTimeout(resolve, 650));
});
