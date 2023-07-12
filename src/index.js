import './scss/index.scss';

console.log('Hello World!');

function initModal(id, $trigger) {
	const $modal = document.getElementById(id);
	if (!$modal) {
		console.warn('Modal target not found', $trigger, id);
		return;
	}

	const $closeTriggers = $modal.querySelectorAll('.modal__close');

	const open = () => $modal.classList.add('modal_active');
	const close = () => $modal.classList.remove('modal_active');

	if ($trigger) {
		$trigger.addEventListener('click', open);
	}

	$closeTriggers.forEach(($close) => {
		$close.addEventListener('click', close);
	});

	$modal.addEventListener('click', (e) => {
		if (e.target === $modal) close();
	});

	return {
		open,
		close,
	};
}

function initModals() {
	const $modalTriggers = document.querySelectorAll('*[data-modal]');

	$modalTriggers.forEach(($trigger) =>
		initModal($trigger.dataset.modal, $trigger)
	);
}

initModals();
