document.getElementById('idForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('displayName').textContent = document.getElementById('name').value;
  document.getElementById('displayStudentId').textContent = document.getElementById('studentId').value;
  document.getElementById('displayBranch').textContent = document.getElementById('branch').value;
  document.getElementById('displayDob').textContent = document.getElementById('dob').value;
  document.getElementById('displayMobile').textContent = document.getElementById('mobile').value;
  document.getElementById('displayAadhaar').textContent = document.getElementById('aadhaar').value;
  document.getElementById('displayAddress').textContent = document.getElementById('address').value;

  const photoInput = document.getElementById('photoUpload');
  const preview = document.getElementById('photoPreview');

  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
    }
    reader.readAsDataURL(photoInput.files[0]);
  }
});
