import { users, Profile } from '@/components/Profile';
import styles from '@/app/app.module.css';

export function App() {
  return (
    <main>
      <h2 className={styles.heading}>Users:</h2>
      <section className={styles.users}>
        {users.map(u => (
          <Profile key={u.id} user={u} />
        ))}
      </section>
    </main>
  );
}

export default App;
