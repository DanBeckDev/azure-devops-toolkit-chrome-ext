import SelectorObserver from 'selector-observer'

const rootElement = document.querySelector(".lwp");
const observer = new SelectorObserver(rootElement);

const onClickHandlerIDELink = (fileLocation) => {
  chrome.storage.sync.get('projectDirectory', function(obj) {
    const localFileDirectory = obj.projectDirectory;
    location.replace(`vscode://file/${localFileDirectory + fileLocation}`);
  });
};

const IDELink = (el) => {
  const button = document.createElement('BUTTON');
  const svg = document.createElement('SVG');
  const imageIcon = document.createElement('IMG');
  const branchName = el.nextSibling.innerHTML;

  button.appendChild(svg);
  button.classList.add('vs-code-button');
  button.onclick = () => onClickHandlerIDELink(branchName);

  imageIcon.src = chrome.runtime.getURL('code.svg');
  imageIcon.style = 'height: 1rem; width: 1rem;';

  svg.style = 'margin: 0 0.3rem';
  svg.appendChild(imageIcon);

  return button;
};

observer.observe('.comment-file-header-link', {
  add(el) {
    const container = el.parentElement.parentElement.firstChild;
    container.append(IDELink(el));
  },
});
