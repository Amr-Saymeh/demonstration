# AURA - E-commerce Platform for Artistic Paintings

Welcome to **AURA**, an innovative online marketplace designed for artists and art enthusiasts. AURA offers a platform where artists can showcase their creative paintings for sale or display, allowing users to explore a vast collection of art. Whether you're an artist looking to share your work with the world or a buyer searching for unique pieces to add to your collection, AURA provides an easy-to-navigate, user-friendly experience. The website is designed to provide a seamless experience with multiple pages that allow users to browse, view, and purchase artwork. Artists can manage their portfolio, while buyers can discover new and exciting pieces of art from a variety of styles and mediums.

---

## Now, let's dive deeper into each page and explore its features and functionality!

### 1. The Shop Page (Done By Amr Saymeh, the Aura team leader):
This page incorporates a range of features designed to provide an engaging and user-friendly experience. 

- **Shop Items Display:** Presents products dynamically and responsively, ensuring a visually appealing layout.
- **Add-to-Cart Functionality:** Enables users to easily select items for purchase.
- **Filter and Search Options:** Refines the browsing experience.
- **Night Mode Switch:** Allows toggling between light and dark themes, catering to different user preferences.

Built with **Reusable Components** in React, the page is highly scalable, and its **Fully Responsive Design** ensures seamless operation across various devices, including mobiles and tablets. 

Amr's contributions included:
- Designing and implementing the Shop Page structure.
- Developing the Add-to-Cart Functionality.
- Building the Main Navigation Bar.
- Creating the Filter and Search Functionalities.
- Designing the Night Mode Switch.

**Screenshots Link:** [View Work](https://imgur.com/a/hgOAjhU)

---

### 2. The Profile Pages (Done By Sara Qadi):
There are two pages: **MyProfile** and **YourProfile**, each designed with distinct functionalities.

- **MyProfile:** Features a profile picture, bio, follower and following counts, and an Edit Profile button that opens a modal for updating profile details. A settings icon provides access to user settings. Posts are displayed in two categories: For Sale and For Show, with toggles to filter the display accordingly. Clicking on a post opens a modal showcasing the post's picture, a like section, and a comment section where users can view and add comments. The left sidebar includes the website logo and navigation menu, offering links to other pages. One menu icon, **Create Post**, allows users to create new posts.

- **YourProfile:** Mirrors the layout of MyProfile, but replaces the Edit Profile button with a **Follow** button for connecting with the user. The settings icon is replaced by a **Message** icon that opens a messaging interface for direct communication with the profile owner.

**Screenshots Link:** [View Work](https://imgur.com/a/K9cte3v)

---

### 3. The Cart and Wishlist Pages (Done By Kareem Halawe):
- **Cart Page:** Displays all items added to the cart along with their details. Users can remove any item from the cart, view a summary of the items, and use a "Checkout" button to proceed to the checkout page.
- **Wishlist Page:** Shows all items you have liked and saved for potential future purchases. Users can remove items from the wishlist or add them directly to the cart.

**Screenshots Link:** [View Work](https://imgur.com/a/4fp7lm3)

---

### 4. The Gallery Page (Done By Rand Fattash):
This page uses a container to display image components seamlessly, regardless of their dimensions, ensuring a clean and engaging presentation. When a user clicks on an image, a modal pops up, providing additional functionality. Within the modal, users can view detailed information about the image, including its story or inspiration, and even purchase it directly. This page exemplifies AURA's commitment to combining aesthetic design with practical functionality, creating an immersive experience for art lovers.

**Screenshots Link:** [View Work](https://imgur.com/a/JroVp9a)

---

### 5. The Checkout Page (Done By Sojoud Qusini):
The **Checkout Page** on AURA provides a seamless and secure way for users to complete their purchases. 

- **Interactive Form:** Users can enter personal details, including name, email, address, and payment information such as the name on the card, card number, and expiration date.
- **Invoice Display:** After submission, the page displays a detailed invoice containing the billing information and payment details. To ensure security, only the last four digits of the card number are shown. Additionally, the total amount due is prominently displayed.

**Screenshots Link:** [View Work](https://imgur.com/a/gM0qtah)

---

### 6. The Community Page (Done By Omar Hammami):
The **Community Page** serves as a hub for interaction and communication between sellers, buyers, and community members on the AURA platform. This page fosters engagement, allowing users to connect, share insights, and discuss their interests in art. Its straightforward and minimalist design ensures ease of use and accessibility, focusing on creating a welcoming and interactive environment for all participants.

**Screenshots Link:** [View Work](https://imgur.com/a/aura-communitypage-PkRZiAn)

---

### 7. The Upload Page (Done By Mohanad Yamin):
The **Upload Page** empowers users to showcase their artwork by uploading images, adding detailed descriptions, and categorizing their creations. 

- **Image Upload:** Effortlessly upload images of your artwork with a live preview. Use the drag-and-drop feature or select a file from your device.
- **For Sale or Display Option:** Indicate whether your artwork is for sale or solely for display. If it's for sale, specify a price.
- **Detailed Information Fields:** Provide a captivating title and a descriptive summary to give context and attract potential buyers or admirers.
- **Category Selection:** Choose from predefined categories like Painting, Sculpture, Photography, and more, ensuring your artwork is correctly categorized for easy discovery.

**Screenshots Link:** [View Work](https://imgur.com/a/uJ0L2Cb)

---

### 8. The User Authentication Pages (Done By Ala'a Affori):
- **Sign In Page:** Users log into their account by entering their email and password. The page includes validation for both fields, with user credentials being stored in local storage for seamless access to the homepage upon successful login.
- **Sign Up Page:** Users create a new account by entering their email, first name, last name, and password. This page includes validation to ensure the email and password meet the required format criteria.
- **Forgot Password Page (Design Only for Web1):** If a user forgets their password, they can enter their registered email. A code is sent to the provided email for verification. Once the correct code is entered, the user proceeds to the Reset Password Page.
- **Verification Page (Design Only for Web1):** This feature is added as part of the design for Web1, where a user receives a code via email for verifying identity before resetting the password. The functionality will be implemented in Web2.
- **Reset Password Page (Design Only for Web1):** After verifying the code, users are prompted to enter and confirm a new password. Once the password is successfully reset, users are redirected back to the Sign In Page.

**Screenshots Link:** [View Work](https://imgur.com/a/jRnlcVQ)

---

## How to run this project locally?

### Prerequisites:
- **Git:** Ensure you have Git installed on your computer. You can download it from [Git's official website](https://git-scm.com).
- **Code Editor:** A code editor like VS Code is recommended.
- **Web Browser:** Any modern web browser (e.g., Chrome, Firefox) to view the project.

### Steps:
1. **Clone the Repository:**
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to save the project.
   - Run the following command: `git clone https://github.com/Web1-Teams/11am-grp1-repo`

2. **Navigate to the Project Directory:**
   Use the following command: `cd 11am-grp1-repo`

3. **Open the Project in Your Code Editor:**
   Use the following command: `code .`

4. **Run the project:**
   - Use the terminal and specify its type to be Git Bash, not PowerShell.
   - Navigate to the AURA folder: `cd aura`
   - Start the project: `npm start`

