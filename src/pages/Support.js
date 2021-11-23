import React from 'react';
import './Support.css';

function Support() {
    return (
        <div className="supportbody">
            <div class="supportcontainer">
                <div class="supportcontent">
                    <div class="side">
                        <div class="topic-text">Send us a message</div>
                        <p>If you are facing any kind of trouble using our image enhancer, you can send us a message from here. It'll our pleasure to help you!</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email address" />
                            </div>
                            <div class="input-box message-box" >
                                <input type="text" placeholder="Enter your message here" />
                            </div>
                            <div class="button">
                                <input type="button" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;
