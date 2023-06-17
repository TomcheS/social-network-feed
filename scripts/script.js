fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        const feed = document.getElementById('content-area-id');
        const loadMoreButton = document.getElementById('load-more');
        const switchMode = document.getElementById('switcher');
        const switchValue = document.getElementById('switcher-value');
        const profileName = document.querySelector('.profile span');

        var mode = 'light';

        let posts = data;
        let currentIndex = 0;
        const batchSize = 4;

        switchMode.addEventListener('click', changeMode);

        displayPosts();

        // --- ELEMENTS 
        const body = document.querySelector('body');
        const nav = document.querySelector('nav');
        const cardPostElement = document.querySelectorAll('div.card.post');

        function changeMode() {
            var val = switchValue.checked;
            if (val === false) {
                activateDarkMode();
            } else {
                activateLightMode();
            }
        }

        function activateDarkMode() {
            nav.classList.add('navDark');
            body.classList.add('bodyDark');

            document.querySelectorAll('div.card.post').forEach((e, i) => {
                e.classList.add(`cardPostDark`);
            });

            document.querySelectorAll('.post-reactions .reactions img').forEach((e, i) => {
                e.classList.add(`postReactionsDark`);
            });

            document.querySelectorAll('.menus a, .groups a').forEach((e, i) => {
                e.style.color = 'white';
            });

            profileName.style.color = 'white';
        }

        function activateLightMode() {
            nav.classList.remove('navDark');
            body.classList.remove('bodyDark');

            document.querySelectorAll('div.card.post').forEach((e, i) => {
                e.classList.remove(`cardPostDark`);
            });

            document.querySelectorAll('.post-reactions .reactions img').forEach((e, i) => {
                e.classList.remove(`postReactionsDark`);
            });

            document.querySelectorAll('.menus a, .groups a').forEach((e, i) => {
                e.style.color = '#1c1e21';
            });

            profileName.style.color = '#1c1e21';
        }

        // Event listener for Load More button
        function displayPosts() {
            var val = switchValue.checked;
            colorMode = 'light';
            if (val === true) {
                colorMode = 'dark';
            }

            const endIndex = Math.min(currentIndex + batchSize, posts.length);
            for (let i = currentIndex; i < endIndex; i++) {
                const post = createPostElement(posts[i], colorMode);
                feed.innerHTML = feed.innerHTML + post;
            }
            currentIndex = endIndex;

            // Hide Load More btn if all posts are loaded
            if (currentIndex >= posts.length) {
                loadMoreButton.style.display = 'none';
            }

            document.querySelectorAll('div.post-image').forEach((e, index) => {
                var postData = posts[index];
                e.addEventListener('click', (event) => {
                    showLightbox(postData.image);
                });
            });

        }

        loadMoreButton.addEventListener('click', displayPosts);

        function parseDate(date) {
            const dateTimeString = date;
            const [dateString, timeString] = dateTimeString.split(" ");

            const dateParts = dateString.split("-");
            const year = dateParts[0];
            const month = dateParts[1];
            const day = dateParts[2];

            return `${day}-${month}-${year}`;
        }

        function createPostElement(postData, colorMode) {
            const formattedDate = parseDate(postData.date);

            var postReactionsDarkClass = '';
            var cardPostDarkClass = '';
            if (colorMode == 'dark') {
                postReactionsDarkClass = 'postReactionsDark';
                cardPostDarkClass = 'cardPostDark';
                cardPostDarkClass = 'cardPostDark';
            }

            var postCardHtml = '<div class="card post ' + cardPostDarkClass + '">';
            postCardHtml += '<div class="post-header">';
            postCardHtml += '<div class="post-author-info">';
            postCardHtml += '<img src="' + postData.profile_image + '" />';
            postCardHtml += ' <div>';
            postCardHtml += '<div>';
            postCardHtml += '<span class="author-name">' + postData.name + '</span>';
            postCardHtml += '<i class="verified-icon"></i>';
            postCardHtml += '</div>';
            postCardHtml += '<div class="details">';
            postCardHtml += '<span>' + formattedDate + '</span>';
            postCardHtml += '<span> - ' + postData.source_type + ' </span>';
            postCardHtml += '<i class="post-settings-icon"></i>';
            postCardHtml += '</div>';
            postCardHtml += '</div>';
            postCardHtml += '</div>';
            postCardHtml += '<i class="post-menu-icon"></i>';
            postCardHtml += '</div>';
            postCardHtml += ' <p class="post-body">' + postData.caption + '</p>';
            postCardHtml += ' <div class="post-image" style="background-image:url(' + postData.image + ')">';
            postCardHtml += '<a href="' + postData.source_link + '" class="post-image">';
            postCardHtml += '</a>';
            postCardHtml += '</div>';
            postCardHtml += '<div class="post-reactions">';
            postCardHtml += '<div class="reactions">';
            postCardHtml += '<div class="emojis">';
            postCardHtml += '<img src="images/like.svg"  class="' + postReactionsDarkClass + '" />';
            postCardHtml += '</div>';
            postCardHtml += '<span>' + postData.likes + '</span>';
            postCardHtml += ' </div>';
            postCardHtml += '</div>';
            postCardHtml += '</div>';
            postCardHtml += '</div>';

            return postCardHtml;
        }

        function showLightbox(imageUrl) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');

            lightboxImage.src = imageUrl;
            lightbox.style.display = 'flex';

            const closeButton = document.getElementsByClassName('close')[0];
            closeButton.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }
    });