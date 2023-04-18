window.addEventListener("DOMContentLoaded", (e) => {
	let headLinks = document.querySelector("head");
	let containerNotifications = document.createElement("div");
	containerNotifications.id = "toasts";
	
	let link = document.createElement("link");
	link.href = "./toast.css";
	link.setAttribute("rel", "stylesheet");
	
	document.body.appendChild(containerNotifications);
	headLinks.appendChild(link);
});

let configIcons = {
	valid: 'fa-circle-check',
	error: 'fa-circle-xmark',
    	warring: 'fa-circle-exclamation'
}

const toastNotif = (setting) => {
	let notifs = document.getElementById("toasts");
	let toast = document.createElement("div");
	toast.style.backgroundColor = setting.color;
	toast.classList.add('toast', 'toast-show');
	icon = document.createElement("i");
	icon.classList.add('fa-solid', configIcons[setting.icon]);

	let text = document.createElement("p");
	text.appendChild( document.createTextNode(setting.text) );

	toast.appendChild(icon);
	toast.appendChild(text);
	notifs.appendChild(toast);

	setTimeout(() => {
		toast.classList.remove('toast-show')
		toast.classList.add('toast-hide')
		setTimeout(() => {
			toast.remove()
		}, 300)
	}, setting.timeout);
}

/*
toastNotif({
	text: 'Lorem Ipsum is simply dummy text of the printing',
	color: '#65da48',
	timeout: 2000,
	icon: 'valid'
});
*/
