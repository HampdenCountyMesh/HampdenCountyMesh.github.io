fetch('https://api.github.com/repos/HampdenCountyMesh/HampdenCountyMesh.github.io/commits?per_page=1')
  .then(response => response.json())
  .then(data => {
    const date = new Date(data[0].commit.committer.date);

    document.getElementById('last-updated').textContent =
      date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      });
  })
  .catch(() => {
    document.getElementById('last-updated').textContent = 'Unavailable';
  });
