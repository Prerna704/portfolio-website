document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2000);

    // Set current date in footer
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const currentDateEl = document.getElementById('current-date');
    if (currentDateEl) {
        currentDateEl.textContent = currentDate;
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            // Toggle menu icon
            const icon = mobileMenuButton.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on a link
    if (mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                // Reset menu icon
                const icon = mobileMenuButton?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------- Certifications Modal --------
    const viewCertificationsBtn = document.getElementById('view-certifications');
    const certificationModal = document.getElementById('certification-modal');
    const closeCertificationBtn = document.getElementById('close-certification');

    if (viewCertificationsBtn && certificationModal && closeCertificationBtn) {
        viewCertificationsBtn.addEventListener('click', () => {
            certificationModal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        });

        closeCertificationBtn.addEventListener('click', () => {
            certificationModal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });

        // Close modal on background click
        certificationModal.addEventListener('click', e => {
            if (e.target === certificationModal) {
                certificationModal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !certificationModal.classList.contains('hidden')) {
                certificationModal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }

    // (Skills section now uses static tags in HTML; no JS rendering needed)
    // The skill tags are handled via CSS and HTML markup in the Skills section.


    // Projects Data and Filtering
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectsGrid = document.getElementById('projects-grid');

    const projectsData = [
        {
            id: 1,
            title: 'Food Delivery Web Application',
            description: 'Full-stack MERN application for online food ordering and order management.',
            tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
            category: 'fullstack',
            github: 'https://github.com/Prerna704/Food-Delivery.git',
            demo: 'https://food-delivery-five-dusky.vercel.app/',
            image: 'https://s3-alpha.figma.com/hub/file/2900897751/b5ccf2b2-3e9a-490b-ac55-a94a768f767a-cover.png'
        },
        {
            id: 2,
            title: 'Blog Website',
            description: 'Web-based blogging platform supporting post creation, editing, and secure user authentication.',
            tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
            category: 'fullstack',
            github: 'https://github.com/Prerna704/Blog-Website-2.0.git',
            demo: 'https://github.com/Prerna704/Blog-Website-2.0.git',
            image: 'https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg'
        },
        {
            id: 3,
            title: 'Online Quiz Application',
            description: 'Interactive quiz application with API-based questions, timer, and category filters.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'API'],
            category: 'web',
            github: 'https://github.com/Prerna704/Online-Quiz-Application.git',
            demo: 'https://prerna704.github.io/Online-Quiz-Application/',
            image: 'https://cdn.vectorstock.com/i/500p/91/01/quiz-game-test-exam-answer-education-learning-vector-25839101.jpg'
        },
        {
            id: 4,
            title: 'E-Learning Platform',
            description: 'A comprehensive e-learning platform for online courses, user management, and interactive learning modules.',
            tags:  ['HTML5', 'CSS3', 'JavaScript', 'API'],
            category: 'web',
            github: 'https://github.com/Prerna704/E-Learning-Platform.git',
            demo: 'https://e-learning-platform-8iav.onrender.com',
            image: 'https://img.freepik.com/premium-vector/elearning-flat-landing-page-website-template-video-tutorial_676904-10833.jpg?w=996'
        },
        {
            id: 5,
            title: 'Loyalty Reward and Membership Management System',
            description: 'A system for managing customer loyalty programs, rewards, and memberships.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'API','PHP'],
            category: 'web',
            github: 'https://github.com/Prerna704/LOYALTY-REWARD-AND-MEMBERSHIP-MANAGEMENT.git',
            demo: 'https://prerna704.github.io/LOYALTY-REWARD-AND-MEMBERSHIP-MANAGEMENT/',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/803841184440271.65523e0e1dd20.png'
        },
        {
            id: 6,
            title: 'Countdown Timer',
            description: 'A customizable countdown timer application with various features.',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            category: 'web',
            github: 'https://github.com/Prerna704/countdown-Timer.git',
            demo: 'https://countdown-timer-kkv4.vercel.app/',
            image: 'https://thumbs.dreamstime.com/z/countdown-timer-design-website-clock-vector-illustration-eps-187143770.jpg'
        },
        {
            id: 7,
            title: 'Mood Weather App',
            description: 'An app that suggests activities or moods based on current weather conditions.',
            tags: ['JavaScript', 'API', 'HTML', 'CSS'],
            category: 'web',
            github: 'https://github.com/Prerna704/Mood-Weather.git',
            demo: 'https://prerna704.github.io/Mood-Weather/',
            image: 'https://cdn.dribbble.com/userupload/11691189/file/original-9e15f16591234c1364843746eb514624.png?format=webp&resize=1440x&vertical=center'
        },
        {
            id: 8,
            title: 'AI Hotel Booking Assistance ChatBot',
            description: 'An AI-powered chatbot designed to assist users with hotel booking inquiries and reservations.',
            tags: ['React.js', 'Node.js', 'AI', 'Chatbot', 'API'],
            category: 'fullstack',
            github: 'https://github.com/Prerna704/Ai-Hotel-Booking-Assistance-chatBot-.git',
            demo: 'https://ai-hotel-booking-assistance-chat-bo.vercel.app/',
            image: 'https://miro.medium.com/v2/resize:fit:1080/1*rPdl5XZRg-mIPPp5Bcsy_w.jpeg'
        },
        {
            id: 9,
            title: 'Maven Project - TicTacToe',
            description: 'Java Maven project implementing a TicTacToe game using object-oriented principles.',
            tags: ['Java', 'Maven'],
            category: 'maven',
            github: 'https://github.com/Prerna704/Maven_Project-TicTacToe-.git',
            demo: 'https://github.com/Prerna704/Maven_Project-TicTacToe-.git',
            image: 'https://tse2.mm.bing.net/th/id/OIP.Tpz--u6pNANlpcH8-bs6SQHaLM?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        {
            id: 10,
            title: 'Maven Project - Calculator',
            description: 'Java Maven calculator project demonstrating modular build configuration.',
            tags: ['Java', 'Maven'],
            category: 'maven',
            github: 'https://github.com/Prerna704/Maven_Project-Calculator-.git',
            demo: 'https://github.com/Prerna704/Maven_Project-Calculator-.git',
            image: 'https://th.bing.com/th/id/OIP.uzkzjuU2ooMx4if5-BbmAwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
        }
    ];

    // Function to render projects
    const renderProjects = (filter = 'all') => {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';

        const filteredProjects = filter === 'all'
            ? projectsData
            : projectsData.filter(project => project.category === filter);

        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300';

            // Determine image or icon
            const imageContent = project.image
                ? `<img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">`
                : `<div class="h-48 bg-gradient-to-br from-red-900/30 to-red-700/30 flex items-center justify-center">
                     <i class="fas fa-project-diagram text-4xl text-red-400"></i>
                   </div>`;

            projectCard.innerHTML = `
                <div class="relative overflow-hidden group">
                    ${imageContent}
                    <div class="absolute top-3 right-3 md:top-4 md:right-4">
                        <span class="px-2 py-1 bg-black/80 backdrop-blur-sm text-red-400 text-xs font-medium rounded-full border border-red-500/30">
                            ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                    </div>
                </div>
                
                <div class="p-4 md:p-6">
                    <h3 class="text-lg md:text-xl font-bold text-gray-300 mb-2 md:mb-3">${project.title}</h3>
                    <p class="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-5">
                        ${project.tags.map(tag => `
                            <span class="px-2 md:px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="flex items-center">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" 
                               class="flex items-center text-red-400 hover:text-red-300 transition text-sm md:text-base mr-4">
                                <i class="fab fa-github mr-2"></i> Code
                            </a>
                        ` : ''}
                        
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" 
                               class="flex items-center text-red-300 hover:text-red-200 transition text-sm md:text-base">
                                <i class="fas fa-external-link-alt mr-2"></i> Visit
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });

        // Add event listeners to detail buttons
        document.querySelectorAll('.project-details').forEach(btn => {
            btn.addEventListener('click', function () {
                const projectId = this.getAttribute('data-project');
                const project = projectsData.find(p => p.id == projectId);
                alert(`Project: ${project.title}\n\n${project.description}\n\nTechnologies: ${project.tags.join(', ')}`);
            });
        });
    };

    // Initialize projects
    renderProjects();

    // Add click event to project filters
    if (projectFilters.length) {
        projectFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Remove active class from all filters
                projectFilters.forEach(f => f.classList.remove('active', 'bg-red-500/10', 'text-red-400', 'border-red-500/30'));
                projectFilters.forEach(f => f.classList.add('bg-gray-900', 'text-gray-400', 'border-gray-800'));

                // Add active class to clicked filter
                filter.classList.add('active', 'bg-red-500/10', 'text-red-400', 'border-red-500/30');
                filter.classList.remove('bg-gray-900', 'text-gray-400', 'border-gray-800');

                // Render filtered projects
                const category = filter.getAttribute('data-filter');
                renderProjects(category);
            });
        });
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible', 'opacity-100');
                backToTopButton.classList.remove('invisible', 'opacity-0');
            } else {
                backToTopButton.classList.remove('visible', 'opacity-100');
                backToTopButton.classList.add('invisible', 'opacity-0');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.skill-card, .project-card, .info-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Contact Form https://formspree.io/f/xzdjkbjw
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert('Message successfully sent!');
                    contactForm.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (err) {
                alert('Something went wrong. Please try again.');
            } finally {
                btn.disabled = false;
                btn.textContent = originalText;
                btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
            }
        });
    }

    // Download CV button
    const downloadCvBtn = document.getElementById('download-cv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // In a real implementation, this would link to an actual CV file
            alert('CV download would start here. In a real implementation, this would link to your CV file.');
            // window.location.href = 'path-to-your-cv.pdf';
        });
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        // Spacebar scrolls down (when not in input/textarea)
        if (e.key === ' ' && !e.target.matches('input, textarea, button, a')) {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight * 0.8,
                behavior: 'smooth'
            });
        }
    });

    // Initialize tooltips for tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        const title = icon.getAttribute('title');
        if (title) {
            icon.addEventListener('mouseenter', function (e) {
                // Create tooltip
                const tooltip = document.createElement('div');
                tooltip.className = 'fixed z-50 bg-black/90 text-gray-300 px-3 py-2 rounded-lg text-sm shadow-lg border border-gray-700';
                tooltip.textContent = title;
                tooltip.style.top = (e.clientY - 40) + 'px';
                tooltip.style.left = (e.clientX - 20) + 'px';
                tooltip.id = 'tech-tooltip';

                document.body.appendChild(tooltip);
            });

            icon.addEventListener('mouseleave', function () {
                const tooltip = document.getElementById('tech-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });

            icon.addEventListener('mousemove', function (e) {
                const tooltip = document.getElementById('tech-tooltip');
                if (tooltip) {
                    tooltip.style.top = (e.clientY - 40) + 'px';
                    tooltip.style.left = (e.clientX - 20) + 'px';
                }
            });
        }
    });
});
