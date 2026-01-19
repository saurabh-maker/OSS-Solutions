// Candidate data from CSV
const candidatesData = [
    {
        firstName: "Leonardo Omar",
        lastName: "Sailer",
        headline: "OSS & Inventory Solution Engineer at CirionTechnologies",
        location: "Argentina",
        currentTitle: "OSS & Inventory Solution Engineer at Cirion Technologies",
        currentCompany: "Cirion Technologies",
        profileUrl: "https://www.linkedin.com/in/leonardo-omar-sailer-66500a1",
        status: "uncontacted"
    },
    {
        firstName: "Maximiliano",
        lastName: "Ventorutti",
        headline: "Arquitecto de Soluciones - BBVA",
        location: "Buenos Aires",
        currentTitle: "Arquitecto de soluciones",
        currentCompany: "BBVA en Argentina",
        profileUrl: "https://www.linkedin.com/in/maximiliano-ventorutti",
        status: "uncontacted"
    },
    {
        firstName: "Fernando",
        lastName: "Gardella",
        headline: "Solutions Delivery Manager en Zarcom | Soluciones OSS - GIS - I+D",
        location: "Buenos Aires",
        currentTitle: "Solutions Delivery Manager",
        currentCompany: "Zarcom :: Technology Solutions",
        profileUrl: "https://www.linkedin.com/in/fernando-gardella-b34b6015",
        status: "uncontacted"
    },
    {
        firstName: "Pablo",
        lastName: "Renó",
        headline: "Home Business OSS Expert at Millicom International Cellular S.A.",
        location: "Argentina",
        currentTitle: "Regional Home Business OSS Expert",
        currentCompany: "Millicom (Tigo)",
        profileUrl: "https://www.linkedin.com/in/pablo-renó-96b239",
        status: "uncontacted"
    },
    {
        firstName: "Germán",
        lastName: "Schüle",
        headline: "Especialista en Arquitectura OSS",
        location: "Cordoba",
        currentTitle: "Arquitectura OSS",
        currentCompany: "Vates Software",
        profileUrl: "https://www.linkedin.com/in/schulegerman",
        status: "uncontacted"
    },
    {
        firstName: "Julio Cesar",
        lastName: "Farfan Mora",
        headline: "OSS Architectural Engineer @ AMDOCS",
        location: "Cordoba",
        currentTitle: "OSS Architectural Engineer",
        currentCompany: "Amdocs",
        profileUrl: "https://www.linkedin.com/in/julio-cesar-farfan-mora-0b1003b",
        status: "uncontacted"
    },
    {
        firstName: "Ricardo",
        lastName: "Malagoli",
        headline: "Leader of OSS Solution Development and IT Operation at Movistar",
        location: "Argentina",
        currentTitle: "Senior engineer",
        currentCompany: "Movistar",
        profileUrl: "https://www.linkedin.com/in/ingmalagoli",
        status: "uncontacted"
    },
    {
        firstName: "German",
        lastName: "Apesteguia",
        headline: "OSS/BSS Solution Architect",
        location: "Argentina",
        currentTitle: "OSS/BSS Consultant",
        currentCompany: "Tecnova Soluciones Informaticas",
        profileUrl: "https://www.linkedin.com/in/germanapesteguia",
        status: "uncontacted"
    },
    {
        firstName: "Pablo",
        lastName: "Zaremba",
        headline: "BSS / OSS Lead Solutions Architect",
        location: "Argentina",
        currentTitle: "Lead BSS / OSS Solution Architect",
        currentCompany: "Prodapt",
        profileUrl: "https://www.linkedin.com/in/pablozaremba",
        status: "uncontacted"
    },
    {
        firstName: "GERARDO",
        lastName: "VILLAMIZAR OVALLES",
        headline: "Arquitecto OSS Soporte a la Operación.",
        location: "Buenos Aires",
        currentTitle: "Arquitecto OSS",
        currentCompany: "Telecentro",
        profileUrl: "https://www.linkedin.com/in/gerardo-villamizar-ovalles-6870833a",
        status: "uncontacted"
    },
    {
        firstName: "Leonardo",
        lastName: "Ramos",
        headline: "Solution Architect | Project Manager | Business Analyst | Telecom BSS OSS | HRIS ATS",
        location: "Argentina",
        currentTitle: "Integrations Business Analyst",
        currentCompany: "Avature",
        profileUrl: "https://www.linkedin.com/in/leonardo-ramos-49848928",
        status: "uncontacted"
    },
    {
        firstName: "Paul",
        lastName: "Welsch",
        headline: "Arquitecto Empresarial | Mag. en dirección estratégica en ingeniería de software",
        location: "Buenos Aires",
        currentTitle: "Enterprise Solution Architect",
        currentCompany: "Interbanking",
        profileUrl: "https://www.linkedin.com/in/paul-welsch-670929259",
        status: "uncontacted"
    },
    {
        firstName: "Matias",
        lastName: "R.",
        headline: "Experto Soluciones IT | Transformación digital Telco-Techco",
        location: "Argentina",
        currentTitle: "Senior Solutions Architect",
        currentCompany: "Huawei Technologies",
        profileUrl: "https://www.linkedin.com/in/matiasridelnik",
        status: "uncontacted"
    },
    {
        firstName: "Jesse",
        lastName: "Colmenares",
        headline: "Solutions Architect",
        location: "Buenos Aires",
        currentTitle: "Solutions Architect",
        currentCompany: "NTT",
        profileUrl: "https://www.linkedin.com/in/jesse-colmenares",
        status: "uncontacted"
    },
    {
        firstName: "Daniel",
        lastName: "Blot",
        headline: "Solution Architect | Orchestration | BSS & OSS | Cloud & On-Premise",
        location: "Argentina",
        currentTitle: "Solution Architect",
        currentCompany: "Intraway",
        profileUrl: "https://www.linkedin.com/in/daniel-blot-8489b87",
        status: "uncontacted"
    },
    {
        firstName: "Fernando",
        lastName: "Molina",
        headline: "Solution Architect",
        location: "Argentina",
        currentTitle: "Solution Architect",
        currentCompany: "Huawei Technologies",
        profileUrl: "https://www.linkedin.com/in/fernando-molina-1b27213a",
        status: "uncontacted"
    },
    {
        firstName: "Federico",
        lastName: "Elizondo",
        headline: "Solutions Architect at Nokia",
        location: "Argentina",
        currentTitle: "Solutions Architect",
        currentCompany: "Nokia",
        profileUrl: "https://www.linkedin.com/in/federico-elizondo-4b34a1a",
        status: "uncontacted"
    },
    {
        firstName: "Pablo Andres",
        lastName: "Flores",
        headline: "Líder Técnico - Especialista OSS - Solution Architect",
        location: "Comuna 9",
        currentTitle: "Tech Lead - Especialista OSS",
        currentCompany: "Personal",
        profileUrl: "https://www.linkedin.com/in/pabloflores",
        status: "uncontacted"
    }
];

