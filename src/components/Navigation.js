import React from 'react'
import $ from 'jquery'
import '../styles/Navigation.scss'

class Navigation extends React.Component {

    componentDidMount(){
        
        let btn = document.getElementsByClassName("dropbtn");
        let dwn = document.getElementsByClassName("dropdown");

        const handleClick = (e) => {
            let flag = false;
            // console.log(document.getElementById(e.target.id+"a").classList);
            if(document.getElementById(e.target.id+"a").classList.contains("showdown"))
                flag =true;
            for(let i=0;i<btn.length;i++){
                dwn[i].classList.remove("showdown");
            }
            // console.log(e.target.id + " " + flag);
            if(flag == false)
                document.getElementById(e.target.id+"a").classList.add("showdown");
            
        }

        window.addEventListener("click",(e)=>{
            for(let i=0;i<btn.length;i++)
                if(btn[i].contains(e.target))
                    return;
            for(let i=0;i<dwn.length;i++)
                dwn[i].classList.remove("showdown");
        })

        for(let i=0;i<btn.length;i++){
            btn[i].addEventListener('click',handleClick);
        }
        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.main_h').removeClass('open-nav');
            } else {
                $('.main_h').addClass('open-nav');
            }
        });
        
        // $('.main_h li a').click(function() {
        //     if ($('.main_h').hasClass('open-nav')) {
        //         $('.navigation').removeClass('open-nav');
        //         $('.main_h').removeClass('open-nav');
        //     }
        // });
        
        // navigation scroll lijepo radi materem
        // $('nav a').click(function(event) {
        //     var id = $(this).attr("href");
        //     var offset = 70;
        //     var target = $(id).offset().top - offset;
        //     $('html, body').animate({
        //         scrollTop: target
        //     }, 500);
        //     event.preventDefault();
        // });
    }
    

    render() {
        return (
            <div>
                <header class="main_h indigo">
                    <div class="row">
                        <a class="logo" href="#"><img src="./images/logo.png"></img></a>
                        <div class="mobile-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav>
                            <ul>
                                <li className="highlightTextOut">
                                    <div className="dropbtn">
                                        <a alt="Section" id="1">Section</a>
                                    </div>
                                    <div className="dropdown" id="1a">
                                        <a alt="Hey">hey</a>
                                        <a alt="there">there</a>
                                    </div>
                                </li>
                                <li className="highlightTextOut">
                                    <div className="dropbtn">
                                        <a alt="Section" id="2">Section</a>
                                    </div>
                                    <div className="dropdown" id="2a">
                                        <a alt="Hey">hey</a>
                                        <a alt="there">there</a>
                                    </div>
                                </li>
                                <li className="highlightTextOut">
                                    <div className="dropbtn">
                                        <a alt="Section" id="3">Section</a>
                                    </div>
                                    <div className="dropdown" id="3a">
                                        <a alt="Hey">hey</a>
                                        <a alt="there">there</a>
                                    </div>
                                </li>
                                <li className="highlightTextOut">
                                    <div className="dropbtn">
                                        <a alt="Section" id="4">Section</a>
                                    </div>
                                    <div className="dropdown" id="4a">
                                        <a alt="Hey">hey</a>
                                        <a alt="there">there</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                    </div> 
                </header>
                
            </div>
        )
    }
    
}

export default Navigation;