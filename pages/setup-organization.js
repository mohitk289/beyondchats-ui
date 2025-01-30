import { useState } from "react";

export default function SetupOrganization() {
  const [website, setWebsite] = useState("");
  const dummyPages = [
    { url: "https://example.com/home", status: "Completed" },
    { url: "https://example.com/about", status: "Pending" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-darkText mb-4">Setup Organization</h2>
        <input type="text" placeholder="Company Name" className="w-full p-2 mb-3 border rounded" />
        <input
          type="url"
          placeholder="Website URL"
          className="w-full p-2 mb-3 border rounded"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <textarea placeholder="Company Description" className="w-full p-2 mb-3 border rounded"></textarea>
        <button className="w-full bg-primary text-white py-2 rounded hover:opacity-80">
          Continue
        </button>

        <h3 className="mt-6 text-lg font-semibold text-darkText">Scraped Pages</h3>
        <ul className="mt-2">
          {dummyPages.map((page, index) => (
            <li key={index} className="p-2 border rounded my-2 flex justify-between">
              {page.url} <span className="font-bold">{page.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
