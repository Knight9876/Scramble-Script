# Scramble Sprint

**"Scramble your way to the top!"**

## Description
Scramble Sprint is a fun and engaging game where users attempt to type their own name. The twist? Each key press generates a random letter, but the user must still correctly spell their name to finish. A timer tracks the completion time, and the leaderboard ranks players based on their speed.

## Features
- Random letter generator for every keystroke.
- Stopwatch to track the time taken.
- Dynamic leaderboard based on completion time.
- Fully responsive UI with a vibrant design.

## Technologies Used
- **Frontend**: HTML, CSS, TailwindCSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-typing-challenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd random-typing-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Deployment
1. Ensure the project is pushed to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Set up environment variables in Vercel if needed (e.g., database credentials).
4. Deploy the project with a single click.

## How to Play
1. Enter your name in the input field.
2. Each keystroke will generate a random letter, but you must still type your actual name.
3. The timer starts as soon as you begin typing and stops when you hit submit.
4. Check your rank on the leaderboard based on your completion time.

## File Structure
```
random-typing-challenge/
├── public/
│   └── assets/       # Images and other static files
├── views/        # EJS templates for UI
├── index.html       # Entry Point
├── .gitignore        # Ignored files for Git
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

## Contributions
Contributions are welcome! Feel free to fork this repository and submit a pull request with your changes.

Enjoy the challenge and see if you can outpace the randomness!
