/**
 * ONE!R Official Website Logic
 * Focus: Execution & User Flow
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECTORS
    const purchaseBtn = document.querySelector('a[href="#"]'); // The "Purchase Slot" button
    const signUpBtn = document.querySelector('button:contains("Sign Up")');
    
    // 2. USER AUTH STATE (Simulated for Master Copy)
    // In a real app, this would check your database/Firebase
    let isLoggedIn = false; 
    let isFirstTimeUser = true;

    // 3. PURCHASE FLOW LOGIC
    const handlePurchaseFlow = (e) => {
        e.preventDefault();
        
        console.log("ONE!R: Initiating Purchase Flow...");

        if (isFirstTimeUser) {
            alert("Redirecting to Sign Up page...");
            // window.location.href = "/signup.html"; 
            return;
        }

        if (!isLoggedIn) {
            alert("Please Login to continue.");
            // window.location.href = "/login.html";
            return;
        }

        // Final Step: Payment
        alert("Redirecting to UPI Secure Payment...");
        // window.location.href = "/payment-upi.html";
    };

    // 4. EVENT LISTENERS
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', handlePurchaseFlow);
    }

    // 5. SIMPLE SCROLL REVEAL (For "Premium" feel)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply reveal to all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});

// Helper to find buttons by text (Since you have no IDs yet)
window.jQueryLike = (selector, text) => {
  return Array.from(document.querySelectorAll(selector)).find(el => el.textContent.includes(text));
};

