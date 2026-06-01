// Arihant Packaging - Main Interactive Script
document.addEventListener("DOMContentLoaded", () => {
    // 1. STICKY GLASS HEADER ON SCROLL
    const header = document.querySelector(".header-main");
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on load

    // 2. MOBILE MENU DRAWER
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.body;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
            body.classList.toggle("menu-open");
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
                body.classList.remove("menu-open");
            });
        });
    }

    // 3. INTERSECTION OBSERVER FOR LUXURY SCROLL REVEALS
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-fade, .reveal-left, .reveal-right");
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // Reveal once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(elem => {
            revealObserver.observe(elem);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(elem => elem.classList.add("in-view"));
    }

    // 4. PRODUCTS CATALOG PAGE FILTERING (products.html)
    const productGrid = document.getElementById("product-grid");
    const filterTabs = document.querySelectorAll(".filter-tab");

    if (productGrid && typeof PRODUCTS !== "undefined") {
        // Function to render product card
        const renderProducts = (category) => {
            productGrid.innerHTML = "";
            const filteredList = getProductsByCategory(category);

            if (filteredList.length === 0) {
                productGrid.innerHTML = `
                    <div class="no-products text-center py-5">
                        <p class="h4 font-serif text-gold">No Products Found</p>
                        <p class="text-muted">We customize any packaging shape. Contact us directly to discuss your requirements.</p>
                    </div>
                `;
                return;
            }

            filteredList.forEach((prod, index) => {
                const card = document.createElement("div");
                card.className = "product-card reveal-up";
                card.style.animationDelay = `${index * 0.1}s`;
                card.innerHTML = `
                    <div class="product-image-container">
                        <img src="${prod.image}" alt="${prod.name}" class="product-image" loading="lazy">
                        <div class="product-badge">${prod.moq} MOQ</div>
                        <div class="product-overlay">
                            <a href="product-detail.html?id=${prod.id}" class="btn btn-outline btn-light btn-sm">View Details</a>
                            <a href="quote.html?product=${prod.id}" class="btn btn-gold btn-sm">Inquire Now</a>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-card-category">${prod.categoryName}</span>
                        <h3 class="product-card-title">${prod.name}</h3>
                        <p class="product-card-desc">${prod.tagline}</p>
                        <div class="product-card-footer">
                            <span class="product-card-moq">Min. Order: <strong>${prod.moq}</strong></span>
                            <a href="product-detail.html?id=${prod.id}" class="product-card-link">Explore →</a>
                        </div>
                    </div>
                `;
                productGrid.appendChild(card);
                
                // Trigger animation after appending
                setTimeout(() => {
                    card.classList.add("in-view");
                }, 50);
            });
        };

        // Tab click listeners
        filterTabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                e.preventDefault();
                filterTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                const category = tab.getAttribute("data-category");
                renderProducts(category);
            });
        });

        // Check if category is passed in URL query
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get("category");
        if (catParam) {
            const activeTab = document.querySelector(`.filter-tab[data-category="${catParam}"]`);
            if (activeTab) {
                activeTab.click();
            } else {
                renderProducts("all");
            }
        } else {
            renderProducts("all"); // Render all initially
        }
    }

    // 5. PRODUCT DETAIL DYNAMIC LOADING (product-detail.html)
    const detailContainer = document.getElementById("product-detail-container");
    if (detailContainer && typeof PRODUCTS !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");
        const product = getProductById(productId);

        if (product) {
            // Document Title Update
            document.title = `${product.name} | Premium Luxury Custom Packaging | Arihant Packaging`;

            // Setup Details UI
            const featuresHTML = product.features.map(f => `<li><i class="icon-gold">✓</i> ${f}</li>`).join("");
            
            // Build Specs Table
            let specsHTML = "";
            for (const [key, value] of Object.entries(product.specifications)) {
                specsHTML += `
                    <tr>
                        <td class="spec-label">${key}</td>
                        <td class="spec-value">${value}</td>
                    </tr>
                `;
            }

            detailContainer.innerHTML = `
                <div class="detail-grid">
                    <!-- Left: Images -->
                    <div class="detail-images reveal-left">
                        <div class="main-image-wrapper">
                            <img src="${product.image}" alt="${product.name}" class="detail-main-image" id="main-product-img">
                            <span class="detail-moq-badge">MOQ: ${product.moq}</span>
                        </div>
                        <div class="product-guarantees-grid">
                            <div class="guarantee-item">
                                <span class="g-icon">✦</span>
                                <span class="g-text">100% Customized</span>
                            </div>
                            <div class="guarantee-item">
                                <span class="g-icon">🛡️</span>
                                <span class="g-text">QC Passed</span>
                            </div>
                            <div class="guarantee-item">
                                <span class="g-icon">🌍</span>
                                <span class="g-text">Eco Materials</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Info -->
                    <div class="detail-content reveal-right">
                        <nav class="breadcrumb-nav">
                            <a href="index.html">Home</a> / 
                            <a href="products.html">Products</a> / 
                            <span class="current">${product.name}</span>
                        </nav>
                        
                        <span class="detail-cat-tag">${product.categoryName}</span>
                        <h1 class="detail-title font-serif">${product.name}</h1>
                        <p class="detail-tagline font-serif">${product.tagline}</p>
                        
                        <div class="detail-description-block">
                            <p>${product.description}</p>
                        </div>

                        <div class="detail-highlights">
                            <h3 class="highlight-section-title">Key Advantages</h3>
                            <ul class="features-list">
                                ${featuresHTML}
                            </ul>
                        </div>

                        <div class="action-buttons-group">
                            <a href="quote.html?product=${product.id}" class="btn btn-gold btn-lg">Request Bespoke Quote</a>
                            <a href="https://wa.me/919999999999?text=Hi,%20I%20am%20interested%20in%20customizing%20your%20${encodeURIComponent(product.name)}.%20Please%20provide%20quotation." target="_blank" class="btn btn-outline btn-lg btn-whatsapp">
                                <svg class="whatsapp-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.03 2.16a9.87 9.87 0 0 0-8.54 14.85L2 22l5.17-1.36a9.88 9.88 0 0 0 14.86-8.48c0-5.44-4.42-9.86-9.83-10.01Zm5.72 14c-.24.67-1.39 1.28-1.9 1.34c-.45.05-.9-.12-2.87-.9a13.33 13.33 0 0 1-5.69-5c-.73-.97-1.16-2.1-1.16-3.26c0-1.25.65-1.86.88-2.09c.18-.18.44-.24.69-.24c.08 0 .15 0 .22.01c.21.01.32.02.46.36c.18.43.6 1.48.66 1.6c.06.12.09.26.01.42c-.08.16-.18.26-.3.41c-.12.12-.25.28-.36.4c-.13.13-.27.28-.12.54c.15.26.68 1.12 1.46 1.82c1 .89 1.84 1.17 2.1 1.3c.26.13.41.11.56-.06c.15-.17.65-.75.82-.95c.17-.2.34-.17.57-.09c.23.09 1.48.7 1.73.82c.25.12.41.18.47.29c.06.11.06.67-.18 1.34Z"/></svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Product Specifications -->
                <div class="detail-specs-section reveal-up">
                    <h2 class="section-title font-serif text-center">Technical Specifications</h2>
                    <p class="section-subtitle text-center">Standard commercial parameters. We tailor every dimension, thickness, and finish to your needs.</p>
                    
                    <div class="specs-table-wrapper">
                        <table class="specs-table">
                            <tbody>
                                ${specsHTML}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Related Products Section -->
                <div class="related-products-section reveal-up">
                    <h2 class="section-title font-serif text-center">Complementary Packaging</h2>
                    <p class="section-subtitle text-center">Complete your brand identity by bundling your premium custom containers.</p>
                    <div class="related-grid" id="related-products-grid"></div>
                </div>
            `;

            // Render Related Products
            const relatedGrid = document.getElementById("related-products-grid");
            const related = getRelatedProducts(product.id, product.category);
            
            if (related.length > 0 && relatedGrid) {
                related.forEach(rel => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
                        <div class="product-image-container">
                            <img src="${rel.image}" alt="${rel.name}" class="product-image">
                            <div class="product-badge">${rel.moq} MOQ</div>
                            <div class="product-overlay">
                                <a href="product-detail.html?id=${rel.id}" class="btn btn-outline btn-light btn-sm">View Details</a>
                            </div>
                        </div>
                        <div class="product-info">
                            <span class="product-card-category">${rel.categoryName}</span>
                            <h3 class="product-card-title">${rel.name}</h3>
                            <a href="product-detail.html?id=${rel.id}" class="product-card-link">View Specs →</a>
                        </div>
                    `;
                    relatedGrid.appendChild(card);
                });
            } else if (relatedGrid) {
                // Fallback related if none in the same category
                const backupRelated = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
                backupRelated.forEach(rel => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
                        <div class="product-image-container">
                            <img src="${rel.image}" alt="${rel.name}" class="product-image">
                            <div class="product-badge">${rel.moq} MOQ</div>
                            <div class="product-overlay">
                                <a href="product-detail.html?id=${rel.id}" class="btn btn-outline btn-light btn-sm">View Details</a>
                            </div>
                        </div>
                        <div class="product-info">
                            <span class="product-card-category">${rel.categoryName}</span>
                            <h3 class="product-card-title">${rel.name}</h3>
                            <a href="product-detail.html?id=${rel.id}" class="product-card-link">View Specs →</a>
                        </div>
                    `;
                    relatedGrid.appendChild(card);
                });
            }

            // Trigger animations for product details page components
            setTimeout(() => {
                const elements = detailContainer.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");
                elements.forEach(el => el.classList.add("in-view"));
            }, 100);

        } else {
            // Product ID not found, redirect to catalog page
            detailContainer.innerHTML = `
                <div class="text-center py-5">
                    <p class="h3 font-serif text-gold">Product Showcase Not Found</p>
                    <p>We apologize, but this product detail is missing or has been relocated.</p>
                    <a href="products.html" class="btn btn-gold mt-3">Back to Product Catalog</a>
                </div>
            `;
        }
    }

    // 6. QUOTE REQUEST FORM AUTO-SELECTION & LEAD GENERATION (quote.html)
    const quoteForm = document.getElementById("b2b-quote-form");
    if (quoteForm) {
        const productSelect = document.getElementById("quote-product");
        
        // Dynamic options generation from database
        if (productSelect && typeof PRODUCTS !== "undefined") {
            productSelect.innerHTML = `<option value="" disabled selected>-- Select a Packaging Category --</option>`;
            PRODUCTS.forEach(p => {
                const opt = document.createElement("option");
                opt.value = p.id;
                opt.textContent = `${p.name} (Min. ${p.moq})`;
                productSelect.appendChild(opt);
            });
            
            // Add custom other option
            const otherOpt = document.createElement("option");
            otherOpt.value = "custom-bespoke";
            otherOpt.textContent = "Fully Bespoke Shape/Packaging Concept";
            productSelect.appendChild(otherOpt);
        }

        // Auto select product if passed in URL
        const urlParams = new URLSearchParams(window.location.search);
        const selectProd = urlParams.get("product");
        if (selectProd && productSelect) {
            productSelect.value = selectProd;
            
            // Trigger dynamic update if we have MOQ slider
            const productData = PRODUCTS.find(p => p.id === selectProd);
            if (productData) {
                updateMOQLabel(productData.moq);
            }
        }

        // Form submit handler with custom premium success modal
        quoteForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Simple validation check
            const name = document.getElementById("quote-name").value;
            const email = document.getElementById("quote-email").value;
            const company = document.getElementById("quote-company").value;
            
            if (!name || !email || !company) {
                alert("Please fill in all the required corporate details.");
                return;
            }

            // Create submission visual effect
            const formContainer = document.querySelector(".quote-form-container");
            formContainer.innerHTML = `
                <div class="form-success-container text-center py-5 reveal-up in-view">
                    <div class="success-icon-wrapper">
                        <span class="success-check">✓</span>
                    </div>
                    <h2 class="font-serif text-gold mt-4">Quotation Inquiry Transmitted</h2>
                    <p class="lead-text mt-3">Thank you for contacting Arihant Packaging, <strong>${name}</strong>.</p>
                    <p class="success-subtext">Our packaging design consultants have received your technical parameters for <strong>${company}</strong>. We are preparing your structural mockups and volume estimates.</p>
                    
                    <div class="next-steps-glass mt-4">
                        <h4>What happens next?</h4>
                        <ol class="next-steps-list text-left">
                            <li><strong>Requirement Review:</strong> A B2B technical specialist will review your specifications within 2 business hours.</li>
                            <li><strong>Digital Blueprint:</strong> We will email you a complimentary digital packaging blueprint and exact pricing tiers.</li>
                            <li><strong>Physical Sample:</strong> Upon approval of the blueprint, we will manufacture and dispatch a physical sample for validation.</li>
                        </ol>
                    </div>

                    <div class="success-actions mt-5">
                        <a href="index.html" class="btn btn-gold">Return to Homepage</a>
                        <a href="https://wa.me/919999999999?text=Hi%20Arihant%20Packaging,%20I%20just%20submitted%20a%20quotation%20request%20for%20${encodeURIComponent(company)}.%20Please%20expedite%20my%20review." target="_blank" class="btn btn-outline btn-whatsapp">
                            <svg class="whatsapp-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.03 2.16a9.87 9.87 0 0 0-8.54 14.85L2 22l5.17-1.36a9.88 9.88 0 0 0 14.86-8.48c0-5.44-4.42-9.86-9.83-10.01Zm5.72 14c-.24.67-1.39 1.28-1.9 1.34c-.45.05-.9-.12-2.87-.9a13.33 13.33 0 0 1-5.69-5c-.73-.97-1.16-2.1-1.16-3.26c0-1.25.65-1.86.88-2.09c.18-.18.44-.24.69-.24c.08 0 .15 0 .22.01c.21.01.32.02.46.36c.18.43.6 1.48.66 1.6c.06.12.09.26.01.42c-.08.16-.18.26-.3.41c-.12.12-.25.28-.36.4c-.13.13-.27.28-.12.54c.15.26.68 1.12 1.46 1.82c1 .89 1.84 1.17 2.1 1.3c.26.13.41.11.56-.06c.15-.17.65-.75.82-.95c.17-.2.34-.17.57-.09c.23.09 1.48.7 1.73.82c.25.12.41.18.47.29c.06.11.06.67-.18 1.34Z"/></svg>
                            Expedite on WhatsApp
                        </a>
                    </div>
                </div>
            `;
            
            // Scroll to the top of the form success message
            window.scrollTo({
                top: document.querySelector(".page-intro").offsetTop - 100,
                behavior: "smooth"
            });
        });

        // Trigger MOQ update on dropdown change
        if (productSelect) {
            productSelect.addEventListener("change", () => {
                const selectedVal = productSelect.value;
                const productData = PRODUCTS.find(p => p.id === selectedVal);
                if (productData) {
                    updateMOQLabel(productData.moq);
                } else {
                    updateMOQLabel("1000 Units");
                }
            });
        }
    }

    function updateMOQLabel(moqText) {
        const moqDisplay = document.getElementById("moq-hint-label");
        if (moqDisplay) {
            moqDisplay.textContent = `(Note: Recommended minimum order for this type is ${moqText})`;
            moqDisplay.style.color = "#B89A6A";
        }
    }

    // 7. B2B CONTACT FORM INQUIRY (contact.html)
    const contactForm = document.getElementById("b2b-contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value;
            const cName = document.getElementById("contact-company").value;

            const contactBox = document.querySelector(".contact-form-wrapper");
            contactBox.innerHTML = `
                <div class="form-success-container text-center py-5 reveal-up in-view">
                    <div class="success-icon-wrapper">
                        <span class="success-check">✓</span>
                    </div>
                    <h3 class="font-serif text-gold mt-4">Corporate Message Dispatch Complete</h3>
                    <p class="mt-3">Thank you for reaching out, <strong>${name}</strong> from <strong>${cName}</strong>.</p>
                    <p class="success-subtext">A Senior Account Manager has been assigned to your corporate query. We will contact you at your provided email/phone shortly.</p>
                    <a href="index.html" class="btn btn-gold btn-sm mt-4">Return to Homepage</a>
                </div>
            `;
        });
    }

    // 8. TESTIMONIAL SLIDER/CARD SWAP
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    if (testimonialCards.length > 1) {
        let activeIndex = 0;
        
        // Simple automatic highlight cycler
        setInterval(() => {
            testimonialCards.forEach(c => c.classList.remove("highlighted"));
            activeIndex = (activeIndex + 1) % testimonialCards.length;
            testimonialCards[activeIndex].classList.add("highlighted");
        }, 5000);
    }
});
