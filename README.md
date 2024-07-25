# Welcome to My Stable Diffusion UI AI Image Generating Project
This project integrates with the Stable Diffusion API to create a web application that allows users to generate images. Simply visit [Link](https://stable-diffusion-ui-git-main-mouayad2016s-projects.vercel.app/) and start inputting your queries to generate images.

## How to Use
- Visit the web application link provided above.
- Enter your query in the designated area to generate your desired image.

## Issues with API Key
If the application restricts access due to API key limitations, please contact me at [email](mailto:mouayad1998@hotmail.com). I will ensure the API key is updated so you can fully utilize this project.

## Running Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the GitHub Repository**
   - Pull the repository from GitHub to your local machine using:
     ```
     git clone https://github.com/Mouayad2016/Stable_Diffusion_UI
     ```

2. **Set Up Environment Variables**
   - Create a `.env` file in the root directory of your project.
   - Add the following line to the `.env` file:
     ```
     REACT_APP_API_KEY=<API_KEY>
     ```

3. **Install Dependencies**
   - Open your terminal in the project directory.
   - Run the following command to install the necessary dependencies:
     ```
     npm install
     ```

4. **Start the Application**
   - Once the dependencies are installed, start the application with:
     ```
     npm start
     ```

The application should now be running on `http://localhost:3000`. Visit this URL in your web browser to access the app.


## Project Architecture & Technologies

### Overview
This project leverages a React-based frontend framework to integrate with the Stable Diffusion API for image generation. The application structure and component breakdown ensure modular development and easy scalability.

### Project Structure
The application is organized into several directories and files structured for efficient development:
- **`node_modules/`**: Contains all the project dependencies installed via npm.
- **`public/`**: Stores static assets like images, favicon, and HTML templates.
  - `images/`: Organized subdirectories (`bg/`, `team/`) for background and team images.
- **`src/`**: Source files for the React components, hooks, state management, and styling.
  - `component/`: React components divided into subdirectories by functionality (e.g., `common/`, `gallery/`, `layout/`).
  - `state/`: Redux state management setup, including actions and reducers for image data.
  - `App.js`: Root component assembling various layout and functional components.
  - `index.js`: Entry point for React application, setting up the React DOM and Redux store.

### Key Technologies
- **React**: Utilized for building the user interface with hooks like `useState`, `useRef`, and `useEffect` for managing state and side effects.
- **Redux**: Manages state across the application, specifically for handling image data and API responses.
- **WebSocket**: Used in components to maintain a live connection with the server for real-time image generation.
- **Tailwind CSS**: Provides utility-first CSS framework for rapid UI development.
- **Environment Variables**: Configuration stored in `.env` for sensitive keys (like API keys).

### Core Functionality
- **Image Generation**: Users can input queries to generate images using the Stable Diffusion model, facilitated through WebSocket connections.
- **Dynamic UI Components**: Includes galleries, prompts, and layout management components that respond to state changes and user interactions.

### Running the Project
- Clone the repository and navigate into your project directory.
- Install dependencies using `npm install`.
- Start the development server with `npm start`.

This architecture ensures a clean separation of concerns, with components and state management logically organized to support maintainability and future development.

