import React from 'react'
import "./Userfeed.css"
import { LeftBar } from '../../../components/LeftBar/LeftBar'
import { Postagem } from '../../../components/Postagem/Postagem'
import { Rightbar } from '../../../components/rightbar/rightbar'
import { Post } from '../../../components/Post/Post'

export const UserFeed = () => {
  return (
    <>
      <section className='userfeed'>
        <div className="leftbar">
          <LeftBar />
        </div>

        <main>
          <div className="feedUser">
            <Postagem />

            <Post />
          </div>


          <div className="div-right">
            <Rightbar />
          </div>
        </main>

      </section>

  
    </>
  )
}
