// Array of quote objects
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivational" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Inspirational" },
    { text: "To handle yourself, use your head; to handle others, use your heart.", category: "Leadership" }
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
}

// Add event listener for showing a new quote
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('New quote added successfully!');
    } else {
        alert('Please enter both a quote and a category.');
    }
}
