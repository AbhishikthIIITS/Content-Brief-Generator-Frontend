#!/bin/bash

# Create a README.md file with the content

cat <<EOL > README.md
# 📑 Content Brief Generator Frontend

Welcome to the **Content Brief Generator Frontend**! This application allows users to generate detailed, high-quality content briefs for any topic. Built using **React** and styled with **Tailwind CSS**, it offers a seamless and responsive user experience for content generation.

---

## 🚀 Live Demo

Check out the live version here:  
[👉 Content Brief Generator Frontend](https://content-brief-generator-frontend.vercel.app/)

---

## 🌟 Features

- **Dynamic Content Brief Generation**: Submit a topic to receive a comprehensive content brief.  
- **Formatted Output**: Outputs with clear headings, subheadings, and links for better readability.  
- **Loading Indicator**: Interactive popup to show progress while generating content.  
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.  
- **Error Handling**: Friendly error messages for any API failures or issues.  

---

## 🛠️ Technologies Used

- **React**: For building a component-based user interface.  
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.  
- **React Helmet**: Helps manage the document head for SEO and meta tags.  

---

## 📝 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14+ recommended)  
- A modern browser (Google Chrome, Firefox, etc.)  

---

## 📦 Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/content-brief-generator-frontend.git
   \`\`\`

2. **Navigate to the project directory**:
   \`\`\`bash
   cd content-brief-generator-frontend
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

4. **Start the development server**:
   \`\`\`bash
   npm start
   \`\`\`

5. **Access the application**:  
   Open your browser and visit:  
   [http://localhost:3000](http://localhost:3000)

---

## 🔗 Backend Integration

This frontend interacts with the backend API to generate content briefs.

- **Backend URL**: [Specify your backend URL here]  
- **Endpoint**: \`/generate-brief\` processes the topic and returns a detailed content brief.  

---

## 🖼️ Folder Structure

\`\`\`
content-brief-generator-frontend/
├── public/            # Public assets
├── src/               # Source code
│   ├── App.js         # Main component
│   ├── index.js       # Entry point
│   └── styles/        # Styling files
├── README.md          # Project documentation
├── package.json       # Project configuration
└── tailwind.config.js # Tailwind CSS configuration
\`\`\`

---

## 🚧 Key Components

- **App.js**: Main logic for user input, API calls, and rendering the output.  
- **renderFormattedContent()**: Formats the output with proper headings, subheadings, and links.  
- **Popup Handling**: Displays a modal popup while the content is being generated.  

---

## 🔍 How to Use

1. Navigate to the live demo or run the project locally.  
2. Enter a topic (e.g., *The Future of Remote Work*) in the input field.  
3. Click the **Generate** button.  
4. Wait for the content brief to be generated and displayed.  

---

## 🛡️ Error Handling

- If the backend API fails, the app displays a friendly error message.  
- Error details are logged in the browser console for debugging.  

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it as per the terms of the license.

---

## 🎉 Happy Generating!

Thank you for using the **Content Brief Generator**! Have feedback? Let us know and contribute to the project to make it even better.

---
EOL

echo "README.md file has been created successfully!"
