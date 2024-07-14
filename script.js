const terminal = document.getElementById('terminal');

const bootSequence = [
    "**Vault-Tec Terminal Boot Sequence Initiated**",
    "",
    "**Initialising Operating System...**",
    "████████████████████████████████████████████████████████████████████████████████████████████",
    "",
    "**Loading System Files...**",
    "████████████████████████████████████████████████████████████████████████████████████████████",
    "",
    "**Vault-Tec Industries (TM) System Boot Complete**",
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
    usernameInput.style.backgroundColor = 'black';
    usernameInput.style.color = 'green';
    usernameInput.style.border = 'none';
    usernameInput.style.fontFamily = 'inherit';
    usernameInput.style.fontSize = 'inherit';
    usernameInput.style.outline = 'none';
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
    passwordInput.style.backgroundColor = 'black';
    passwordInput.style.color = 'green';
    passwordInput.style.border = 'none';
    passwordInput.style.fontFamily = 'inherit';
    passwordInput.style.fontSize = 'inherit';
    passwordInput.style.outline = 'none';
    passwordLine.appendChild(document.createTextNode("Password: "));
    passwordLine.appendChild(passwordInput);
    terminal.appendChild(passwordLine);

    passwordInput.focus();

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            accessGranted();
        }
    });
}

function accessGranted() {
    const grantedLine = document.createElement('div');
    grantedLine.textContent = "**Access Granted**";
    terminal.appendChild(grantedLine);
}

printNextLine();
