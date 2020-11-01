import React, { useState } from "react";

import users from "../../users.json";
import deleteIcon from "../../images/icons8-удалить-28.png";
import arrowIcon from "../../images/icons8.png";
import styles from "./detailsTable.module.css";

const DetailsTable = ({ onSwitched }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleClickOpen = (userId) => {
    const getcurrentUser = users.find((user) => userId === user.id);
    setCurrentUser(getcurrentUser);
    setUserId(userId);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.userInfo}>ФИО</th>
          <th>Детальная информация</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td
              className={userId === user.id ? styles.active : styles.inactive}
              onClick={() => handleClickOpen(user.id)}
            >
              <p className={styles.name}>{user.name}</p>
              <div className={styles.connection}>
                <span>{user.telephone}</span>
                <span>{user.skype}</span>
              </div>
            </td>
            {currentUser && currentUser.id === user.id && (
              <td className={styles.details} rowSpan={users.length}>
                <p>Добавлен: {currentUser.added}</p>
                <p>Возраст: {currentUser.age}</p>
                <p>Семейное положение: {currentUser.status}</p>
                <p>Работает: {currentUser.work}</p>
                <p>Образование: {currentUser.education}</p>
                <img
                  className={styles.deleteIcon}
                  onClick={onSwitched}
                  src={deleteIcon}
                  alt="delete"
                />
                <img className={styles.arrowIcon} src={arrowIcon} alt="arrow" />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsTable;
