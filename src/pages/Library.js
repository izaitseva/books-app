import { useState } from "react";

import styles from "./Library.module.css";
import point from "../images/point-icon.svg";
import flag from "../images/flag-icon.svg";
import bookicon from "../images/book-icon.svg";
import { fetchAddBook } from "../api/booksAxios";

export const Library = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [pagesInTotal, setPagesInTotal] = useState("");
  const [books, setBooks] = useState([]);

  // const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);
  // const [readingNowBooks, setReadingNowBooks] = useState([]);
  // const [goingToReadBooks, setGoingToReadBooks] = useState([]);

  const handleAddBook = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchAddBook({
        title: bookTitle,
        author: bookAuthor,
        publishYear: publishedYear,
        pagesTotal: pagesInTotal,
      });

      const getBooks = [...books];
      getBooks.push(response.data);
      setBooks(getBooks);

      console.log(getBooks);
    } catch {
      console.error("не працює");
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.inputs_container}>
        <div className={styles.input_div}>
          <label className={styles.label}>Book title</label>
          <input
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className={`${styles.input} ${styles.title_input} `}
            type="textarea"
            id="textarea"
            placeholder="..."
          />
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Author</label>
          <input
            className={`${styles.author_input} ${styles.input}`}
            type="search"
            id="search"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            placeholder="..."
          />
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Publication date</label>
          <input
            className={`${styles.publication_input} ${styles.input}`}
            type="number"
            max="2023"
            min="1500"
            step="1"
            id="date"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            placeholder="none"
          />
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Amount of pages</label>
          <input
            className={`${styles.publication_input} ${styles.input}`}
            type="text"
            id="pages"
            value={pagesInTotal}
            onChange={(e) => setPagesInTotal(e.target.value)}
            placeholder="none"
          />
        </div>
        <button
          className={styles.library_btn}
          type="button"
          onClick={handleAddBook}
        >
          Add
        </button>
      </div>
      <div className={styles.steps_container}>
        <ul className={styles.desc_list}>
          <li className={styles.list_item}>
            <h2 className={styles.list_title}>Step 1.</h2>
            <div className={styles.header_list}>
              <img className={styles.icon} src={bookicon} alt="point" />
              <h3 className={styles.list_header}>Create your own library</h3>
            </div>
            <div className={styles.list_div}>
              <img className={styles.list_point} src={point} alt="point" />
              <p className={styles.list_p}>
                Add there books which you are going to read.
              </p>
            </div>
          </li>
          <li className={styles.list_item}>
            <h2 className={styles.list_title}>Step 2.</h2>
            <div className={styles.header_list}>
              <img className={styles.icon} src={flag} alt="point" />
              <h3 className={styles.list_header}>Create your own library</h3>
            </div>
            <div className={styles.list_div}>
              <img className={styles.list_point} src={point} alt="point" />
              <p className={styles.list_p}>
                Add there books which you are going to read.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Already read */}
      {/* <div>
        <h1>Already read</h1>
        <table>
          <tr>
            <th>Book title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Rating</th>
          </tr>
          {alreadyReadBooks.map((book, index) => {
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
            </tr>;
          })}
        </table>
      </div>
      {/* reading now */}
      {/* <div>
        <h1>Reading now</h1>
        <table>
          <tr>
            <th>Book title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Pages</th>
          </tr>
          {readingNowBooks.map((book) => {
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>{book.pagesTotal}</td>
            </tr>;
          })}
        </table>
      </div> */}

      {/* going to read */}
      <div>
        <h1>Going to read</h1>
        <table>
          <thead>
            <tr>
              <th>Book title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>{book.pagesTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
