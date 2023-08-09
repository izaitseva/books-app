import styles from "./Library.module.css";
import point from "../images/point-icon.svg";
import flag from "../images/flag-icon.svg";
import book from "../images/book-icon.svg";

export const Library = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.inputs_container}>
        <div className={styles.input_div}>
          <label className={styles.label}>Book title</label>
          <input
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
            type="password"
            id="password"
            placeholder="..."
          />
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Publication date</label>
          <input
            className={`${styles.publication_input} ${styles.input}`}
            type="date"
            id="date"
            placeholder="none"
          />
        </div>
        <div className={styles.input_div}>
          <label className={styles.label}>Amount of pages</label>
          <input
            className={`${styles.pages_input} ${styles.input}`}
            type="number"
            id="number"
            placeholder="..."
          />
        </div>
        <button className={styles.library_btn} type="button">
          Add
        </button>
      </div>
      <div className={styles.steps_container}>
        <ul className={styles.desc_list}>
          <li className={styles.list_item}>
            <h2 className={styles.list_title}>Step 1.</h2>
            <div className={styles.header_list}>
              <img className={styles.icon} src={book} alt="point" />
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
    </div>
  );
};
