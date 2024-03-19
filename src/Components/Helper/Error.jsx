import React from 'react'
import styles from './Helper.module.css'

const Error = ({error}) => {
  if(!error) return null

  return (
    <p className={styles.error}>
      {error}
    </p>
  )
}

export default Error