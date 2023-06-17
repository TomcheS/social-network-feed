<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Static Template</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <link rel="stylesheet" href="./style/style.css" />
      <style nonce="">
      </style>
   </head>
   <body>
      <nav>
         <div class="column-left">
            <a class="fb-logo" href="#">
            EmbedSocial
            </a>
         </div>
         <div class="desktop-tablet-only">
            <ul class="column-center">
               <li class="tab active">
                  <div id="theme-toggle">
                     <label class="switch" >
                     <input type="checkbox" id="switcher-value">
                     <span id="switcher" class="slider round"></span>
                     </label>
                  </div>
               </li>
            </ul>
         </div>
         <div class="column-right">
            <span class="desktop-only">
            <a class="profile">
            <img src="images/profile.jpg" />
            <span>Tomislav Spirevski</span>
            </a>
            </span>
         </div>
      </nav>
      <div class="content-grid">
      <div class="column-left desktop-tablet-only">
         <div class="fixed-area">
            <ul class="menus">
               <li class="menu-profile-item">
                  <img src="images/profile.jpg" />
                  <span>Tomislav Spirevski</span>
               </li>
               <li class="menu-page-item">
                  <img src="images/menu-page.png" />
                  <div>
                     <a href="#"><span>Pages</span></a>
                  </div>
               </li>
               <li>
                  <img src="images/watch.jpg" />
                  <a href="#"><span>Watch</span></a>
               </li>
               <li>
                  <img src="images/menu-friends.png" />
                  <a href="#"><span>Friends</span></a>
               </li>
               <li>
                  <img src="images/menu-groups.png" />
                  <a href="#"><span>Groups</span></a>
               </li>
            </ul>
            <div class="separator"></div>
            <div class="shortcuts groups">
               <span class="title">Groups</span>
               <ul>
                  <li>
                     <img src="images/adventure.png" />
                     <a href="#"><span>Adventure Park</span></a>
                  </li>
                  <li>
                     <img src="images/menu-group12.png" />
                     <a href="#"><span>Manchester United</span></a>
                  </li>                                  
               </ul>
            </div>
         </div>
      </div>
      <div class="column-center">
      <div class="content-area" id="content-area-id">
      </div>
      <div>
         <div class="btn btn-primary" id="load-more">Load More</div>
         </div>
         <div id="lightbox">
            <span class="close">&times;</span>
            <img id="lightbox-image" src="" alt="Enlarged Image">
         </div>
      </div>
      <script src="scripts/script.js"></script>
   </body>
</html>
