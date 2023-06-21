import React from 'react'
import  { format, formatDistance, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Posts.module.css'

export function Posts({author, publishedAt, content}) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'" , {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
  return (
   <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/nadojba.png"/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>

        </header>

        <div className={styles.content}>
          {
            content.map(line => {
                if(line.type === 'paragraph'){
                    return <p>{line.content}</p>
                }else if(line.type === 'link'){
                    return <a href={line.content}>{line.content}</a>
                }
            })
          }

        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder='deixe seu comentario'
            />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
   </article>
  )
}
