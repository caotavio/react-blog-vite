import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/caotavio.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Otavio Carvalho</strong>
              <time title="June 11th at 08:11h" dateTime="2022-06-08">About 1 hour ago</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button title="Applaud">
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}