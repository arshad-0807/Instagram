var arr = [
  {
    dp: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1693336430952-2ff5b03b216a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693250707557-a846a014b321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1662441899678-f3dfb7a989d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693438672953-409b661134fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://media.istockphoto.com/id/695792712/photo/enjoying-huge-empty-beach-in-cold-windy-weather.webp?s=170667a&w=0&k=20&c=dckGcZpjU_4T_wD_qcCd8_MdTZrU536NP1buAgtlwzE=",
  },
  {
    dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];
var stories = document.querySelector("#stories");
var clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `<div  class="story">
    <img id="${idx}" src="${elem.dp}" alt=""> </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});

// --------------------------------like--------------------

const post_1 = document.querySelector(".post1");
const like = document.querySelector("#like");
const heart_1 = document.getElementById("heart1");

post_1.addEventListener("dblclick", function () {
  like.style.transform = `translate(-50%, -50%) scale(1)`;
  like.style.opacity = 0.8;
  heart_1.classList.remove("ri-heart-3-line");
  heart_1.classList.add("ri-heart-3-fill");

  setTimeout(function () {
    like.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    like.style.transform = `translate(-50%, -50%) scale(0)`;
  }, 1000);
});

heart_1.addEventListener("click", function () {
  heart_1.classList.remove("ri-heart-3-fill");
  heart_1.classList.add("ri-heart-3-line");
});

//post2

const post_2 = document.querySelector(".post2");
const like_2 = document.querySelector("#like2");
const heart_2 = document.getElementById("heart2");

post_2.addEventListener("dblclick", function () {
  like_2.style.transform = `translate(-50%, -50%) scale(1)`;
  like_2.style.opacity = 0.8;
  heart_2.classList.remove("ri-heart-3-line");
  heart_2.classList.add("ri-heart-3-fill");

  setTimeout(function () {
    like_2.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    like_2.style.transform = `translate(-50%, -50%) scale(0)`;
  }, 1000);
});

heart_2.addEventListener("click", function () {
  heart_2.classList.remove("ri-heart-3-fill");
  heart_2.classList.add("ri-heart-3-line");
});

//  post 3

const post_3 = document.querySelector(".post3");
const like_3 = document.querySelector("#like3");
const heart_3 = document.getElementById("heart3");

post_3.addEventListener("dblclick", function () {
  like_3.style.transform = `translate(-50%, -50%) scale(1)`;
  like_3.style.opacity = 0.8;
  heart_3.classList.remove("ri-heart-3-line");
  heart_3.classList.add("ri-heart-3-fill");

  setTimeout(function () {
    like_3.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    like_3.style.transform = `translate(-50%, -50%) scale(0)`;
  }, 1000);
});

heart_3.addEventListener("click", function () {
  heart_3.classList.remove("ri-heart-3-fill");
  heart_3.classList.add("ri-heart-3-line");
});
