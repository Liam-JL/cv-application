# CV Builder (React Project)

A customizable CV/resume builder app built with React — [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application).

## Project Overview

- **Sections & Components**:
  - **About Me**: Name, title, and bio — editable with live preview.
  - **Contact**: Email, phone, location, and social links — editable and displayed in a grid.
  - **Work Experience**: Multiple entries with editable job title, company, location, dates, and bullet points.
  - **Skills**: Dynamic list with add/remove functionality and styled skill tags.
  - **Education**: Add multiple qualifications, each editable with dates and location.
  
- **Editing UI**:
  - Each section has **Edit/Submit** buttons to toggle between input fields and display mode.
  - All editing is controlled via parent state for consistent UI behavior.

- **State Management**:
  - Data is stored in component state via `useState`.
  - User input is handled through callbacks like `editField`.

- **Persistence**:
  - All data is synced to `localStorage` using `useEffect`, allowing for data persistence across sessions.

- **Preview & Print**:
  - A **preview mode** hides editing buttons and input fields for clean presentation.
  - **Print view** is optimized using `@media print`, preserving the layout and styling when saving as PDF via `window.print()`.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install 
   ```

2. **Run the app:**
    ```bash
    npm start
    ```
3. **Build for production:**
    ```bash
    npm run build
    ```