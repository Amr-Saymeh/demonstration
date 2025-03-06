import React, { useState, useEffect } from "react";
import Menuebar from "../components/menuebar"
import Navbar from "../components/navbar"
import "./styles/menuebar.css"

import GalleryItem from "../components/gallery-item";
import "../pages/styles/gallery-style.css"


const Main = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://www.thewowstyle.com/wp-content/uploads/2015/01/picture-abstract-art.jpg", owner: "Owner 1", title: "Beautiful Landscape" },
        { src: "https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg", owner: "Owner 4", title: "Ocean Wave" },
        { src: "https://aiartshop.com/cdn/shop/files/three-dimensional-woman-abstract-ai-art-339_480x480.webp?v=1706834024", owner: "Owner 3", title: "Mountain Peak" },
        { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/low-poly-woman-face-5-marco-lermer.jpg", owner: "Owner 4", title: "Ocean Wave" },
        { src: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg", owner: "Owner 1", title: "Beautiful Landscape" },
        { src: "https://th.bing.com/th/id/OIP.UlIiBsYAgfFxK0SglxySPgAAAA?w=425&h=564&rs=1&pid=ImgDetMain", owner: "Owner 4", title: "Ocean Wave" },
        { src: "https://www.easyhiker.co.uk/wp-content/uploads/2020/06/pic7-2.jpg", owner: "Owner 3", title: "Mountain Peak" },
        { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/119-vincent-van-gogh-wheat-field-with-cypresses-vincent-van-gogh.jpg", owner: "Owner 4", title: "Ocean Wave" },
        { src: "https://th.bing.com/th/id/R.a43bbc4cdfb47b48c819785da1c6c42b?rik=Krl08jjUoMbPtQ&pid=ImgRaw&r=0", owner: "Owner 1", title: "Beautiful Landscape" },
    ];
    const setGridRowSpan = (img) => {
        const rowHeight = 10; // نفس قيمة grid-auto-rows
        const height = img.getBoundingClientRect().height;
        const span = Math.ceil(height / rowHeight);
        img.parentElement.style.gridRowEnd = `span ${span}`;
    };

    useEffect(() => {
        const images = document.querySelectorAll('.card img');
        images.forEach((img) => {
            if (img.complete) {
                setGridRowSpan(img);
            } else {
                img.onload = () => setGridRowSpan(img);
            }
        });
    }, []);


    const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    return (

        <div className="gallary-body">
            <div className="shop-styling"><Navbar IsWithSearch={true} extended={false} /></div>
            <Menuebar />
            <div className="container">
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        image={image}
                        onImageClick={openModal}
                    />
                ))}
            </div>

            {modalVisible && selectedImage && (
                <div className="modal-main">
                    <div className="modal-content-main">
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="modal-details-main">
                            <h1>{selectedImage.title}</h1>
                            <p><strong>Owner:</strong> {selectedImage.owner}</p>
                        </div>
                        <button className="close-btn-main" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Main;