document.getElementById('makeResume').addEventListener('click', generateResume);

function generateResume(){
  const name      = document.getElementById('name').value;
  const email     = document.getElementById('email').value;
  const phone     = document.getElementById('phone').value;
  const degree    = document.getElementById('degree').value;
  const institute = document.getElementById('institute').value;
  const year      = document.getElementById('year').value;
  const result    = document.getElementById('result').value;
  const resultTy  = document.getElementById('resultType').value;
  const skills    = document.getElementById('skills').value;

  const hobbies = [...document.querySelectorAll('input[type=checkbox]')]
                  .filter(cb => cb.checked)
                  .map(cb => cb.value)
                  .join(', ');

  const html = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education:-</h3>
    <p>${degree} – ${institute} (${year})</p>
    <p><strong>${resultTy}:</strong> ${result}</p>

    <h3>Skills:-</h3>
    <p>${skills}</p>

    <h3>Hobbies:-</h3>
    <p>${hobbies || '—'}</p>
  `;

  const out = document.getElementById('resumeOutput');
  out.innerHTML = html;
  out.classList.remove('hidden');
}
       














    
//     function generateResume() {
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const degree = document.getElementById('degree').value;
//   const institution = document.getElementById('institution').value;
//   const gradYear = document.getElementById('gradYear').value;
//   const experience = document.getElementById('experience').value;


//   const resumeHTML = `
//     <h2>${name}</h2>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone:</strong> ${phone}</p>
    
//     <h3>Education</h3>
//     <p>${degree} - ${institution} (${gradYear})</p>

//     <h3>Experience</h3>
//     <p>${experience}</p>
//   `;

//   const resumeOutput = document.getElementById('resumeOutput');
//   resumeOutput.innerHTML = resumeHTML;
//   resumeOutput.classList.remove('hidden');
// }