let filteredCandidates = [...candidatesData];
let currentCandidate = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayCandidates(candidatesData);
    updateInsights();
    setupEventListeners();
});

// Display candidates in the grid
function displayCandidates(candidates) {
    const grid = document.getElementById('candidatesGrid');
    
    if (candidates.length === 0) {
        grid.innerHTML = `
            <div class="loading">
                <i class="fas fa-inbox"></i>
                <p>No candidates found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = candidates.map((candidate, index) => `
        <div class="candidate-card" data-index="${index}">
            <div class="candidate-header">
                <div class="candidate-info">
                    <h3>${candidate.firstName} ${candidate.lastName}</h3>
                    <p><i class="fas fa-briefcase"></i> ${candidate.currentTitle}</p>
                    <p><i class="fas fa-building"></i> ${candidate.currentCompany}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${candidate.location}</p>
                    <span class="candidate-badge badge-${candidate.status}">${candidate.status.toUpperCase()}</span>
                </div>
                <a href="${candidate.profileUrl}" target="_blank" class="linkedin-btn" onclick="event.stopPropagation()">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
            
            <div class="candidate-details">
                <div class="detail-row">
                    <span class="detail-label">Headline:</span>
                    <span class="detail-value">${candidate.headline}</span>
                </div>
            </div>
            
            <div class="candidate-actions">
                <button class="action-btn btn-approve" onclick="handleAction(event, ${index}, 'approve')">
                    <i class="fas fa-check"></i> Approve
                </button>
                <button class="action-btn btn-review" onclick="handleAction(event, ${index}, 'review')">
                    <i class="fas fa-clock"></i> Review
                </button>
                <button class="action-btn btn-reject" onclick="handleAction(event, ${index}, 'reject')">
                    <i class="fas fa-times"></i> Reject
                </button>
                <button class="action-btn btn-feedback" onclick="openFeedbackModal(event, ${index})">
                    <i class="fas fa-comment"></i> Feedback
                </button>
            </div>
        </div>
    `).join('');
}

// Update insights in sidebar
function updateInsights() {
    // Total candidates
    document.getElementById('totalCandidates').textContent = candidatesData.length;
    
    // Location insights
    const locations = {};
    candidatesData.forEach(c => {
        locations[c.location] = (locations[c.location] || 0) + 1;
    });
    
    const topLocations = Object.entries(locations)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([loc, count]) => `${loc} (${count})`)
        .join(', ');
    
    document.getElementById('locationInsight').textContent = topLocations || 'All Argentina';
    
    // Company insights
    const companies = {};
    candidatesData.forEach(c => {
        companies[c.currentCompany] = (companies[c.currentCompany] || 0) + 1;
    });
    
    const topCompanies = Object.entries(companies)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([company, count]) => company)
        .join(', ');
    
    document.getElementById('companyInsight').textContent = topCompanies || 'Various companies';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        filteredCandidates = candidatesData.filter(candidate => {
            return (
                candidate.firstName.toLowerCase().includes(searchTerm) ||
                candidate.lastName.toLowerCase().includes(searchTerm) ||
                candidate.currentCompany.toLowerCase().includes(searchTerm) ||
                candidate.currentTitle.toLowerCase().includes(searchTerm) ||
                candidate.headline.toLowerCase().includes(searchTerm) ||
                candidate.location.toLowerCase().includes(searchTerm)
            );
        });
        
        displayCandidates(filteredCandidates);
    });
    
    // Feedback form submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', handleFeedbackSubmit);
}

// Filter candidates
function filterCandidates(filterType) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    switch(filterType) {
        case 'all':
            filteredCandidates = [...candidatesData];
            break;
        case 'buenos-aires':
            filteredCandidates = candidatesData.filter(c => 
                c.location.toLowerCase().includes('buenos aires')
            );
            break;
        case 'argentina':
            filteredCandidates = candidatesData.filter(c => 
                c.location.toLowerCase().includes('argentina')
            );
            break;
        case 'open-to-work':
            // This would need to be added to the data if available
            filteredCandidates = [...candidatesData];
            break;
    }
    
    displayCandidates(filteredCandidates);
}

// Handle candidate actions
function handleAction(event, index, action) {
    event.stopPropagation();
    const candidate = candidatesData[index];
    
    let message = '';
    switch(action) {
        case 'approve':
            message = `${candidate.firstName} ${candidate.lastName} marked as approved!`;
            break;
        case 'review':
            message = `${candidate.firstName} ${candidate.lastName} moved to review!`;
            break;
        case 'reject':
            message = `${candidate.firstName} ${candidate.lastName} marked as rejected!`;
            break;
    }
    
    showToast(message);
}

// Open feedback modal
function openFeedbackModal(event, index) {
    event.stopPropagation();
    currentCandidate = candidatesData[index];
    
    const modal = document.getElementById('feedbackModal');
    const candidateName = `${currentCandidate.firstName} ${currentCandidate.lastName}`;
    
    document.getElementById('candidateName').value = candidateName;
    document.getElementById('displayCandidateName').value = candidateName;
    
    modal.classList.add('active');
}

// Close feedback modal
function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.classList.remove('active');
    document.getElementById('feedbackForm').reset();
    currentCandidate = null;
}

// Handle feedback form submission
function handleFeedbackSubmit(event) {
    event.preventDefault();
    
    const formData = {
        candidateName: document.getElementById('candidateName').value,
        rating: document.getElementById('rating').value,
        decision: document.getElementById('decision').value,
        feedback: document.getElementById('feedback').value,
        reviewerName: document.getElementById('reviewerName').value,
        linkedInUrl: currentCandidate ? currentCandidate.profileUrl : '',
        currentCompany: currentCandidate ? currentCandidate.currentCompany : '',
        currentTitle: currentCandidate ? currentCandidate.currentTitle : '',
        timestamp: new Date().toLocaleString()
    };
    
    // Email content
    const emailSubject = `Candidate Feedback: ${formData.candidateName}`;
    const emailBody = `
CANDIDATE FEEDBACK - OSS Solutions Architect Position

Candidate Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.candidateName}
Current Title: ${formData.currentTitle}
Current Company: ${formData.currentCompany}
LinkedIn: ${formData.linkedInUrl}

Review Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rating: ${formData.rating}
Decision: ${formData.decision}

Feedback:
${formData.feedback}

Reviewed By: ${formData.reviewerName}
Date: ${formData.timestamp}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:sausriva@ciena.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showToast('Opening your email client to send feedback...');
    
    // Close modal
    setTimeout(() => {
        closeFeedbackModal();
    }, 1000);
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('feedbackModal');
    if (event.target === modal) {
        closeFeedbackModal();
    }
});
