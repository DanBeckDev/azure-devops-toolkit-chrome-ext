import {observe} from 'selector-observer'
const copy = require('clipboard-copy')

const onClickHandlerIDELink = fileLocation => {
  chrome.storage.sync.get("projectDirectory", function (obj) {
    const localFileDirectory = obj.projectDirectory;
    location.replace(`vscode://file/${localFileDirectory + fileLocation}`);
  });
};

const onClickHandlerCopyBranch = branchName => {
  copy(branchName);
}


const copyBranchButton = () => {
  const branchName = document.querySelector(".branch-link").firstChild.innerHTML;
  const button = document.createElement("BUTTON");
  
  button.classList.add("ms-Button", "pull-request-vote-button", "ms-Button--default", "root-59")
  button.innerHTML = "Copy Branch";
  button.onclick = () => onClickHandlerCopyBranch(branchName);
  button.style = "margin-left: 1rem; font-weight: 500;";
  return button;
}

const IDELink = (el) => {
  const button = document.createElement("BUTTON");
  const svg = document.createElement("SVG");
  const imageIcon = document.createElement("IMG");
  const branchName = el.nextSibling.innerHTML;

  button.appendChild(svg);
  button.classList.add("vs-code-button");
  button.onclick = () => onClickHandlerIDELink(branchName);

  imageIcon.src = chrome.runtime.getURL("code.svg");
  imageIcon.style = "height: 1rem; width: 1rem;";

  svg.style = "margin: 0 0.3rem";
  svg.appendChild(imageIcon);

  return button;
};

observe('.right-group', {
  add(el) {
    el.append(copyBranchButton());
  }
});

observe('.file-link', {
  add(el) {
    el.appendChild(IDELink(el));
  },
});
