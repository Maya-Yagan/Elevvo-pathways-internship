# Task 4: Personal Blog Homepage

![Screenshot of the project](task4.png)

## Description

This project builds a personal blog homepage that displays blog posts in a beautiful, responsive card layout.  
Users can explore posts by category, search by title, and navigate between pages using a simple pagination system.

---

## Tools & Technologies Used

- **React**: Component-based architecture and state management  
- **Tailwind CSS**: For elegant, responsive, and customizable styling  
- **Lucide React**: For the search icon component  
- **JavaScript (ES6)**: Logic for filtering, searching, and pagination  

---

## Features

- **Card Layout**: Blog posts displayed as visually appealing cards with image, title, description, and date  
- **Category Filter**: Filter posts by “All”, “Tech”, “Travel”, or “Food”  
- **Search Functionality**: Instantly filter posts by title keyword  
- **Pagination**: Navigate easily between pages of posts  
- **Responsive Design**: Works seamlessly across different screen sizes  

---

## How It Works

1. The **Header** displays the blog title with a gradient background.  
2. The **Search Bar** allows users to filter posts by typing keywords in real-time.  
3. The **Category Filter** buttons toggle between different post categories.  
4. Posts are rendered dynamically using the **BlogCard** component, which receives props like `title`, `image`, `description`, and `date`.  
5. The **Pagination** component manages how many posts appear per page and handles navigation between pages.

Each interaction updates the component’s **state**, which triggers re-rendering of the filtered and paginated post list.

---

## How to Run

1. **Clone or download** this repository.  
2. Install dependencies:  
   ```bash
   npm install
3. Start the development server:
    ```bash
    npm run dev
4. Open the local URL shown in your terminal (e.g. http://localhost:5173) in your browser.
5. Scroll down to see the smooth section animations in action.

---

Created as part of my front-end learning tasks.
