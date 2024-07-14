const terminal = document.getElementById('terminal');

const bootSequence = [
    "**Terminal Boot Sequence Initiated**",
    "",
    "**Initialising Site_86_Operating System...**",
    "████████████████████████████████████████████████████████████████████████████████████████████",
    "",
    "**Loading System Files...**",
    "████████████████████████████████████████████████████████████████████████████████████████████",
    "",
    "**Foundation_RAISA System Boot Complete**",
    "",
    "**Please Log In**",
    "Username: ",
];

let currentIndex = 0;

function printNextLine() {
    if (currentIndex < bootSequence.length) {
        const line = document.createElement('div');
        line.textContent = bootSequence[currentIndex++];
        terminal.appendChild(line);
        setTimeout(printNextLine, 500); // Adjust delay for each line
    } else {
        showLoginPrompt();
    }
}

function showLoginPrompt() {
    const usernameLine = document.createElement('div');
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('id', 'username');
    usernameLine.appendChild(document.createTextNode("Username: "));
    usernameLine.appendChild(usernameInput);
    terminal.appendChild(usernameLine);

    usernameInput.focus();

    usernameInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showPasswordPrompt();
        }
    });
}

function showPasswordPrompt() {
    const passwordLine = document.createElement('div');
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordLine.appendChild(document.createTextNode("Password: "));
    passwordLine.appendChild(passwordInput);
    terminal.appendChild(passwordLine);

    passwordInput.focus();

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            validateCredentials();
        }
    });
}

function validateCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'olympusrrhzeus@RAISA.gov' && password === 'fulmen deum') {
        accessGranted();
    } else {
        const errorLine = document.createElement('div');
        errorLine.textContent = "**Access Denied**";
        terminal.appendChild(errorLine);
    }
}

function accessGranted() {
    const grantedLine = document.createElement('div');
    grantedLine.textContent = "**Access Granted**";
    terminal.appendChild(grantedLine);

    const dcbLine = document.createElement('div');
    dcbLine.textContent = "Type 'DCB' to continue:";
    terminal.appendChild(dcbLine);

    const dcbInput = document.createElement('input');
    dcbInput.setAttribute('type', 'text');
    dcbInput.setAttribute('id', 'dcb');
    terminal.appendChild(dcbInput);

    dcbInput.focus();

    dcbInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (dcbInput.value === 'DCB') {
                window.location.href = 'https://docs.google.com/presentation/d/1Z-2Nt39fGeay_m8TPZGvFZCyNbYZsnVhZQiPesekveQ/edit?usp=sharing';
            } else {
                const errorLine = document.createElement('div');
                errorLine.textContent = "**Invalid Command**";
                terminal.appendChild(errorLine);
            }
        }
    });
}

printNextLine();
