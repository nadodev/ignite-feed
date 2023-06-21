import { Header } from "./components/Header/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Posts } from "./components/Posts/Posts"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nadojba",
      name: "Leonardo Geja",
      role: "Web Developer"
    },
    content : [
      {type:'paragraph', content: 'Fala Galera'},
      {type:'paragraph', content: 'Acabei de subgir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat'},
      {type:'paragraph', content: 'Acabei de subgir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat'},
      {type:'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt:  new Date("2022-05-03 20:00:00")
    
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/nadojba",
      name: "Leonardo Geja",
      role: "Web Developer"
    },
    content : [
      {type:'paragraph', content: 'Fala Galera'},
      {type:'paragraph', content: 'Acabei de subgir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat'},
      {type:'paragraph', content: 'Acabei de subgir mais um projeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da rocketseat'},
      {type:'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt:  new Date("2022-05-03 20:00:00")
    
  }
]
function App() {

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {
          posts.map((post) => {
            return (
              <Posts 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
        }
      </main>
    </div>
    </>
  )
}

export default App
