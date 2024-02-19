import { useState, useEffect, ReactDOM, Children, useRef  } from 'react';

import Markdown from 'react-markdown';
import './Template.css';
import file from './Template.md';

export const Hardware = () => {
    const [markdown, setMarkdown] = useState("");
    const [ids, setIds] = useState([]);

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
        setIds(Array.from(document.getElementsByTagName("*")));
    }, [markdown]);

    
    let nextId = 0;
    let content =
    <Markdown components={{h2: CustomH2, h3: CustomH3}}>
        {markdown}
    </Markdown>;

    function CustomH2(props) {
        var children = Children.toArray(props.children);
        var text = children.toString();
        var slug = text.toLowerCase().replace(/\W/g, '-');

        nextId = nextId + 1;

        return (
            <h2 id={nextId} className={slug}>
                {props.children}
            </h2>
        )
    }

    function CustomH3(props) {
        var children = Children.toArray(props.children);
        var text = children.toString();
        var slug = text.toLowerCase().replace(/\W/g, '-');

        nextId = nextId + 1;

        return (
            <h3 id={nextId} className={slug}>
                {props.children}
            </h3>
        )
    }
    
    let tags = [];
    
    ids.forEach(element => {
        if(element.id !== "" && element.id !== "root"){
            tags.push(element);
        }
    });
    
    function clickHandle(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth"});
    }
    
    return (
        <div className='container'>
            <div className='menuBar'>
                {tags.map(element => 
                    <li key={element.id} onClick={() => clickHandle(element.id)}>{element.className}</li>
                )}
            </div>

            <div className='content'>
                {content}
            </div>
        </div>
    )
}
