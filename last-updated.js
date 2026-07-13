(function () {
  const lastUpdatedElement = document.getElementById("last-updated");

  if (!lastUpdatedElement) {
    return;
  }

  const cacheKey = "hcm-last-updated";
  const cacheMaxAgeMs = 6 * 60 * 60 * 1000; // 6 hours
  const requestTimeoutMs = 5000;

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

      return {
        date: cached.date,
        savedAt: cached.savedAt,
        isFresh: Date.now() - cached.savedAt <= cacheMaxAgeMs
      };
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

  const cached = readCachedDate();

  if (cached && cached.isFresh) {
    try {
      setLastUpdated(cached.date);
      return;
    } catch {
      // If cached data is bad, continue to fetch.
    }
  }

  let controller = null;
  let timeout = null;

  if ("AbortController" in window) {
    controller = new AbortController();

    timeout = window.setTimeout(function () {
      controller.abort();
    }, requestTimeoutMs);
  }

  fetch(githubCommitsUrl, {
    signal: controller ? controller.signal : undefined,
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
      const dateString =
        data?.[0]?.commit?.committer?.date ||
        data?.[0]?.commit?.author?.date;

      if (!dateString) {
        throw new Error("Unexpected GitHub API response");
      }

      setLastUpdated(dateString);
      writeCachedDate(dateString);
    })
    .catch(function () {
      if (cached && cached.date) {
        try {
          setLastUpdated(cached.date);
          return;
        } catch {
          // Fall through to fallback message.
        }
      }

      lastUpdatedElement.textContent = "Recently";
    })
    .finally(function () {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    });
})();