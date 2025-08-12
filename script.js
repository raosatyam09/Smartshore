  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

    const directoryBtn = document.getElementById('directoryBtn');
  const dropdown = document.getElementById('directoryDropdownarroww');
//   const dropdown = document.querySelectorAll(".directoryDropdownarrow")
  const arrow = directoryBtn.querySelector('.arrow');

  directoryBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('rotate');
  });

// contact details -

   document.getElementById('contact_details').addEventListener("click", function() {
     
      document.getElementById("contact_form").style.display ="block";
      document.getElementById("contact_person").style.display="none";
     

        // 🔹 Added: Close sidebar on mobile
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('active');
    }
   })


   document.getElementById('contact_personal').addEventListener("click", function() {
     
      document.getElementById("contact_form").style.display ="none";
      document.getElementById("contact_person").style.display="block";


       if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('active');
    }

     
   })

// other function check 
     document.querySelectorAll('#directoryDropdownarroww a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
      }
    });
  });