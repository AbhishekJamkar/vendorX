# 🛒 VendorX: Multi-Vendor Marketplace Platform

**VendorX** is a full-stack, monolithic e-commerce and marketplace platform designed to bridge the gap between neighbourhood retail businesses (vegetable & fruit vendors, grocery marts, pharmacies, and specialty stores) and nearby consumers. It features end-to-end multi-unit catalog management, real-time inventory and order processing, flexible fulfillment methods (home delivery and in-store pickup), email-based password resets, Stripe payments, and live customer notification feeds.

---

## 📑 Table of Contents

1. [Key Features](#key-features)
2. [Architecture Overview](#architecture-overview)
3. [Tech Stack](#tech-stack)
4. [Project Directory Structure](#project-directory-structure)
5. [Prerequisites](#prerequisites)
6. [Step-by-Step Setup Guide](#step-by-step-setup-guide)
* [Step 1: MySQL Database Initialization]
* [Step 2: Backend Setup (Spring Boot)]
* [Step 3: Frontend Setup (React.js)]


7. [Visual Application Walkthrough & User Flows](#visual-walkthrough)
* [1. User Authentication & Password Recovery]
* [2. Business Onboarding & Storefront Profile]
* [3. Product, Category & Unit Variant Management]
* [4. Promotional Banners & Discount Offers]
* [5. Customer Discovery, Cart & Checkout]
* [6. Vendor Order Lifecycle & Customer Notifications]


8. [Role-Based Access Control](#rbac)
9. [License & Author](#license-author)
---
<span id="key-features"></span>
## ✨ Key Features

### 👤 Customer Features

* **Local Store Discovery**: Browse stores, dairy outlets, and marts in the local neighborhood with operating hours and live status (Open/Closed).


* **Catalog Navigation & Search**: Dynamic filtering by product categories, dietary options (Vegetarian/Non-Vegetarian), and popular items.


* **Multi-Unit Variant Selection**: Select items across diverse metrics (Weight: 100g, 250g, 500g, 1kg; Volume: 100ml, etc.) with real-time stock indicator badges (`IN STOCK` / `OUT OF STOCK`).


* **Flexible Fulfillment**: Choose between direct **Home Delivery** (with saved address book management) or **In-Store Pickup**.


* **Secure Payment Options**: Integrated checkout supporting **Stripe Online Payment** and **Cash on Delivery (COD) / Cash on Collection**.


* **Live Notifications & Tracking**: Unified customer dashboard tracking status history (`PENDING` ➔ `OUT FOR DELIVERY` ➔ `DELIVERED` / `COMPLETED`).


* **Favorites & Saved Addresses**: Save frequented local shops and manage multiple delivery locations.



### 🏪 Business Owner / Vendor Features

* **Storefront Setup & Management**: Configure store timing schedules, contact coordinates, social channels, and toggle shop status (`OPEN` / `CLOSED`).


* **Category & Unit Dimension Engine**: Define customized product categories (Vegetables, Fruits, Personal Care, Medicines) alongside custom unit taxonomies (Weight, Volume).


* **Product Inventory Control**: Create inventory items with detailed descriptions, product images, dynamic unit variants, base pricing, and stock toggles.


* **Promotional Offer Engine**: Create time-bound promotional discount banners with start/end schedules, custom discount rates, and target shop locations.


* **Interactive Order Management**: Track incoming orders, inspect customer item breakdowns, and transition order stages (`Pending`, `Out For Delivery`, `Delivered`, `Completed`).


<span id="architecture-overview"></span>
---
<span id="architecture-overview"></span>
## 🏛️ Architecture Overview

**VendorX** is built as a **Modular Monolithic Web Application**:

* **Backend Core**: Single Spring Boot application hosting business domains, security filters, data persistence layers, and REST endpoints under a single deployable unit.


* **Frontend SPA**: React.js client interface running Tailwind CSS styling and state-driven UI modules.


* **Unified Relational Store**: Single relational MySQL database (`local-business-marketplace`) managing all schemas (users, stores, products, orders, addresses, and notifications).


* **Stateless Authentication**: Spring Security with JSON Web Tokens (JWT) handling authentication claims and role-based endpoint protection.


* **Third-Party Integrations**: Stripe API for payment authorization and JavaMailSender (SMTP) for automated password reset dispatching.



---
<span id="tech-stack"></span>
## 🛠️ Tech Stack

| Domain | Technology / Library |
| --- | --- |
| **Frontend** | React.js, Tailwind CSS, Axios, React Router DOM, React Icons |
| **Backend** | Java 17+, Spring Boot 3.x, Spring Data JPA, Spring Security, Hibernate |
| **Authentication** | JSON Web Tokens (JWT), BCrypt Password Hashing |
| **Database** | MySQL 8.x Server & MySQL Workbench|
| **Payment Gateway** | Stripe API Integration|
| **Mailing / Alerts** | Spring Boot Starter Mail (SMTP Gmail integration)|
| **Tooling & IDEs** | VS Code, IntelliJ IDEA, Maven, Git|

---
<span id="project-directory-structure"></span>
## 📂 Project Directory Structure

```text
VendorX/
├── vendorX_Backend/                        # Spring Boot Monolith
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/vendorx/
│   │   │   │   ├── config/                # SecurityConfig, JWTFilter, CorsConfig
│   │   │   │   ├── controller/            # REST Controllers (Auth, Store, Product, Order)
│   │   │   │   ├── dto/                   # Request / Response DTO models
│   │   │   │   ├── entity/                # JPA Entities (User, Business, Product, Order)
│   │   │   │   ├── repository/            # Spring Data JPA Repositories
│   │   │   │   └── service/               # Core business services & Stripe processing
│   │   │   └── resources/
│   │   │       ├── application.properties # DB connection, mailer & secret keys
│   │   │       ├── application-dev.properties
│   │   │       └── static/
│   │   └── test/
│   └── pom.xml                            # Maven dependencies
│
└── vendorX_Frontend/                       # React Client Application
    ├── public/                            # Static index.html & branding assets
    ├── src/
    │   ├── components/                    # Reusable Modals, Navbar, Footer, Banners
    │   ├── pages/
    │   │   ├── Auth/                      # Login, Register & Forgot Password views
    │   │   ├── Admin/Vendor/              # Vendor Dashboard, Products, Categories, Offers
    │   │   └── Customer/                  # Storefront, Cart, Checkout, Order Tracking
    │   ├── services/                      # Axios API service instances
    │   ├── App.js                         # Root routes definition
    │   └── index.css                      # Tailwind base directives
    ├── package.json
    └── tailwind.config.js

```

---
<span id="prerequisites"></span>
## ⚙️ Prerequisites

Ensure you have the following environments installed:

* **Java Development Kit (JDK 17 or higher)**
* **Apache Maven 3.8+**
* **Node.js (v18.x+) & npm**
* **MySQL Server 8.0+** and **MySQL Workbench**

* **Git**

---
<span id="step-by-step-setup-guide"></span>
## 🚀 Step-by-Step Setup Guide

### Step 1: MySQL Database Initialization

1. Open **MySQL Workbench** or MySQL CLI.


2. Execute the following script to create the database:

```sql
CREATE DATABASE IF NOT EXISTS `local-business-marketplace`;

```

3. Ensure user privileges and port `3306` are properly assigned.

---

### Step 2: Backend Setup (Spring Boot)

1. Navigate to the backend directory:

```bash
cd vendorX_Backend

```

2. Open `src/main/resources/application.properties` and verify your credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/local-business-marketplace?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT Configuration
jwt.secret=YourSuperSecretJwtKeyWithSufficientLengthForHS256Algorithm
jwt.expiration=86400000

# Stripe Configuration
stripe.api.key=your_stripe_secret_key

# Mail Configuration (SMTP)
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

```

3. Build and launch the application using Maven:

```bash
mvn clean install
mvn spring-boot:run

```

The backend starts up on port `8080` (or your customized server port).

---

### Step 3: Frontend Setup (React.js)

1. Navigate to the frontend directory:

```bash
cd vendorX_Frontend

```

2. Install npm dependencies:

```bash
npm install

```

3. Start the React development server:

```bash
npm start

```

The application will open automatically at `http://localhost:3000`.

---

<span id="visual-walkthrough"></span>
## 🖥️ Visual Application Walkthrough & User Flows

### 1. User Authentication & Password Recovery

* **Customer & Vendor Sign-Up**: Dedicated registration toggles allowing users to register either as standard customers or business owners.


* **JWT Login**: Secure credential authentication generating bearer tokens stored on the client.


* **Forgot Password Link**: Automated password reset mechanism sending time-limited reset links directly to the user's email inbox via SMTP.



### 2. Business Onboarding & Storefront Profile

* **Store Registration**: Business owners submit brand names, descriptions, store types, physical addresses, operating hours, and social media handles.


* **Store Controls**: Vendors can switch their operational status between `OPEN` and `CLOSED` directly from the dashboard sidebar.



### 3. Product, Category & Unit Variant Management

* **Category Configuration**: Create custom categories (e.g., Vegetables, Fruits, Dairy).


* **Unit & Quantity Cataloging**: Configure unit dimensions (Weight, Volume) and exact quantities (100 gm, 250 gm, 500 gm, 1 kg).


* **Inventory Entry**: Add products with high-resolution image URLs, descriptions, assigned unit variants, pricing, and stock toggles.



### 4. Promotional Banners & Discount Offers

* **Promotional Campaign Creator**: Vendors can design targeted discount promotions (e.g., "DISCOUNT UP TO 30% OFF") with banner images, target store locations, and scheduled start/end timestamps.



### 5. Customer Discovery, Cart & Checkout

* **Discovery Portal**: Customers can view nearby shops, inspect operating times, filter items by diet or category, and select specific unit variants.


* **Cart & Delivery Options**: Choose between **Deliver to my address** or **Pick up directly from the Store**.


* **Payment Processing**: Multi-channel payment completion supporting **Stripe** secure checkout and **Cash on Delivery (COD)**.



### 6. Vendor Order Lifecycle & Customer Notifications

* **Vendor Order Management**: Live dashboard view showing all pending, completed, and in-transit orders with instant status transition controls (`Pending`, `Out For Delivery`, `Delivered`, `Completed`).


* **Customer Alerts**: Notification feed updating customers on every phase of their order fulfillment.



---
<span id="rbac"></span>
## 🔒 Role-Based Access Control

* **CUSTOMER**: Access to storefront exploration, dynamic carting, address book maintenance, checkout processing, order history, and alerts.


* **BUSINESS OWNER / VENDOR**: Restricted access to store creation, product/variant inventory management, promotional campaigns, order status tracking, and revenue logs.


* **ADMIN**: Platform-wide monitoring, vendor approval, and global category governance.

---

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---
<span id="license-author"></span>
## 📄 License & Author

```text
Distributed under the MIT License. Developed by Abhishek Jamkar.

```
