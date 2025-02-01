const quoteDisplay = document.getElementsById('qouteDisplay');
const addQouteButton = document.getElementsById('addQouteButton');
const categoryFilter = document.getElementsById('categoryFilter');
const notificationBar = document.getElementsById('notificationBar');

const quotes = [
    {text: "na only me know where e dey pain me", category: "Inspiration"}
    {text: "na because you never wear my shoe na why you no know where e dey pain me", category: "Motivation"}
];

function showRandomQoute() {
    const randomIndex = Math.floor(Math.random() * quote.Length);
    const randomQoute = qoute[ramdomIndex];
    quoteDisplay.textContent = ${randomQoute.text} - ${randomQoute.category};

    sessionStorage.setItem("latestViewQoute", randomIndex);
}