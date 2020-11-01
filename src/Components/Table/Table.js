import React from "react";

import styles from "./table.module.css";

const Table = ({ onSwitched }) => (
  <section className={styles.usersList} onClick={onSwitched}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>Email</th>
          <th>Skype</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Смородина Алена Александровна</td>
          <td>0967654433</td>
          <td>Smorod@mail.com</td>
          <td>alenasmorodina</td>
          <td>Встреча завтра на 11.00</td>
        </tr>
        <tr>
          <td>Мироненко-Коновалов Александр Игнатьевич</td>
          <td>0967654433</td>
          <td>Smorod@mail.com</td>
          <td>alenasmorodina</td>
          <td>Созвониться в пятницу 05.07.2019</td>
        </tr>
        <tr>
          <td>Зайченко Валентина Александровна</td>
          <td>0967654433</td>
          <td>Smorod@mail.com</td>
          <td>alenasmorodina</td>
          <td>Очень занят в ближайшие 2 недели 05.07.2019</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Table;
