# WEEK-1

## Overview

AI_BOT is an AI-powered Study Assistant built using Node.js, Express.js, and the Google Gemini API. The application accepts user input, sends it to a Large Language Model (LLM), and displays the generated response based on the selected feature.

## Features

### Explain a Concept

Provides a simple explanation of any topic entered by the user.

### Summarize Text

Converts long text into concise bullet-point summaries.

### Generate Quiz Questions

Creates quiz questions based on the provided topic or content.

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* Google Gemini API
* dotenv
* cors

## Usage of env for protecting the API key

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
```
`

## How It Works

1. User selects a feature.
2. User enters text.
3. The frontend sends the request to the backend.
4. The backend generates an appropriate prompt.
5. Gemini processes the prompt.
6. The response is returned and displayed on the webpage.

## Assignment Requirements Completed

* Takes text input from the user
* Sends input to an LLM API (Google Gemini)
* Displays the model response
* Handles empty inputs gracefully
* Includes three custom AI features:

  * Explain a Concept
  * Summarize Text
  * Generate Quiz Questions

## Project Structure

WEEK-1/

├── public/

│ ├── index.html

│ ├── style.css

│ └── script.js

├── server.js

├── .env

├── package.json

└── README.md
## Author 
Priyahasini Bezawada
