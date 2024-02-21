const imagePickerElement = document.getElementById("imagePath");
const previewElement = document.getElementById("image-preview");

function showPreview() {
  const files = imagePickerElement.files;
  if (!files || files.length === 0) {
    previewElement.style.display = "none";
    return;
  }

  const pickedFile = files[0];

  previewElement.src = URL.createObjectURL(pickedFile);
  previewElement.style.display = "block";
}

imagePickerElement.addEventListener("change", showPreview);
