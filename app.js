// const div = document.createElement('div');
// div.style.position = 'fixed';
// div.style.right = '0';
// div.style.top = '0';
// div.style.background = "rgba(280, 184, 0, 1)";
// // div.style.boxShadow = ' 4px 4px 4px 4px rgba(0, 0, 0, 0.25)';
// div.style.width = '60px';
// div.style.height = '81px';
// div.style.display = 'none';
// div.style.zIndex = 200;
// document.body.appendChild(div);


// const navblock = document.createElement('div');
// navblock.style.position = 'fixed';
// navblock.style.right = '-300px';
// navblock.style.top = '0';
// navblock.style.width = '300px';
// navblock.style.height = '100vh';
// navblock.style.background = "rgba(242, 184, 0, 1)";
// navblock.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
// navblock.style.textAlign = 'right';
// navblock.innerHTML = `<div>
// 				<div>
// 					<div>
// 						<span>Частным лицам</span>
// 					</div>
// 					<div>
// 						<div class="switch-button">
// 							<div>
// 							</div>
// 						</div>
// 					</div>
// 					<div>
// 						<span>Юридическим лицам</span>
// 					</div>
// 				</div>
// 				<div>
// 					<ul>
// 						<li><span>О компании</span></li>
// 						<li><span>Документы</span></li>
// 						<li><span>Контакты</span></li>
// 					</ul>
// 				</div>
// 				<div>
// 					<span>Минск и область</span>
// 				</div>
// 				<div>
// 					<img src="images/phone.png">
// 					<span>8 029 5-123-456</span>
// 				</div>
// 			</div>`;
// document.body.appendChild(navblock);



// div.addEventListener('click', event=> {
// 	console.log('click')
// 	console.log(navblock.style.right)
// 	if (navblock.style.right!='0px'){
// 		navblock.style.right='0px';
// 		div.style.right = '240px';
// 		return;
// 	}
// 	if (navblock.style.right=='0px') {
// 		navblock.style.right = '-300px';
// 		div.style.right = '0';
// 		return;
// 	}
	
// }, false)



// window.addEventListener(`resize`, event => {
// 	// console.log(event.target.innerWidth)
// 	if (event.target.innerWidth<1200){
// 		yellownav.style.display='none';
// 		div.style.display = '';
// 	}
// 	else {
// 		yellownav.style.display='';
// 		div.style.right = '0';
// 		div.style.display = 'none';
// 		navblock.style.right = '-300px';

// 	}
// }, false);

// if (window.innerWidth < 1200){
// 	yellownav.style.display='none';
// 	div.style.display = '';
// }


let sidebarButton = document.querySelector('.sidebar-button');
let yellowSidebar = document.querySelector('.yellow-sidebar')

sidebarButton.addEventListener('click', showSidebar);

function showSidebar() {
	if (0==sidebarButton.style.right||sidebarButton.style.right=='0px'){
		sidebarButton.style.right='400px';
		yellowSidebar.style.right='0px';
		sidebarButton.firstElementChild.style.transform = 'rotate(0deg)'; 
	}

	else {
		sidebarButton.style.right='0px';
		yellowSidebar.style.right='-400px';
		sidebarButton.firstElementChild.style.transform = 'rotate(135deg)'; 
	}
	
}



const topRadios = document.querySelectorAll(`.main-slide input[type='radio']`);
const submitButtons = document.querySelectorAll(`button[type='submit']`);
const popup = document.querySelector('.popup-wrapper');
const popupCloser = document.querySelector('.popup-wrapper img:last-child');
const forms = document.querySelectorAll(`form`);
// const questions = document.querySelectorAll(`.questions input[type='radio']`);

for (let radio of topRadios) {
	radio.addEventListener('change', changeRadio)
}

// for (let button of submitButtons) {
// 	button.addEventListener('click', bringPopup);
// }

for (let form of forms) {
	form.addEventListener('submit', bringPopup)
}

popupCloser.addEventListener('click', ()=>popup.style.display = 'none');
// for (let radio of questions) {
// 	radio.addEventListener('change', changeAnswer)
// }

function bringPopup(e) {
	e.preventDefault();
	popup.style.display = 'flex';
}

function changeRadio(e) {
	const radioChecker = e.target.parentElement.parentElement.firstElementChild;
	radioChecker.style.left == '0px'? radioChecker.style.left = '50%' : radioChecker.style.left = '0px';
	
}

// function changeAnswer(e) {
// 	e.target.checked == true ? e.target.parentElement.style.backgroundColor = '#f2B800' : e.target.parentElement.style.backgroundColor = 'transparent';
// }

// window.addEventListener(`resize`, event => {
// 	// console.log(event.target.innerWidth)
// 	if (event.target.innerWidth<1200){
// 		yellownav.style.display='none';
// 		div.style.display = '';
// 	}
// 	else {
// 		yellownav.style.display='';
// 		div.style.right = '0';
// 		div.style.display = 'none';
// 		navblock.style.right = '-300px';

// 	}
// }, false);

// if (window.innerWidth < 1200){
// 	yellownav.style.display='none';
// 	div.style.display = '';
// }