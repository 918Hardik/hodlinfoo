document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tickers');
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
  