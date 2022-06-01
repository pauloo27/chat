import React from 'react'
import styles from '@styles/home.module.css'

export default function Home() {
  const [number, setNumber] = React.useState('')

  return (
    <div className={styles.mainContainer}>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Talk to someone
          {' '}
          <span className={styles.highlight}>without saving</span>
          {' '}
          their contact.
        </p>
        <p className={styles.description}>
          Just enter their number.
          {' '}
          <span className={styles.highlight}>No downloads</span>
          {' '}
          required.
        </p>
      </div>
      <input
        className={styles.input}
        placeholder="Enter phone number"
        type="text"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        Then just click the one you want:
      </p>
      <a className={styles.link} href={`tel:${number}`}>
        Call
      </a>
      <a className={styles.link} href={`sms:${number}`}>
        Message
      </a>
      <a className={styles.link} href={`https://wa.me/${number}`}>
        Whatsapp
      </a>
    </div>
  )
}
