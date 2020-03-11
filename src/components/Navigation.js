import React from 'react'
import $ from 'jquery'
import '../styles/Navigation.scss'

class Navigation extends React.Component {

    componentDidMount(){
        
        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.main_h').removeClass('open-nav');
            } else {
                $('.main_h').addClass('open-nav');
            }
        });
        
        $('.main_h li a').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_h').removeClass('open-nav');
            }
        });
        
        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });
    }
    

    render() {
        return (
            <div>
                <header class="main_h green">
                    <div class="row">
                        <a class="logo" href="#"><img src="./images/logo.png"></img></a>
                        <div class="mobile-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav>
                            <ul>
                                <li className="highlightTextOut"><a alt="Section 01" href=".sec01">Section 01</a></li>
                                <li className="highlightTextOut"><a href=".sec02">Section 02</a></li>
                                <li className="highlightTextOut"><a href=".sec03">Section 03</a></li>
                                <li className="highlightTextOut"><a href=".sec04">Section 04</a></li>
                            </ul>
                        </nav>

                    </div> 
                </header>
                
            </div>
        )
    }
    
}

export default Navigation;