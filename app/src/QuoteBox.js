import React from "react";

import ShareBtn from "./ShareBtn";
import NewQuoteBtn from "./NewQuoteBtn";

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

import quotes from "./Quotes"

const shareBtnPropsArr = [{
    name: "facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/sharer/sharer.php?u="
},{
    name: "twitter",
    action: "tweet",
    icon: faTwitter,
    url: "http://twitter.com/intent/tweet?text="
},{
    name: "tiktok",
    icon: faTiktok,
    url: "http://"
},{
    name: "instagram",
    icon: faInstagram,
    url: "http://"
}]

function QuoteBox () {
    // const {text, author} = quote;
    const [index, setIndex] = React.useState(0);
    const quote = quotes[index];
    console.log(`text: ${quote.text} author: ${quote.author}`)

    function handleClick() {
        setIndex((index + 1) % quotes.length);
        console.log(`handleClick - index: ${index}`);
    }

    return (
        <div id="quote-box">
            <p id="text">{`"${quote.text}"`}</p>
            <p id="author">{quote.author}</p>
            {/*<ShareBtn {...shareBtnPropsArr[1]} quote={quote.text}*/}
            {/*          author={quote.author} />*/}
            <div className="quote-box-buttons">
                <div id={"share-btns"}>
                    {shareBtnPropsArr.map(props => {
                        return (<ShareBtn
                            {...props}
                            quote={quote.text}
                            author={quote.author} />)
                    })}
                </div>
                <NewQuoteBtn handleClick={handleClick} />
            </div>
        </div>
    )
}

export default QuoteBox;