import React, { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [topic, setTopic] = useState("");
  const [contentBrief, setContentBrief] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowPopup(true);

    try {
      const response = await fetch("http://localhost:5000/generate-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch content. Please try again.");
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.brief) {
        setContentBrief(data.brief);
      } else {
        throw new Error("No content generated. Check server response.");
      }
    } catch (error) {
      console.error("Error generating content brief:", error);
      setContentBrief("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowPopup(false), 700);
    }
  };

  const renderFormattedContent = (content) => {
    const unwantedSections = [
      "Tone:",
      "Keywords:",
      "SEO Optimization:",
      "Meta Description:",
    ];
  
    const sections = content
      .split("\n")
      .filter(
        (line) =>
          !unwantedSections.some((keyword) => line.startsWith(keyword)) &&
          line.trim() !== ""
      );
  
    if (sections.length === 0) return null;
  
    const title = sections.shift().trim().replace(/^##\s*/, "");
  
    return (
      <>
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6 border-b-2 pb-2">
          {title}
        </h1>
        {sections.map((section, index) => {
          // Handling numbered headings (e.g., I., II., III.)
          if (
            section.startsWith("I.") ||
            section.startsWith("II.") ||
            section.startsWith("III.") ||
            section.startsWith("IV.") ||
            section.startsWith("V.")
          ) {
            return (
              <h2
                key={index}
                className="text-xl font-bold text-gray-800 mt-5 mb-3"
              >
                {section.trim()}
              </h2>
            );
          }
  
          // Handling bold content wrapped in ** **
          if (/\*\*(.+?)\*\*/.test(section)) {
            const boldedContent = section.replace(
              /\*\*(.+?)\*\*/,
              "<b>$1</b>"
            );
            return (
              <p
                key={index}
                className="text-gray-700 mb-2"
                dangerouslySetInnerHTML={{ __html: boldedContent }}
              ></p>
            );
          }
  
          // Handling subheadings with colon (e.g., "Target Audience: Developers")
          else if (section.includes(":")) {
            const [beforeColon, afterColon] = section.split(":");
            return (
              <p key={index} className="text-gray-700 mb-2">
                <b>{beforeColon.trim()}:</b> {afterColon.trim()}
              </p>
            );
          }
  
          // Handling external links (e.g., [Google](https://www.google.com))
          else if (section.includes("[") && section.includes("]")) {
            const linkMatch = section.match(/\[(.+?)\]\((https?:\/\/.+?)\)/);
            if (linkMatch) {
              const [_, text, url] = linkMatch;
              return (
                <p key={index} className="text-gray-700 mb-2">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {text}
                  </a>
                </p>
              );
            }
          }
  
          // Handling bold subheadings without ** ** (e.g., *Biryani Recipe* becomes bold)
          else if (section.startsWith("") && section.endsWith("")) {
            return (
              <h3
                key={index}
                className="text-lg font-semibold text-gray-800 mt-3 mb-2"
              >
                <b>{section.replace(/\\/g, "").trim()}</b>
              </h3>
            );
          }
  
          // Regular text
          else {
            return (
              <p key={index} className="text-gray-700 mb-2">
                {section.trim()}
              </p>
            );
          }
        })}
      </>
    );
  };
  
  
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Content Brief Generator - Generate High-Quality Content Briefs</title>
        <meta
          name="description"
          content="Easily generate detailed content briefs for any topic with our Content Brief Generator tool."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-green-600 mb-6">Content Brief Generator</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-6 w-3/4 sm:w-2/4 lg:w-1/3"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="topic"
          >
            Enter a Topic
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            id="topic"
            type="text"
            placeholder="e.g., The Future of Remote Work"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>

      {contentBrief && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow w-4/5 lg:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Generated Content Brief
          </h2>
          <div>{renderFormattedContent(contentBrief)}</div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            {isLoading ? (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Generating Content Brief...
                </h2>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
                  <span className="text-gray-500">Generating content...</span>
                </div>
              </>
            ) : (
              <h2 className="text-lg font-semibold mb-4">Content Loaded!</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
