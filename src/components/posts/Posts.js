import "./Posts.css"
import user1 from "../assets/post-user-1.png"
import user2 from "../assets/post-user-2.png"

function Posts(){
    return(
        <section className="posts">
            <div className="container">
                <div className="posts__title">
                    <h2>Featured Posts</h2>
                </div>
                <div className="posts__wrapper">
                    <div className="posts__card">
                        <h3>The Road Ahead</h3>
                        <p>The road ahead might be paved - it might not be.</p>
                        <div className="posts__img">
                            <div className="posts__right">
                                <img src={user1} alt="" />
                                <p>Mat Vogels</p>
                            </div>
                            <div className="posts__left">
                                <p>September 25, 2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="posts__card">
                        <h3>From Top Down</h3>
                        <p>Once a year, go someplace you’ve never been before.</p>
                        <div className="posts__img">
                            <div className="posts__right">
                                <img src={user2} alt="" />
                                <p>William Wong</p>
                            </div>
                            <div className="posts__left">
                                <p>September 25, 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts