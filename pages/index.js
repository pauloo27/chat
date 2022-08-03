import React from 'react'
import styles from '@styles/home.module.css'

export default function Home() {
  const [number, setNumber] = React.useState('')

  const handleChange = (e) => {
    // in IOS, in order to the "Scan Text" feature to work properly,
    // we should not change the original text. insertCompositionText means
    // "user indirectly entering text" (quote from MDN), which is emitted
    // by scanning text. When the user "accepts" the text, another event will
    // be triggered, any non-numbers will be removed there.
    if (e.nativeEvent.inputType === 'insertCompositionText') return setNumber(e.target.value)

    const { value } = e.target
    if (value === '') return setNumber('')

    const numbers = value.match(/\d+/g)
    if (numbers === null) return null
    return setNumber(numbers.join(''))
  }

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
        value={number}
        placeholder="Enter phone number"
        type="tel"
        onChange={handleChange}
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
