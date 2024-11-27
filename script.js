document.addEventListener("DOMContentLoaded", async () => {
    const totalMembers = document.getElementById("total-members");
  
    try {
      const response = await fetch("http://localhost:5000/api/admin/members");
      const members = await response.json();
      totalMembers.textContent = members.length;
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  });
  