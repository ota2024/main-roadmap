import { HomeIcon, Sun } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <header className="relative">
        <h1 className="text-xl font-semibold mb-1">roadmap house</h1>
        <div className="flex items-center gap-1.5 mb-2">
          <p className="text-gray-700 text-sm font-light">web testing</p>
          <HomeIcon size={16} />
        </div>
        <div className="absolute top-0 right-0 flex items-center space-x-4 mt-1">
          <a
            href="https://twitter.com"
            className="text-black text-sm no-underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            className="text-black text-sm no-underline"
          >
            GitHub
          </a>
          <button className="bg-none border-none text-black cursor-pointer">
            <Sun size={18} />
          </button>
        </div>
        <nav>
          <h2 className="font-mono text-lg tracking-tighter mt-10 mb-4">
            projects
          </h2>
          <ul>
            <li className="mb-4">
              <a
                href="" // react.<current url>
                className="text-black text-sm underline underline-offset-4"
              >
                roadmap-react
              </a>
              <div className="description text-neutral-500 text-sm mt-1.5">
                a vite react roadmap editor with authentication
              </div>
            </li>
            <li className="mb-4">
              <a
                href="" // .<current url>
                className="text-black text-sm underline underline-offset-4"
              >
                roadmap-next
              </a>
              <div className="description text-neutral-500 text-sm mt-1.5">
                a next.js roadmap editor with authentication
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
