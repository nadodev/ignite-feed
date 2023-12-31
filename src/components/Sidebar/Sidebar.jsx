import  { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1682344060028-7672c660ab05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=5000"/>
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/nadojba.png"/>
            <strong>Leonardo Geja</strong>
            <span>Web developer</span>
        
        </div>
        <footer>
            <a href="#"> 
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}
