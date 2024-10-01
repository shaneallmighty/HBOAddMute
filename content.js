// Wait for the page to fully load
window.onload = function () {
  // Set a shorter delay before starting to check for ads (e.g., 3 seconds)
  const initialDelay = 3000; // 3 seconds

  setTimeout(() => {
      // Function to check if the ad element is present
      const checkForAdElement = () => {
          // Select the ad element using the data-testid
          const adElement = document.querySelector('[data-testid="ad"]');
          const videoElement = document.querySelector('video');

          if (adElement && adElement.style.visibility === "visible" && adElement.style.display !== "none") {
              // Mute the video directly
              if (videoElement && videoElement.volume > 0) {
                  videoElement.volume = 0; // Mute the video
                  console.log("Ad detected, muting video directly...");
              }
          } else {
              // Unmute the video if there is no ad
              if (videoElement && videoElement.volume === 0) {
                  videoElement.volume = 1; // Set volume back to 100%
                  console.log("No ad detected, unmuting video directly...");
              }
          }
      };

      // Start checking for ads every 500 milliseconds (0.5 seconds)
      const adCheckInterval = setInterval(checkForAdElement, 500);

      // Optional: Clear the interval after a certain time (e.g., after 10 minutes)
      // setTimeout(() => clearInterval(adCheckInterval), 600000); // Clear after 10 minutes

      console.log(`Started checking for ads every 0.5 seconds after ${initialDelay / 1000} seconds.`);
  }, initialDelay);
};
