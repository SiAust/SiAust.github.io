import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ShareBtn({icon, name}) {


    return (
        <button id={`${name}-share-button`}>
            <a href="https://twitter.com/intent/tweet?text=Hello%20world"
               id="tweet-quote"
               target={"_blank"}
               rel={"noreferrer noopenner"}
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        </button>
    )
}

export default ShareBtn;