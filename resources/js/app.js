import './bootstrap';


const channel = window.Echo.private('notifications');

	channel.listen('.App\\Events\\UserSessionChanged', (e) => {
		const notificationsElement = document.getElementById('notification');

		notificationsElement.innerText = e.message;

		notificationsElement.classList.remove('invisible');
		notificationsElement.classList.remove('alert-success');
		notificationsElement.classList.remove('alert-danger');

		notificationsElement.classList.add('alert-' + e.type);

		console.log('here', notificationsElement);

	});