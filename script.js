if (window.matchMedia('(display-mode: standalone)').matches) {
    // الموقع يُعرض كـ "تطبيق ويب"
}
 else {
    // الموقع يُعرض في المتصفح
    window.addEventListener('load', function() {
        if (!window.navigator.standalone) {
            // يمكن إضافة إشعار للمستخدم بتثبيت التطبيق
        }
    });
}

// رقم WhatsApp بصيغة دولية
const whatsappNumber = "249923878900"; // ضع رقم WhatsApp الخاص بك هنا

// البيانات الخاصة بالمنتجات مع الخيارات
const products = [
    
    {
        name: "TIKTOK",
        price: 6.4,
        description: "زيادة متابعين تيك توك",
        image: "img/unnamed.jpg",
        action: "buy",
        hasQuantity: true,
        hasUrl: true
    },
    {
        name: "instagram",
        price: 6.400,
        description: "زيادة متابعين انستغرام",
        image: "img/IMG_٢٠٢٥٠١٠١_٢٠٤٦١٠_(600_x_600_pixel).jpg",
        action: "buy",
        hasQuantity: true,
        hasUrl: true
    },
    
    {
        name: "PUBG",
        price: 0,
        description: "اشحن شدات ببجي موبايل",
        image: "img/65dc3800-30f9-477b-a55b-895d37ea4db5-1000x1000-f7KrEsws3czSVwtSEC63nD9q8ebcN3i9vzbt0BRO.jpg",
        action: "ship",
        packages: [
            { name: "60 ", price: 3000 },
            { name: "300+25 ", price: 13300 },
            { name: "600+60 ", price: 25500 },
            { name: "1500+300 ", price: 59930 },
            { name: "3000+850 ", price: 122500 },
            { name: "6000+2100 ", price: 255000 }
        ]
    },
    {
        name: "Free Fire",
        price: 0,
        description: "اشحن جواهر فري فاير اختار الباقه",
        image: "img/b4da948d-9c12-4c71-9eb3-60756d695747-1000x1000-FuK3fyCXeaW2koeSLZc5coNRT3jOFSG0U42cCC64.jpg",
        action: "ship",
        packages: [
            { name: "100+10 جوهرة", price: 3000 },
            { name: "310+31 جوهرة", price: 7600 },
            { name: "520+52 جوهرة", price: 11500 },
            { name: "1060+106 جوهرة", price: 21700 },
            { name: "2180+218 جوهرة", price: 42000 },
            { name: "5420+542 جوهرة", price: 102000 },
            { name: "10900+1090 جوهرة", price: 204000 },
        ]
    },
    {
        name: "Clash of Clans",
        price: 0,
        description: "اشحن احجار كلاش اوف كلانس اختار الباقه",
        image: "img/PC-40.jpg",
        action: "ship",
        packages: [
            { name: "80 احجار كريمه", price: 3800 },
            { name: "500 احجار كريمه", price: 14100 },
            { name: "1200 احجار كريمه", price: 26800 },
            { name: "2500 احجار كريمه", price: 53500 },
            { name: "6500 احجار كريمه", price: 132500 },
            { name: "14000 احجار كريمه", price: 267500 },
        ]
    },
    {
        name: "Yalla Ludo",
        price: 0,
        description: "اشحن جواهر يلا لودو اختار الباقه",
        image: "img/unnamed (2).jpg",
        action: "ship",
        packages: [
            { name: "5$ جوهرة", price: 15300 },
            
        ]
    },
    {
        name: "USDT",
        price: 1.05,
        description: "شراء usdt حدد الكمية",
        image: "img/images (1).jpg",
        action: "buy",
        hasQuantity: true
    },
    {
        name: "USDT",
        price: 1.05,
        description: "بيع usdt حدد الكمية",
        image: "img/images (1).jpg",
        action: "sell",
        hasQuantity: true
    },
    
    
    {
        name: "SUDANI",
        price: 1.05,
        description: "شراء رصيد سوداني",
        image: "img/Sudani_logo (1).jpg",
        action: "buy",
        hasQuantity: true,
        hasPhone: true
    },
    {
        name: "ZAIN",
        price: 1.05,
        description: "شراء رصيد زين",
        image: "img/images.jpg",
        action: "buy",
        hasQuantity: true,
        hasPhone: true
    },
    {
        name: "MTN",
        price: 1.05,
        description: "شراء رصيد MTN",
        image: "img/MTN_Logo.svg.jpg",
        action: "buy",
        hasQuantity: true,
        hasPhone: true
    },
   
];

