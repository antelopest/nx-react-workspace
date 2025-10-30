
import { useEffect, useState } from 'react';
import { User, Role, Status } from '../model/types';

import styles from './Profile.module.css';

interface ProfileProps {
  user: User
}

function getUserCardClass(role: Role) {
  switch (role) {
    case Role.Admin:
      return styles.admin;
    case Role.Editor:
      return styles.editor;
    case Role.Moderator:
      return styles.moderator;
    default:
      return styles.guest;
  }
}

function getUserStatusClass(status: Status) {
  if (status === Status.Online) return styles.online;

  return styles.offline;
}

function toggleUserStatus(status: Status): Status {
  return status === Status.Online ? Status.Offline : Status.Online;
}

export function Profile({ user: initialUser }: ProfileProps) {

  const [user, setUser] = useState<User>(initialUser);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUser(prev => ({
        ...prev,
        status: toggleUserStatus(prev.status)
      }));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(`Rendering component ${user.id}`);

  return (
    <article className={styles.card}>
      <header className={styles.card__header}>
        <h3 className={styles.heading}>User id: {user.id}</h3>
        <span className={`${styles.status} ${getUserStatusClass(user.status)}`}></span>
      </header>

      <section className={styles.card__section}>
        <p className={styles.description}>
          Name: <span className={styles.accent}>{user.name}</span>
        </p>
        <p className={styles.description}>
          Email: <span className={styles.accent}>{user.email}</span>
        </p>
        <p className={styles.description}>
          Role: <span className={`${styles.role} ${getUserCardClass(user.role)}`}>{user.role}</span>
        </p>
      </section>
    </article>
  )
}