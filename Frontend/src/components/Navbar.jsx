import React, { useRef, useState } from 'react'
import { backgroundDesigns, svgPatterns, navbarAnimations, navbarStyles, } from '../assets/dummyStyles';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ logoSrc, quizType = "default"}) => {
        const navigate = useNavigate();
        const [menuOpen, setMenuOpen] = useState(false);
        const [isHovering, setIsHovering] = useState(false);

        const navRef = useRef(null);
        const menuBtnRef = useRef(null);
        const menuRef = useRef(null);

        const design = backgroundDesigns[quizType] || backgroundDesigns.default;
        const pattern = svgPatterns[quizType] || svgPatterns.abstract;

  return (
  <div className={navbarStyles.container}>
    <nav ref={navRef} className={navbarStyles.nav(design.borderColor, isHovering)} onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
            <div className={navbarStyles.patternContainer}>
                <div className={navbarStyles.patternLayer} styles={{backgroundImage: pattern,
                    ...navbarStyles.backgroundPatternStyle,
                }}></div>

                <div className={navbarStyles.innerContainer}>
                    <div className={navbarStyles.flexContainer}>
                        <div className={navbarStyles.logoSection}>
                            <button onClick={() => goTo





02:35:38
                            }></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar