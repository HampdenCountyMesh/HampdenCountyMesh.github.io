(function () {
  const lastUpdatedElement = document.getElementById("last-updated");

  if (!lastUpdatedElement) {
    return;
  }

  const cacheKey = "hcm-last-updated";
  const cacheMaxAgeMs = 6 * 60 * 60 * 1000; // 6 hours
  const githubCommitsUrl =
    "https://api.github.com/repos/HampdenCountyMesh/HampdenCountyMesh.github.io/commits?sha=main&per_page=1";

  function formatDate(dateString) {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return date.toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    });
  }

  function setLastUpdated(dateString) {
    lastUpdatedElement.textContent = formatDate(dateString);
  }

  function readCachedDate() {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey));

      if (!cached || !cached.date || !cached.savedAt) {
        return null;
      }

      const cacheAge = Date.now() - cached.savedAt;

      if (cacheAge > cacheMaxAgeMs) {
        return null;
      }

      return cached.date;
    } catch {
      return null;
    }
  }

  function writeCachedDate(dateString) {
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          date: dateString,
          savedAt: Date.now()
        })
      );
    } catch {
      // Ignore storage errors.
    }
  }

  const cachedDate = readCachedDate();

  if (cachedDate) {
    try {
      setLastUpdated(cachedDate);
      return;
    } catch {
      // If cached data is bad, continue to fetch.
    }
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(function () {
    controller.abort();
  }, 5000);

  fetch(githubCommitsUrl, {
    signal: controller.signal,
    headers: {
      Accept: "application/vnd.github+json"
    }
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API request failed");
      }

      return response.json();
    })
    .then(function (data) {
      const dateString = data?.[0]?.commit?.committer?.date;

      if (!dateString) {
        throw new Error("Unexpected GitHub API response");
      }

      setLastUpdated(dateString);
      writeCachedDate(dateString);
    })
    .catch(function () {
      lastUpdatedElement.textContent = "Not available";
    })
    .finally(function () {
      window.clearTimeout(timeout);
    });
})();