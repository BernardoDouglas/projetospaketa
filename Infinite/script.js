const container = document.getElementById('container');
const loading = document.querySelector('.loading');

const titles = [
	'Lorem ipsum dolor sit amet.',
	'Officia sit hic nihil quisquam?',
	'In laudantium quidem hic ipsam?',
	'Dolorum nostrum culpa magni reprehenderit?',
	'Rerum corporis nisi ea eum.'
];

const texts = [
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!',
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!',
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!'];

window.addEventListener('scroll', () => {
	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	console.log('scroll', scrollTop + clientHeight, scrollHeight - 50);
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	}
});

function showLoading() {

	loading.classList.add('show');
	
	setTimeout(() => {
		
		loading.classList.remove('show');
		
		setTimeout(() => {
			
			block();
		}, 300);
	}, 1000);
}
block();
block();
block();

function block() {
	const post = document.createElement('div');
	post.classList.add('post');
	post.innerHTML = `
			<div class="post-info">
			<h2 class="post-title">${randomFrom(titles)}</h2>
			<small class="post-date">${randomDate()}</small>
			<p class="post-excerpt">${randomFrom(texts)}</p>
		</div>
	`;
	
	container.appendChild(post);
}

function randomFrom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate() {
	const day = Math.floor(Math.random() * 27) + 1;
	const month = Math.floor(Math.random() * 11) + 1;
	return `${month}/${day}/2021`;
}

