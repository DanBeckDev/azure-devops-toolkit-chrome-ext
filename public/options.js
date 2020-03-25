 const saveButton = document.querySelector("#save-button");

 saveButton.addEventListener('click', function() {
    var input = document.querySelector('#project-dir-inp');
    var projectDirectory = input.value;

    chrome.storage.sync.set({
        projectDirectory,
    })
});