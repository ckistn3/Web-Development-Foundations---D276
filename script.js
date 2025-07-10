const now = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);

document.getElementById('currentDateDisplay').innerHTML = formattedDate;