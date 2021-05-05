import configs from '../factory/config.js';

const table = document.getElementById('table');
const profile = document.getElementById('profile');
const posts = document.getElementById('posts');
const comments = document.getElementById('comments');
const general1 = document.getElementById('general1');
const general2 = document.getElementById('general2');
const general3 = document.getElementById('general3');
const general4 = document.getElementById('general4');
const butBack = document.getElementById('butBack');
const loading = document.getElementById('loading')


export const creatTable = () => {
    configs['GET_USER']('users')
        .then(data => {
            loading.remove()
            for (let value of data) {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                const td3 = document.createElement('td');
                const href = document.createElement('a');
                href.className = 'href';
                href.innerHTML = `${value['name']}`;
                href.href = '#'
                td1.innerHTML = `<span id="icon" class="material-icons">
                        account_box
                        </span>`;
                td1.appendChild(href);
                td2.innerHTML = `${value['email']}`;
                td3.innerHTML = `${value.address['city']}, ${value.address['street']}`;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.className = 'tr';
                table.appendChild(tr);
                href.addEventListener('click', (e) => {
                    general1.style.display = 'none';
                    general2.style.display = 'none';
                    general3.style.display = 'block';
                    general4.style.display = 'block';
                    profile.innerHTML = `
                    Name: ${value.name}<br>
                    User-Name: ${value.username}<br>
                    Email: ${value.email}<br>
                    Phone: ${value.phone}<br>
                    Address: ${value.address['city']}, ${value.address['street']}<br>
                    Website: ${value.website}<br>
                    `;
                    configs['GET_USER']('posts').then(post => {
                        post.map((item) => {
                            if (value.id == item.userId) {
                                posts.innerHTML += `
                        ${item.id}<br>
                            ${item.body}<br>
                            ${item.title}
                            <hr>
                        `
                            };
                        })
                    })
                    configs['GET_USER']('comments').then(coms => {
                        coms.map((item) => {
                            if (value.id == item.postId) {
                                comments.innerHTML += `
                        ${item.id}<br>
                        ${item.name}<br>
                        ${item.email}<br>
                        ${item.body}<br>
                        <hr>
                        `
                            };
                        })
                    })
                    butBack.addEventListener('click', () => {
                        general1.style.display = 'block';
                        general2.style.display = 'block';
                        general3.style.display = 'none';
                        general4.style.display = 'none';
                        posts.innerHTML = '';
                        comments.innerHTML = '';
                    })
                })
            }
        });
}