//  Testimonial Slider

let testimonials = [
    {
        name : "Cherise G",
        photoUrl : 'img/img-1.avif',
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
        name : "Rosetta Q",
        photoUrl : 'img/img-2.avif',
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
    },
    {
        name : "Constantine V",
        photoUrl : 'img/img-3.avif',
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
    }
]

let imgEl = document.querySelector("img");
let textEl = document.querySelector(".text");
let usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  let { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 1000);
}