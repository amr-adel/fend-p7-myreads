# MyReads (iBookshelf)

This is my entry for project 7 (*MyReads: A Book Lending App*) from Udacity's  [Front-End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.
Find starter code and more information [HERE
](https://github.com/udacity/reactnd-project-myreads-starter)

[![MyReads (iBookshelf)](public/demo.jpg "iBookshelf")](https://amr-adel.github.io/fend-p7-myreads/)

---


## Project Specification Criteria

#### Application Setup
- The application was created with create-react-app and requires only `npm install` and `npm start` to get it installed and launched.
- An updated README that describes the project and has instructions for installing and launching the project is included.


#### Main Page
- The main page shows 3 shelves for books, and each book is shown on the correct shelf.
- The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
- When the browser is refreshed, the same information is displayed on the page.

#### Search Page
- The search page has a search input field. 
- The search page behaves correctly:
    * As the user types into the search field, books that match the query are displayed on the page.
    * Search results are not shown when all of the text is deleted out of the search input box.
    * Invalid queries are handled and prior search results are not shown.
    * The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
    * The user is able to search for multiple words, such as “artificial intelligence”.
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. 
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.


#### Routing
- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.


#### Code Functionality
- Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly. 
- All JSX code is formatted properly and functional.


---


### To see it in action

#### Visit live demo
At [iBookshelf](https://amr-adel.github.io/fend-p7-myreads/)

---

#### Clone repository
via `HTTPS` 
```
https://github.com/amr-adel/fend-p7-myreads.git
```
Or via `SSH` 
```
git@github.com:amr-adel/fend-p7-myreads.git
```

---

#### Or download repository
As a ZIP archive [MyReads: A Book Lending App](https://github.com/amr-adel/fend-p7-myreads/archive/master.zip)

1- install all project dependencies with `npm install`.

2- start the development server with `npm start`.


---


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
