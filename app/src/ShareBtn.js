import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ShareBtn({name, icon, action = `${name}`, url, quote, author}) {

    return (
        // <button >
            <a id={`${action}-quote`}
               href={`${url}%22${quote}%22%20by%20${author}%0D%0A%0D%0AQuoteSharer%20Developed%20By%20Simon%20Aust`}
               // id="tweet-quote"
               target={"_blank"}
               rel={"noreferrer noopenner"}
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        // {/*</button>*/}
    )
}

export default ShareBtn;