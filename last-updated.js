const lastUpdatedElement = document.getElementById('last-updated');

if (lastUpdatedElement) {
  fetch('https://api.github.com/repos/HampdenCountyMesh/HampdenCountyMesh.github.io/commits?sha=main&per_page=1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('GitHub API request failed');
      }

      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data) || !data[0]?.commit?.committer?.date) {
        throw new Error('Unexpected GitHub API response');
      }

      const date = new Date(data[0].commit.committer.date);

      lastUpdatedElement.textContent = date.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      });
    })
    .catch(() => {
      lastUpdatedElement.textContent = 'Unavailable';
    });
}