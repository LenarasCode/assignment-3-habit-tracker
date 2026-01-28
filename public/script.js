const list = document.getElementById('habitList');
const form = document.getElementById('habitForm');

async function loadHabits() {
    const res = await fetch('/api/habits');
    const habits = await res.json();

    list.innerHTML = '';
    habits.forEach(habit => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${habit.title}</strong> (${habit.frequency})
            <br>
            <button onclick="deleteHabit('${habit._id}')">Delete</button>
        `;
        list.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const frequency = document.getElementById('frequency').value;

    await fetch('/api/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, frequency })
    });

    form.reset();
    loadHabits();
});

async function deleteHabit(id) {
    await fetch(`/api/habits/${id}`, { method: 'DELETE' });
    loadHabits();
}

loadHabits();
