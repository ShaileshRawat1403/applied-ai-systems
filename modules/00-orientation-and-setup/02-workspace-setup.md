# 0.2 Workspace Setup

To complete this course, you must establish a clean, structured repository for your templates, notes, and lab submissions. We recommend managing your course folder as a Git repository, allowing you to track version changes and sync directly to platforms like GitBook or GitHub.

---

## 🛠️ Workspace Setup Checklist

Follow these steps to establish your workspace:

### 1. Repository Structure
Ensure your local project directory matches the structure below:
```text
applied-ai-systems-course/
├── README.md
├── SUMMARY.md
├── course-prd/
├── start-here/
├── modules/
│   ├── 00-orientation-and-setup/
│   └── ...
├── templates/
├── labs/
└── case-studies/
```

### 2. Editor & Tools
* **Markdown Editor:** Use an editor that supports Git sync and rendering (e.g., VS Code, Obsidian, Typora, or GitBook Web Editor).
* **Diagrams:** Ensure you have support for **Mermaid.js** diagrams (which we use to visualize agent flows and routing paths). VS Code has several extensions (like *Markdown Preview Mermaid Support*) that do this.
* **Terminal Environment:** Ensure you have basic CLI tools (Git, Node, or Python) installed for running optional validation scripts.

### 3. API Playground / Model Workspace (Optional)
While this course focuses on system design and documentation, we highly recommend setting up a developer account with at least one LLM API provider to run active validation:
* **Google Google AI Studio / Gemini API:** Excellent for structured JSON output formatting and high context windows.
* **Anthropic Console:** Great for testing strict reasoning boundaries and prompt formatting.
* **OpenAI Developer Platform:** Good for testing tool calling and function schemas.

---

## 🔒 A Note on API Key Security

If you write code or scripts to test templates:
* **NEVER** commit API keys or secret tokens to your Git repository.
* Always use a `.env` file or environment variables to load keys at runtime.
* Add a `.gitignore` file to your root directory:
  ```text
  # Local credentials
  .env
  *.log
  .DS_Store
  node_modules/
  ```

Let's move on to selecting your course project.
