# README.md file for Content Brief Generator Frontend

## Content Brief Generator Frontend

This is the **frontend** application for the Content Brief Generator tool, which enables users to generate high-quality content briefs for any topic. Built with **React** and styled using **Tailwind CSS**, this application provides a user-friendly interface to interact with the backend API and display content in a structured and formatted way.

## 🚀 Live Demo
Frontend URL: [Content Brief Generator Frontend](https://content-brief-generator-frontend.vercel.app/)

## 🌟 Features
 - **Dynamic Content Brief Generation**: Submit a topic to receive a detailed content brief.
 - **Formatted Output**: Highlights headings, subheadings, and external links for better readability.
 - **Loading Indicator**: Displays a popup while the content brief is being generated.
 - **Responsive Design**: Optimized for both desktop and mobile devices.
 - **Error Handling**: User-friendly messages in case of API errors or failures.

## 🛠️ Technologies Used
 - **React**: Component-based UI framework.
 - **Tailwind CSS**: Utility-first CSS framework for styling.
 - **React Helmet**: For managing the document head and meta tags.

## 📝 Prerequisites
 - Node.js installed (v14+ recommended)
 - A compatible browser (Google Chrome, Firefox, etc.)

## 📦 Installation and Setup
## 1. Clone the repository:
git clone https://github.com/yourusername/content-brief-generator-frontend.git

## 2. Navigate to the project directory:
cd content-brief-generator-frontend

## 3. Install dependencies:
npm install

## 4. Start the development server:
npm start

## 5. Open your browser and visit:
http://localhost:3000

## 🔗 Backend Integration
 This frontend interacts with the backend API hosted at:

## Backend URL
 The /generate-brief endpoint processes the provided topic and returns the generated content brief.

## 🖼️ Folder Structure
 content-brief-generator-frontend/
 ├── public/            # Public assets
 ├── src/               # Source code
 │   ├── App.js         # Main component
 │   ├── index.js       # Entry point
 │   └── styles/        # Styling files
 ├── README.md          # Project documentation
 ├── package.json       # Project configuration
 └── tailwind.config.js # Tailwind CSS configuration

## 🚧 Key Components
 - App.js: Contains the main logic for user input, API calls, and rendering the output.
 - renderFormattedContent(): Formats the generated content with headings, subheadings, and links.
 - Popup Handling: Displays a modal popup while the content is loading.

## 🔍 How to Use
 - Navigate to the live demo or run the project locally.
 - Enter a topic (e.g., "The Future of Remote Work") in the input field.
 - Click the "Generate" button.
 - Wait for the content brief to be generated and displayed on the screen.

## 🛡️ Error Handling
 - If the backend API fails to respond, an error message is displayed to the user.
 - Logs errors in the console for debugging purposes.

## 📄 License
 This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

## 🎉 Happy Generating!
