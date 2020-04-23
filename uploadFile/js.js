let file = document.getElementById('file');
file.onchange = () => {
    srcImage = URL.createObjectURL(file.files[0]);
    document.getElementById('myImg').src = srcImage;
}
