
var user_data;
const cardbody =  document.querySelector('.card-wrapper'); 
let xhr = new XMLHttpRequest(); 
xhr.open('GET', `https://randomuser.me/api/?results=100&seed=abc?exc=login`); 
xhr.send(); 
xhr.onload = function() {
  (xhr.status != 200)? 
    console.log(`Error ${xhr.status}: ${xhr.statusText}`)
    : user_data = JSON.parse(xhr.response).results;   
    
    let girls_data = user_data.filter(function(girl){
      return girl.gender === 'female' 
      
    })
    console.log(girls_data)   


    for (const user of girls_data) {
      cardbody.insertAdjacentHTML('afterbegin', 
          `<div class="user_card">
          <div class="user_img">
            <img src="${user.picture.large}" alt="">
          </div>
      <div class="user_description">
          <h1 class="user_name">
              <span class="fisrt_name">${user.name.first}</span>
              <span class="last_name">${user.name.last}</span>
          </h1>
          <h3 class="user_title">About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          <a class="link web" href="mailto:${user.email}"><i class="fa fa-link" aria-hidden="true"></i> ${user.email}</a>
          <a href="#" class="link location" target="_blank"><i class="fa fa-map" aria-hidden="true"></i> ${user.location.street.number} ${user.location.street.name}</a> 
      </div> 
      <div class="user_footer"> 
          <div class="user_social_status">
              <ul class="social_list">
                  <li><span>Phone:</span> ${user.phone}</li>
                  <li><span>Address:</span> ${user.location.city} | ${user.location.state} | ${user.location.country}</li> 
              </ul>
          </div>
      </div></div>`
      ); 
    }  
}; 
xhr.onprogress = function(event) { 
    console.log(`Received`);    
}; 
xhr.onerror = function() {
  console.log("Request failed");
};

