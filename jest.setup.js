beforeEach(async () => {
  // E2E only: delay to stay under the 100 requests/minute limit across test files
  // (each file creates its own client, so the built-in rate limiter is not shared)
  const testPath = expect.getState().testPath ?? "";
  if (!/[\\/]tests[\\/]generated[\\/]/.test(testPath)) return;

  await new Promise((resolve) => setTimeout(resolve, 650));
});
