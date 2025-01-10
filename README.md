# Pokemon Data Website

## Description
This is a web application that displays detailed information about various Pokémons, including their speed, attacks, and other attributes. The website also includes a search functionality that allows users to find specific Pokémons quickly by their name.

## Features
- **Pokémon Information**: Displays comprehensive details about each Pokémon, such as speed, attacks, and other attributes.
- **Search Functionality**: Enables users to search for a specific Pokémon by name.
- **User-Friendly Interface**: Simple and intuitive UI for easy navigation and interaction.

## Technologies Used
- **Frontend**: React.js for building the user interface.
- **API**: Pokémon data is fetched from [PokéAPI](https://pokeapi.co/api/v2/pokemon?limit=100) or a similar Pokémon data source.
- **Styling**: CSS for styling and responsive design.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon-data-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and visit:
   ```
   http://localhost:5173
   ```
3. Browse through the list of Pokémons or use the search bar to find specific Pokémons.

## How to Use
1. Open the application in your browser.
2. Browse through the displayed Pokémon list to view their stats.
3. Use the search bar at the top of the page to find a specific Pokémon by typing its name.
4. Click on a Pokémon to view detailed information.

## Folder Structure
```
pokemon-data-website/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx 
│   ├── Index.css
│   ├── main.jsx
│   ├── Pokemon.jsx
│   └── PokemonCard.jsx
├── package.json
└── README.md
```

### Acknowledgments
- Special thanks to [PokéAPI](https://pokeapi.co/api/v2/pokemon?limit=100) for providing the data used in this application.

Happy coding! :sparkles: