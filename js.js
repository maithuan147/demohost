let file = document.getElementById('file');
file.onchange = () => {
    let fileUpload = file.files;
    let dem = fileUpload.length;
    renderImg(dem);
}

function deleteImg(){
    let fileUpload = file.files;
    let fileUploadArray = Array.prototype.slice.call(fileUpload);
    let deletes = document.getElementsByClassName('delete');
    let deleteArray = Array.prototype.slice.call(deletes);
    deleteArray.forEach(element => {
        element.onclick = () => {
            let Id = element.getAttribute('data-id');
            fileUploadArray.splice(Id,1);
            let dem = fileUploadArray.length;
            console.log(fileUploadArray);
            renderImg(dem);
        }
    });
}

function renderImg(dem){
    let render = document.getElementById('render');
    for (let i = 0; i < dem; i++) {
        srcImage = URL.createObjectURL(file.files[i]);
        render.innerHTML += `<img id="myImg" src="${srcImage}" alt="your image"><span class="delete" data-id=${i}>x</span>`;
    }
    deleteImg();
}


    