// استهداف حاوية المنتجات
const productList = document.getElementById("product-list");

// إضافة المنتجات إلى الصفحة
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // إنشاء قائمة الباقات إذا وجدت
    let packageOptions = "";
    if (product.packages) {
        packageOptions = `<label for="package-select">اختر الباقة:</label>
        <select class="package-select">
            <option value="">اختر الباقة</option>
            ${product.packages.map(pkg => `<option value="${pkg.price}">${pkg.name} - ${pkg.price} جنيه</option>`).join("")}
        </select>`;
    }

    // إنشاء حقل الكمية إذا كان المنتج يدعمه
    let quantityField = "";
    if (product.hasQuantity) {
        quantityField = `
            <label for="quantity-input">الكمية:</label>
            <input type="number" class="quantity-input" min="1" value="1">
            <p class="total-price">السعر الإجمالي: ${product.price} جنيه</p>
        `;
    }

    // إنشاء حقل إدخال الهاتف إذا كان المنتج يدعمه
    let phoneField = "";
    if (product.hasPhone) {
        phoneField = `
            <label for="phone-input">رقم الهاتف:</label>
            <input type="tel" class="phone-input" placeholder="أدخل رقم الهاتف">
        `;
    }

    // إنشاء حقل إدخال الرابط إذا كان المنتج يدعمه
    let urlField = "";
    if (product.hasUrl) {
        urlField = `
            <label for="url-input">رابط URL:</label>
            <input type="url" class="url-input" placeholder="أدخل الرابط هنا">
        `;
    }

    // إنشاء قائمة نوع الاشتراك إذا كانت موجودة
    let subscriptionField = "";
    if (product.subscriptionOptions) {
        subscriptionField = `
            <label for="subscription-type">نوع الاشتراك:</label>
            <select class="subscription-type">
                <option value="">اختر نوع الاشتراك</option>
                ${product.subscriptionOptions.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
        `;
    }

    // إنشاء قائمة مدة الاشتراك إذا كانت موجودة
    let durationField = "";
    if (product.durationOptions) {
        durationField = `
            <label for="subscription-duration">مدة الاشتراك:</label>
            <select class="subscription-duration">
                <option value="">اختر المدة</option>
                ${product.durationOptions.map(opt => `<option value="${opt.price}">${opt.duration} - ${opt.price} جنيه</option>`).join("")}
            </select>
        `;
    }

    // إنشاء زر الإجراء بناءً على نوع العملية
    let actionButton = "";
    if (product.action === "subscribe") {
        actionButton = `<button class="subscribe-btn" data-product="${product.name}" data-description="${product.description}">اشتراك</button>`;
    } else if (product.action === "transfer") {
        actionButton = `<button class="transfer-btn" data-product="${product.name}" data-price="${product.price}" data-description="${product.description}">تحويل</button>`;
    } else if (product.action === "sell") {
        actionButton = `<button class="sell-btn" data-product="${product.name}" data-price="${product.price}" data-description="${product.description}">بيع</button>`;
    } else if (product.action === "ship") {
        actionButton = `<button class="ship-btn" data-product="${product.name}" data-price="${product.price}" data-description="${product.description}">شحن</button>`;
    }
 else if (product.action === "buy") {
    actionButton = `<button class="ship-btn" data-product="${product.name}" data-price="${product.price}" data-description="${product.description}">شراء</button>`;
}

    // إضافة كل العناصر إلى المنتج
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${packageOptions}
        ${quantityField}
        ${urlField}
        ${phoneField}
        ${subscriptionField}
        ${durationField}
        ${actionButton}
    `;

    // إضافة المنتج إلى الحاوية
    productList.appendChild(productElement);

    // تحديث السعر الإجمالي ديناميكيًا إذا كان هناك حقل كمية
    if (product.hasQuantity) {
        const quantityInput = productElement.querySelector(".quantity-input");
        const totalPriceElement = productElement.querySelector(".total-price");
        quantityInput.addEventListener("input", () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const totalPrice = quantity * product.price;
            totalPriceElement.textContent = `السعر الإجمالي: ${totalPrice} جنيه`;
        });
    }

    // تحديث السعر الإجمالي ديناميكيًا إذا كان هناك حقل مدة الاشتراك
    if (product.action === "subscribe") {
        const subscriptionDuration = productElement.querySelector(".subscription-duration");
        const totalPriceElement = productElement.querySelector(".total-price");
        const updatePrice = () => {
            const durationPrice = parseFloat(subscriptionDuration.value) || 0;
            totalPriceElement.textContent = `السعر الإجمالي: ${durationPrice} جنيه`;
        };

        subscriptionDuration.addEventListener("change", updatePrice);
    }
});

// استهداف جميع الأزرار وإضافة أحداث النقر
document.querySelectorAll(".transfer-btn, .sell-btn, .ship-btn, .subscribe-btn, .buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        const productElement = button.closest(".product");
        const productName = button.getAttribute("data-product");
        const productPrice = parseFloat(button.getAttribute("data-price"));
        const productDescription = button.getAttribute("data-description");

        // التحقق من الباقة إذا وجدت
        const packageSelect = productElement.querySelector(".package-select");
        const selectedPackagePrice = packageSelect ? parseFloat(packageSelect.value) : productPrice;

        // التحقق من الكمية إذا كانت موجودة
        const quantityInput = productElement.querySelector(".quantity-input");
        const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

        // التحقق من مدة الاشتراك إذا كانت موجودة
        const subscriptionDuration = productElement.querySelector(".subscription-duration");
        const durationPrice = subscriptionDuration ? parseFloat(subscriptionDuration.value) : 0;

        const totalPrice = (quantity * selectedPackagePrice) + durationPrice;

        // التحقق من رقم الهاتف إذا كان موجودًا
        const phoneInput = productElement.querySelector(".phone-input");
        const phone = phoneInput ? phoneInput.value.trim() : "";

        // التحقق من الرابط إذا كان موجودًا
        const urlInput = productElement.querySelector(".url-input");
        const url = urlInput ? urlInput.value.trim() : "";

        // إنشاء الرسالة بناءً على الحقول المعبأة
        let message = `أريد ${button.textContent} المنتج التالي:
- الاسم: ${productName}
- السعر: ${selectedPackagePrice} جنيه
- الوصف: ${productDescription}
- السعر الإجمالي: ${totalPrice} جنيه`;

        // إضافة الحقول المعبأة إلى الرسالة
        if (packageSelect && selectedPackagePrice !== productPrice) {
            message += `\n- الباقة: ${packageSelect.options[packageSelect.selectedIndex].text}`;
        }

        if (quantity && quantity > 0) {
            message += `\n- الكمية: ${quantity}`;
        }

        if (phone) {
            message += `\n- رقم الهاتف: ${phone}`;
        }

        if (url) {
            message += `\n- الرابط: ${url}`;
        }

        if (subscriptionDuration) {
            message += `\n- مدة الاشتراك: ${subscriptionDuration.options[subscriptionDuration.selectedIndex].text}`;
        }

        // رابط WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // الانتقال إلى WhatsApp
        window.location.href = whatsappURL;
    });
});