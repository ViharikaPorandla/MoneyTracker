document.getElementById('add-expense-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
  
    try {
      const res = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, description }),
      });
  
      const data = await res.json();
      addToList(data);
    } catch (err) {
      console.error(err);
    }
  });
  
  function addToList(expense) {
    const list = document.getElementById('list');
    const item = document.createElement('li');
    item.textContent = `${expense.description}: $${expense.amount}`;
    list.appendChild(item);
  }
  