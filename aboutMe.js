'use strict'

const aboutme = document.querySelector('.aboutme');
const job = document.querySelector('.job');
const hobby = document.querySelector('.hobby');
const overlay = document.querySelector('.overlay');
const closed = document.querySelector('.close');
const socialmedia = document.querySelector('.socialmedia');

// buttons
const b1 = document.querySelector('.btn1');
const b2 = document.querySelector('.btn2');
const b3 = document.querySelector('.btn3');
const b4 = document.querySelector('.btn4');

// ---- closed function ( adding 'hidden' class)
const jobClose = () => {
    job.classList.add('hidden');
}
const hobbyClose = () => {
    hobby.classList.add('hidden');
}
const aboutmeClose = () => {
    aboutme.classList.add('hidden');
}
const socialClose = () => {
    socialmedia.classList.add('hidden');
}
// --------------------------------------

// closet X
const exit = () => {
    closed.classList.remove('hidden');
}
// ---------

// remove 'hidden' class
const aboutmeRemove = () => {
    aboutme.classList.remove('hidden');
}
const jobRemove = () => {
    job.classList.remove('hidden');
}
const hobbyRemove = () => {
    hobby.classList.remove('hidden');
}
const overlayRemove = () => {
    overlay.classList.remove('hidden');
}
const socialRemove = () => {
    socialmedia.classList.remove('hidden');
}
//-------------------

const verifyAboutme = () => {
    if (!job.classList.contains('hidden') ||
        !hobby.classList.contains('hidden') ||
        !aboutme.classList.contains('hidden') ||
        !socialmedia.classList.contains('hidden')
    ) {
        return true;
    } else
        return false;
}

const but1 = () => {
    aboutmeRemove();
    overlayRemove();
    exit();
    if (!job.classList.contains('hidden') ||
        !hobby.classList.contains('hidden') ||
        !socialmedia.classList.contains('hidden')
    ) {
        jobClose();
        hobbyClose();
        socialClose();
    }

}

const but2 = () => {
    jobRemove();
    overlayRemove();
    exit();
    if (!hobby.classList.contains('hidden') ||
        !aboutme.classList.contains('hidden') ||
        !socialmedia.classList.contains('hidden')
    ) {
        aboutmeClose();
        hobbyClose();
        socialClose();
    }
}
const but3 = () => {
    hobbyRemove();
    overlayRemove();
    exit();
    if (!job.classList.contains('hidden') ||
        !aboutme.classList.contains('hidden') ||
        !socialmedia.classList.contains('hidden')
    ) {
        jobClose();
        aboutmeClose();
        socialClose();
    }
}

const but4 = () => {
    socialRemove();
    overlayRemove();
    exit();
    if (!job.classList.contains('hidden') ||
        !aboutme.classList.contains('hidden') ||
        !hobby.classList.contains('hidden')
    ) {
        jobClose();
        aboutmeClose();
        hobbyClose();
    }
}

b1.addEventListener('click', but1);
b2.addEventListener('click', but2);
b3.addEventListener('click', but3);
b4.addEventListener('click', but4);

const close = () => {
    aboutme.classList.add('hidden');
    hobby.classList.add('hidden');
    job.classList.add('hidden');
    socialmedia.classList.add('hidden');
    overlay.classList.add('hidden');
    closed.classList.add('hidden');
}

closed.addEventListener('click', close);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        close();
    }
})