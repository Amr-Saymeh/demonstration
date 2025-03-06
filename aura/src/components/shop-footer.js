import "../pages/styles/shop-footer-style.css"


const Footer = ({ currentPage, totalPages, onNext, onPrev, isFilterActive }) => {
    return (
        <footer className={isFilterActive ? "footer active" : "footer"}>
            <div>
                <button
                    className={`back-footer ${currentPage === 1 ? 'filter-disabled' : ''}`}
                    onClick={onPrev}
                    disabled={currentPage === 1}
                >
                    <span>Back</span>
                    <svg
                        width="15"
                        height="15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
            <div>
                <span>
                    <br /> {currentPage} of {totalPages}
                </span>
            </div>
            <div>
                <button
                    className={`next-footer ${currentPage === totalPages ? 'filter-disabled' : ''}`}
                    onClick={onNext}
                    disabled={currentPage === totalPages}
                >
                    <span>Next</span>
                    <svg
                        width="15"
                        height="15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
