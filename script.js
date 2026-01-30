let allReels = document.querySelector('.all-reels')

const reels = [
    {
        userName: "aarav.codes",
      likeCount: 12450,
      isLiked: true,
      commentCount: 342,
      shareCount: 89,
      isFollowed: false,
      caption: "Building side projects after 9–5 hits different 🚀",
      video: "./assests/v1.mp4",
      userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
        userName: "travel.with.isha",
      likeCount: 9821,
      isLiked: false,
      commentCount: 210,
      shareCount: 56,
      isFollowed: true,
      caption: "Mountains > meetings. Always.",
      video: "./assests/v2.mp4",
      userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        userName: "fit.with.rohan",
      likeCount: 18340,
      isLiked: true,
      commentCount: 488,
      shareCount: 132,
      isFollowed: true,
      caption: "Consistency beats motivation. Day 120 💪",
      video: "./assests/v3.mp4",
      userProfile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
    },
    {
        userName: "design.by.nina",
      likeCount: 6543,
      isLiked: false,
      commentCount: 97,
      shareCount: 21,
      isFollowed: false,
      caption: "Minimal UI. Maximum impact.",
      video: "./assests/v4.mp4",
      userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
        userName: "techwithdev",
      likeCount: 22110,
      isLiked: true,
      commentCount: 612,
      shareCount: 244,
      isFollowed: true,
      caption: "React tips you’ll actually use in production.",
      video: "./assests/v5.mp4",
      userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    },
    {
        userName: "foodie.ananya",
      likeCount: 14320,
      isLiked: false,
      commentCount: 301,
      shareCount: 75,
      isFollowed: false,
      caption: "Street food that heals the soul 🌮",
      video: "./assests/v6.mp4",
      userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
        userName: "startup.diaries",
      likeCount: 8904,
      isLiked: true,
      commentCount: 156,
      shareCount: 64,
      isFollowed: true,
      caption: "Nobody talks about this phase of building a startup.",
      video: "./assests/v7.mp4",
      userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        userName: "daily.ai.bytes",
      likeCount: 19560,
      isLiked: true,
      commentCount: 540,
      shareCount: 190,
      isFollowed: false,
      caption: "AI won’t replace you. Someone using AI will.",
      video: "./assests/v8.mp4",
      userProfile: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
    },
    {
        userName: "life.of.kabir",
      likeCount: 4321,
      isLiked: false,
      commentCount: 88,
      shareCount: 14,
      isFollowed: false,
      caption: "Slow days are still progress.",
      video: "./assests/v9.mp4",
      userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
        userName: "code.after.dark",
      likeCount: 16780,
      isLiked: true,
      commentCount: 401,
      shareCount: 120,
      isFollowed: true,
      caption: "Debugging at 2 AM is a personality trait.",
      video: "./assests/v10.mp4",
      userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
    }
];



function addData(){let sum = ''
  reels.forEach((elem,idx)=>{
      sum = sum + `
                  <div class="reel">
                      <video class="videos" src="${elem.video}" autoplay loop muted ></video>
  
                      <div class="bottom">
                          <div class="user">
                              <img src="${elem.userProfile}" alt="">
                              <h4>${elem.userName}</h4>
                              <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                          </div>
                          <h3>${elem.caption}</h3>
                      </div>
                      <div class="right">
                          <div id="${idx}" class="like">
                              <h4 id="like-icon">${elem.isLiked ?'<i class="liked ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                              <h6>${elem.likeCount}</h6>
                          </div>
                          <div class="icon comment">
                              <h4 id="comment-icon"><i class="ri-chat-3-line"></i></h4>
                              <h6>${elem.commentCount}</h6>
                          </div>
                          <div class="icon share">
                              <h4 id="share-icon"><i class="ri-share-forward-line"></i></h4>
                              <h6>${elem.shareCount}</h6>
                          </div>
                          <div class="icon menu">
                              <h4 id="menu-icon"><i class="ri-more-2-fill"></i></h4>
                          </div>
                      </div>
                  </div>`
  })
  
  allReels.innerHTML = sum
}
addData();

allReels.addEventListener('click',(dets)=>{
  if(dets.target.className == 'like'){
    if(!(reels[dets.target.id].isLiked)){
      reels[dets.target.id].likeCount++
      console.log(reels);
      
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }
  }
  addData()
})