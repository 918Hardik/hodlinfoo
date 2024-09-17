document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://hodlinfoo-r7fhb1wtc-hardiks-projects-f5cb8bf5.vercel.app/api/tickers');
      const tickers = await response.json();
  
      const tableBody = document.getElementById('ticker-table');
      tickers.forEach(ticker => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ticker.name}</td>
          <td>${ticker.last}</td>
          <td>${ticker.buy} / ${ticker.sell}</td>
          <td>${ticker.volume}</td>
          <td>${ticker.base_unit}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (err) {
      console.error('Error fetching data', err);
    }
  });
  
