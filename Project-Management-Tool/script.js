let following = false;
let followers = 0;

function followUser(){

  let button = document.getElementById("followBtn");

  let followerText = document.getElementById("followers");

  if(!following){

    followers++;

    followerText.innerText = followers + " Followers";

    button.innerText = "Following";

    button.style.background = "green";

    following = true;

  }else{

    followers--;

    followerText.innerText = followers + " Followers";

    button.innerText = "Follow";

    button.style.background = "#ff0066";

    following = false;
  }
}

function createPost(){

  let text = document.getElementById("postInput").value;

  if(text === ""){
    alert("Write something!");
    return;
  }

  let post = document.createElement("div");

  post.className = "post";

  post.innerHTML = `
    <h3>@vijithareddy</h3>

    <p>${text}</p>

    <button onclick="likePost(this)">❤️ Like</button>

    <span class="like-count">0 Likes</span>

    <button class="delete-btn" onclick="deletePost(this)">
      Delete
    </button>

    <br><br>

    <input type="text" placeholder="Write comment">

    <button onclick="addComment(this)">
      Comment
    </button>

    <div class="comments"></div>
  `;

  document.getElementById("posts").prepend(post);

  document.getElementById("postInput").value = "";
}

function likePost(button){

  let likes = button.nextElementSibling;

  let count = parseInt(likes.innerText);

  count++;

  likes.innerText = count + " Likes";
}

function deletePost(button){

  button.parentElement.remove();
}

function addComment(button){

  let input = button.previousElementSibling;

  let text = input.value;

  if(text === ""){
    alert("Write comment!");
    return;
  }

  let comment = document.createElement("div");

  comment.className = "comment";

  comment.innerText = text;

  button.nextElementSibling.appendChild(comment);

  input.value = "";
}