// Arihant Packaging - Premium Product Database
// This data is shared across products.html, product-detail.html, and quote.html

const PRODUCTS = [
    // --- 1. HAMPERS & GIFT BASKETS ---
    {
        id: "ready-made-hamper",
        name: "Ready-Made Hampers",
        category: "hampers-baskets",
        categoryName: "Hampers & Baskets",
        moq: "100 Units",
        image: "assets/images/mockups/ready-made-hamper.png",
        tagline: "Pre-curated setups featuring net wrapping and floral brooches",
        description: "Exquisite pre-curated hamper packaging designed to offer a ready-to-present solution for premium corporate events, festive celebrations, and wedding invitations. Each setup features high-quality structural trays wrapped in premium shimmering net borders (organza, tulle, or custom mesh) and meticulously hand-finished with handcrafted traditional floral brooches, silk ribbons, and royal borders.",
        features: [
            "Premium net wraps available in gold, ivory, blush, and custom pastel tones",
            "Handcrafted decorative floral brooches and satin ribbons",
            "Tailored structural spacing to secure multiple luxury products",
            "Professional B2B assembly for immediate event presenting"
        ],
        specifications: {
            "Material": "Cardboard or MDF base with premium net wrapping and artificial floral brooches",
            "Wrap Options": "Premium tulle net, shimmer organza net, textured cellophane sheets",
            "Styles": "Corporate welcome kits, festival dry fruit baskets, wedding return hampers",
            "Common Uses": "Diwali hampers, Roka welcome gifts, corporate token presentations",
            "Customization": "Fully customizable color schemes, custom ribbon prints, brooch sizes"
        }
    },
    {
        id: "hamper-basket",
        name: "Hamper Baskets",
        category: "hampers-baskets",
        categoryName: "Hampers & Baskets",
        moq: "200 Units",
        image: "assets/images/mockups/boutique-paper-bag.jpg",
        tagline: "Available in jute, metal, cardboard, macrame, and straw",
        description: "Our Premium Hamper Baskets Collection offers diverse texture options for B2B procurement managers. Select from natural jute, elegant gold-plated metal frames, high-strength cardboards, custom woven macrame, and rustic braided straw to perfectly suit your brand's unboxing look. Highly durable and reusable, these baskets serve as excellent lifestyle storage long after the gift is received.",
        features: [
            "Diverse raw materials: Jute, Metal wireframe, Cardboard board, Woven Macrame, Straw",
            "High weight capacities to carry bottles, jars, and decorative items",
            "Available with premium inner lining cloths and structural handle grips",
            "100% organic, reusable, and designed for long-term brand presence"
        ],
        specifications: {
            "Material": "Imported natural jute fibers, powder-coated metal, rigid composite wood, cotton cord",
            "Finishes": "Natural braiding, gold/white wire coating, textured paper liners",
            "Styles": "Open tray hampers, handled carry baskets, deep corporate hamper trunks",
            "Common Uses": "Corporate onboarding kits, holiday gift packaging, dry fruit trays",
            "Customization": "Bespoke shapes, custom dimension profiles, branded logo hangtags"
        }
    },
    {
        id: "potli-hamper",
        name: "Potli Hampers",
        category: "hampers-baskets",
        categoryName: "Hampers & Baskets",
        moq: "500 Units",
        image: "assets/images/mockups/magnetic-box.jpg",
        tagline: "Fabric gift pouches finished with inner cushioning, in multiple sizes",
        description: "Traditional and elegant fabric gifting pouches constructed with specialized inner protective cushioning layers to hold fragile jars, dry fruits, or sweets. Made using premium luxury fabrics like royal velvet, raw silk, raw cotton, or fine organza, and finished with golden drawstring cords, pearl drops, and ornamental gota borders.",
        features: [
            "Thick inner cushioning layers to cushion jars, dry fruits, and delicate items",
            "Imported luxury fabrics (Raw Silk, Velvet, Organza, Jacquard, Brocade)",
            "Gold drawstrings finished with customized gota tassels or pearl beads",
            "Available in multiple standard B2B sizing brackets and color palettes"
        ],
        specifications: {
            "Material": "Royal velvet or raw silk lined with poly-cushioning and cotton liners",
            "Finishes": "Embroidery, border lace additions, customized logo foil stamps",
            "Colors": "Maroon, Gold, Royal Blue, Emerald Green, Baby Pink, Ivory, Pastel Mint",
            "Common Uses": "Dry fruits, sweets, custom wedding return tokens, shagun coins",
            "Customization": "Bespoke dimensions, embroidered corporate initials, custom drawstrings"
        }
    },
    {
        id: "room-hamper",
        name: "Room Hampers",
        category: "hampers-baskets",
        categoryName: "Hampers & Baskets",
        moq: "100 Units",
        image: "assets/images/mockups/packaging-sleeve.jpg",
        tagline: "Specially designed hospitality welcome kits and bridal stay hampers",
        description: "Bespoke hospitality packages engineered specifically to be placed in guest rooms during destination weddings, corporate retreats, and hotel check-ins. Custom-fitted to hold welcome letters, water bottles, room keys, dry fruit jars, emergency bridal items, and custom vanity kits with a highly stable interior layout.",
        features: [
            "Custom dividers to secure welcome letters, water bottles, and gift jars",
            "Rigid, high-stability bases for elegant bedside or vanity presentation",
            "Branded exterior printing with custom wedding monograms or corporate logos",
            "Double-wall side panels to withstand transport and handling"
        ],
        specifications: {
            "Material": "Premium high-stiff board or wood composite with fabric linings",
            "Finishes": "Spot UV corporate branding, custom silk ribbons, geometric gold lines",
            "Styles": "Open flat lay room trays, carry trunks, dynamic folding lock-boxes",
            "Common Uses": "Destination wedding guest rooms, VIP corporate check-ins, bridal vanity trays",
            "Customization": "Precision custom sized divider sections, logo printing, velvet beds"
        }
    },

    // --- 2. WEDDING & CEREMONY ESSENTIALS ---
    {
        id: "ceremony-platter",
        name: "Ceremony Platters",
        category: "wedding-essentials",
        categoryName: "Wedding Essentials",
        moq: "50 Units",
        image: "assets/images/mockups/ceremony-platter.png",
        tagline: "Specialized trays for Roka, Engagement, Haldi, Mehendi, and Patrika",
        description: "Magnificent presentation trays handcrafted for different traditional Indian ceremonies. Each platter is customized for its target ritual—featuring bright yellow/marigold accents for Haldi, floral details for Mehendi, royal red/velvet for Roka and Engagements, and custom structured stands for premium Patrika card invitations.",
        features: [
            "Ritual-themed design templates (Haldi, Mehendi, Roka, Sagan, Ring Platter)",
            "Sturdy MDF structures wrapped in velvet, brocade, or textured metallic foils",
            "Includes secure slots for dry fruits, shagun envelopes, and decorative bowls",
            "Hand-finished with gold bead laces, custom floral panels, and mirrored mosaics"
        ],
        specifications: {
            "Material": "Composite MDF core wrapped in royal velvet/brocade cloth with gold highlights",
            "Finishes": "Traditional gota laces, silk flower panels, acrylic lettering plates",
            "Styles": "Round platters, rectangular Sagan trays, handled Patrika presentation stands",
            "Common Uses": "Engagement ceremonies, Haldi/Mehendi gifting, royal wedding invites",
            "Customization": "Bespoke layouts, custom groom & bride name plates, ritual theme colors"
        }
    },
    {
        id: "ring-platter",
        name: "Ring Platters & Boxes",
        category: "wedding-essentials",
        categoryName: "Wedding Essentials",
        moq: "50 Units",
        image: "assets/images/mockups/luxury-gift-box.jpg",
        tagline: "Premium backdrops and specialized boxes designed for the ring exchange",
        description: "Ultra-premium ring presentation trays featuring dynamic backdrop frames and cushioned lock-in slots. Designed to present Roka, Engagement, or Wedding rings, these platters combine velvet beds, fresh or silk floral arches, and acrylic backdrops to elevate the ceremony's visual presentation.",
        features: [
            "Interactive ring-holder slots cushioned in velvet, linen, or silk",
            "Rigid, elegant backdrop arches (personalized names, initials, or geometric rings)",
            "Integrated secure clear glass or acrylic ring boxes to protect items",
            "Handcrafted structural stability for wobble-free ring presentation"
        ],
        specifications: {
            "Material": "MDF composite base, acrylic backdrop frames, premium velvet cushions",
            "Finishes": "Laser-etched acrylic sheets, custom velvet wraps, gold-plated hardware",
            "Styles": "Personalized monogram backdrops, multi-box engagement trays, floral arches",
            "Common Uses": "Roka ring exchange, Engagement ceremonies, Wedding day rings",
            "Customization": "Acrylic name plate prints, custom floral styles, double-ring boxes"
        }
    },
    {
        id: "saree-lehenga-tray",
        name: "Saree & Lehenga Trays",
        category: "wedding-essentials",
        categoryName: "Wedding Essentials",
        moq: "100 Units",
        image: "assets/images/mockups/boutique-paper-bag.jpg",
        tagline: "Dedicated gifting trays available both with and without net coverings",
        description: "Bespoke gifting trays sized to hold heavy bridal sarees and wedding lehengas. Available in open structural styles or with premium pre-stitched organza/tulle net covers that wrap securely over the tray, preserving fabric presentation while offering a premium look.",
        features: [
            "Generous size dimensions to hold heavy layered bridal trousseaus",
            "Heavy-duty construction that remains rigid under fabric weight loads",
            "Available with or without high-contrast premium net wrap covers",
            "Finished with gold dielines, broad gota border laces, and floral brooches"
        ],
        specifications: {
            "Material": "Thick MDF board frames wrapped in raw silk/metallic paper with gold trims",
            "Cover Options": "Drawstring organza nets, zippered tulle covers, open top trays",
            "Styles": "Deep trousseau boxes, wide lehenga trays, flat saree frames",
            "Common Uses": "Wedding trousseau gifting, sagan ceremonies, bridal shower layouts",
            "Customization": "Tailored sizing brackets, custom embroidery overlays, color matching"
        }
    },
    {
        id: "decorative-nariyal",
        name: "Decorative Nariyal",
        category: "wedding-essentials",
        categoryName: "Wedding Essentials",
        moq: "100 Units",
        image: "assets/images/mockups/food-packaging.jpg",
        tagline: "Ornamented coconuts styled specifically for weddings, poojas, & haldi",
        description: "Ornamented coconuts styled specifically for wedding rituals, pooja mandaps, and Haldi/Sagan ceremonies. Hand-wrapped in red/yellow velvet, gold laces, pearl strings, and colorful gotapatti to symbolize prosperity during the auspicious ceremony.",
        features: [
            "Handcrafted detailing utilizing royal velvet, gold zardozi laces, and pearl borders",
            "Sturdy bottom stand base ring included for secure platter placement",
            "Designed to remain fresh and highly stable throughout long rituals",
            "Available in custom wedding color themes (maroon, yellow, or ivory-gold)"
        ],
        specifications: {
            "Material": "Natural selected coconuts hand-wrapped in velvet/gotapatti and gold beads",
            "Finishes": "Gota borders, pearl drops, gold thread layers, stone mosaics",
            "Styles": "Sagan nariyal, Haldi nariyal, traditional wedding pooja nariyal",
            "Common Uses": "Pooja ceremonies, Sagan rituals, wedding shagun platter centers",
            "Customization": "Color coordination with the wedding theme, customized name tags"
        }
    },
    {
        id: "cash-box",
        name: "Cash Boxes",
        category: "wedding-essentials",
        categoryName: "Wedding Essentials",
        moq: "100 Units",
        image: "assets/images/mockups/magnetic-box.jpg",
        tagline: "Decorated boxes meant for gifting or holding cash during wedding rituals",
        description: "Bespoke decorated boxes engineered to present cash gifts (shagun) or secure currency during wedding rituals. Hand-wrapped in rich velvet or metallic brocade paper, featuring personalized lock hardware, cushioned bases, and custom name initials.",
        features: [
            "Elegant secure compartments designed specifically to fit currency bills",
            "Handcrafted velvet, brocade, or gold foil printed paper coverings",
            "Fitted with high-end gold brass latch hardware or magnetic snaps",
            "Highly reusable boxes that guests keep as memory items"
        ],
        specifications: {
            "Material": "MDF composite core wrapped in royal velvet/brocade cloth with gold trims",
            "Finishes": "Metallic foil borders, zardozi work laces, personalized acrylic monograms",
            "Styles": "Single-compartment cash boxes, envelope trunks, lock-fitted Sagan boxes",
            "Common Uses": "Sagan ceremonies, Roka gift presentation, wedding day shagun box",
            "Customization": "Bespoke sizes, customized card slots, bride & groom name initials"
        }
    },

    // --- 3. PREMIUM GIFTING CONTAINERS & BOXES ---
    {
        id: "german-silver-collection",
        name: "German Silver Collection",
        category: "premium-containers",
        categoryName: "Premium Containers",
        moq: "50 Units",
        image: "assets/images/mockups/german-silver.png",
        tagline: "High-end silver trays, handled baskets, dry fruit sets, and elephant holders",
        description: "The absolute pinnacle of luxury Indian gifting. Our German Silver Collection represents premium craftsmanship, featuring handcrafted silver-plated trays, handled baskets, multi-cup dry fruit sets with decorative trays, bottle and glass presentation sets, and unique traditional elephant-shaped candle/dry fruit holders.",
        features: [
            "Premium silver-plated composite metal with antique oxidized finish layers",
            "Highly detailed traditional embossing, floral engravings, and filigree work",
            "Available in individual pieces or complete multi-piece corporate sets",
            "Tarnish-resistant coatings to maintain long-lasting metallic shine"
        ],
        specifications: {
            "Material": "High-quality copper-zinc-nickel alloy (German Silver) with silver plating",
            "Finishes": "Antique oxidized polish, bright mirror shine, protective clear coat",
            "Set Options": "Trays with handles, 2/4 cup dry fruit bowls, elephant trays, goblet sets",
            "Common Uses": "VIP Corporate Gifting, luxury wedding return gifts, festive Diwali baskets",
            "Customization": "Custom brand/name engraving on the metallic surface, customized velvet boxes"
        }
    },
    {
        id: "stainless-steel-peacock",
        name: "Stainless Steel Boxes",
        category: "premium-containers",
        categoryName: "Premium Containers",
        moq: "200 Units",
        image: "assets/images/mockups/packaging-sleeve.jpg",
        tagline: "Handcrafted dry fruit containers featuring elegant peacock designs",
        description: "Handcrafted stainless steel boxes designed specifically for packing premium dry fruits, mouth fresheners, and festive sweets. Lids are detailed with elegant peacock designs (laser etched or embossed in gold/silver colors), combining industrial durability with traditional luxury.",
        features: [
            "Food-safe, high-strength stainless steel structure",
            "Lids detailed with handcrafted royal peacock engravings or gold-embossed motifs",
            "Air-tight secure lids to preserve freshness of dry fruits and nuts",
            "Durable rust-free containers designed for lifelong kitchen utility"
        ],
        specifications: {
            "Material": "Premium food-grade 304 Stainless Steel, gold brass accents on lids",
            "Finishes": "Bright mirror polish, brushed matte finish, laser-etched designs",
            "Compartments": "Available with single, double, or 4-way interior metal partition plates",
            "Common Uses": "Luxury dry fruit gifting, corporate Diwali boxes, premium return gifts",
            "Customization": "Laser engraved corporate branding, custom lid patterns"
        }
    },
    {
        id: "velvet-heart-box",
        name: "Velvet & Heart-Shaped Boxes",
        category: "premium-containers",
        categoryName: "Premium Containers",
        moq: "200 Units",
        image: "assets/images/mockups/velvet-boxes.png",
        tagline: "Premium velvet gift boxes and heart-shaped layouts for premium occasions",
        description: "Luxury velvet gift boxes designed to create an premium tactile experience. Lined in royal velvet in multiple deep color configurations, including our flagship heart-shaped boxes, engineered for cosmetics, premium jewelry, chocolates, and romantic return gift arrangements.",
        features: [
            "Wrapped in high-texture, premium velvet in deep color options",
            "Precision die-cut heart-shaped or geometric rigid box borders",
            "Cushioned velvet linings inside with ribbon closures",
            "Sturdy rigid construction that retains shape under heavy stack loads"
        ],
        specifications: {
            "Material": "1200 GSM thick rigid board wrapped in luxury velvet fabric sheet",
            "Colors": "Crimson Red, Deep Emerald, Royal Navy, Soft Blush, Jet Black, Ivory",
            "Closure": "Satin ribbon wrap closures, secure double magnetic snap locks",
            "Common Uses": "Trousseau gifting, high-end cosmetics hampers, premium chocolate arrangements",
            "Customization": "Bespoke interior sizes, hot gold foil logo printing, custom dividers"
        }
    },
    {
        id: "dry-fruit-jars",
        name: "Dry Fruit Boxes & Jars",
        category: "premium-containers",
        categoryName: "Premium Containers",
        moq: "300 Units",
        image: "assets/images/mockups/food-packaging.jpg",
        tagline: "Specialized glass jars and storage containers for luxury arrangements",
        description: "Specialized glass jars and dry fruit packaging sets built for elite festive presentation. Features thick clear glass jars with decorated gold brass or silver-plated lids, housed inside a custom rigid gift box with satin-lined partitions to secure jars during transit.",
        features: [
            "Heavy clear glass jars with air-tight decorated metal lids",
            "Rigid cardboard partition boxes with satin fabrics to protect jars",
            "Gold-plated or silver-filigree lid designs that elevate presentation",
            "Highly reusable glass storage that promotes sustainable packing"
        ],
        specifications: {
            "Material": "Heavy borosilicate glass, gold-plated brass lids, satin lined rigid box",
            "Capacities": "200ml, 350ml, or 500ml glass jars in sets of 2, 3, or 4 jars",
            "Finishes": "Laser etched glass, gold-plated lid handles, velvet/cardboard partitions",
            "Common Uses": "Premium nut gifting, saffron jars, corporate Diwali presentation kits",
            "Customization": "Logo printing on glass, customized box print colors, custom jar capacities"
        }
    },

    // --- 4. RETAIL & WHOLESALE PACKAGING SUPPLIES ---
    {
        id: "pvc-garment-bag",
        name: "PVC Bags",
        category: "packaging-supplies",
        categoryName: "Packaging Supplies",
        moq: "1000 Units",
        image: "assets/images/mockups/pvc-bags.png",
        tagline: "Strong transparent and semi-transparent bags for garment and retail displays",
        description: "Heavy-duty transparent and semi-transparent PVC bags designed for garment retail, wedding outfits, saree packing, and premium retail displays. Features thick vinyl construction, dustproof zippers, heat-sealed handles, and custom logo printing options.",
        features: [
            "Thick, high-durability transparent and frosted PVC vinyl sheets",
            "Heavy-duty double zippers with reinforced stitch bindings",
            "Heat-sealed carry loop handles that hold heavy outfits",
            "Waterproof, dustproof, and designed to protect luxury fabrics"
        ],
        specifications: {
            "Thickness": "100 - 250 microns thick heavy-duty clear PVC",
            "Styles": "Flat garment bags, gusseted saree bags, frosted cosmetic travel pouches",
            "Closure": "Heavy-duty nylon zippers, gold snap buttons, drawstring cords",
            "Common Uses": "Bridal saree packaging, boutique retail carry bags, wholesale garments",
            "Customization": "Single/multi-color brand logo printing, custom sizes"
        }
    },
    {
        id: "colored-shredded-paper",
        name: "Shredded Paper",
        category: "packaging-supplies",
        categoryName: "Packaging Supplies",
        moq: "50 Kgs",
        image: "assets/images/mockups/packaging-sleeve.jpg",
        tagline: "Decorative paper filler available in multiple colors to elevate presentation",
        description: "Decorative shredded paper filler designed to elevate hamper presentation while providing cushioning and protection for fragile items like glass jars and metal silver trays. Available in multiple colors, including metallic gold and warm crinkle kraft.",
        features: [
            "FSC-certified biodegradable acid-free paper, safe for food jar packing",
            "Multi-color options (Gold, Silver, Kraft, Crimson, Blush, Emerald, Ivory)",
            "Precision zig-zag crinkle cuts that offer superior spring and support",
            "Zero dust, non-bleeding colors, highly uniform B2B wholesale volumes"
        ],
        specifications: {
            "Material": "80-120 GSM premium wood-free colored paper sheets",
            "Styles": "Zig-zag crinkle cut shredded paper, straight-cut paper shreds",
            "Color Options": "Standard Kraft, Metallic Gold, Pearl Silver, Pastel Pink, Jet Black",
            "Common Uses": "Hamper baskets filler, gift box cushion beds, shipping protection",
            "Customization": "Custom solid color blends, metallic paper shimmers, volume weight blocks"
        }
    }
];

// Helper functions for B2B product retrieval
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
    if (category === "all") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}

function getRelatedProducts(currentId, category, limit = 3) {
    return PRODUCTS
        .filter(p => p.category === category && p.id !== currentId)
        .slice(0, limit);
}
