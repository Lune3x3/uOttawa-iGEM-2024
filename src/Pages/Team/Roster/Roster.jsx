import { Overlay } from './Overlay/Overlay.jsx';
import './Roster.css';
import { Reveal } from '../../Reveal.tsx';


export const Roster = () => {
    const core = [
        {name: "john", email: "john@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'rob.jpg'},
        {name: "rob", email: "rob@uOttawa.ca", about: "alter ego", image: 'rob.jpg'},
        {name: "joe", email: "joe@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'rob.jpg'},
      ];
    
    const vps = [
        {name: "jeff", email: "jeff@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'john.jpg'},
        {name: "james", email: "james@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'john.jpg'},
        {name: "josh", email: "josh@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'john.jpg'},
        {name: "jake", email: "jake@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: 'john.jpg'},
        {name: "jordan", email: "jordan@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "john.jpg"},
        {name: "jack", email: "jack@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "john.jpg"}
    ];

    const researchers = [
        {name: "a", email:"a@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "b", email:"b@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "c", email:"c@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "d", email:"d@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "e", email:"e@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "f", email:"f@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "g", email:"g@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"},
        {name: "h", email:"h@uOttawa.ca", about: "lorem ipsem dollar sit amit", image: "no.jpg"}
    ]

    return (
        <>
            <section className="aboutUsHero">
                <div className="aboutUsText">
                    <Reveal>
                        <h1> About Us </h1>
                    </Reveal>
                </div>
            </section>

            <Reveal>
                <h1 className="sectionHead"> Boss </h1>
                <div className="profileArray">
                    {core.map((member, index) => {
                        return <Overlay person={member}/>
                    })}
                </div>
            </Reveal>

            <Reveal>
                <h1 className="sectionHead"> Workers </h1>
                <div className="profileArray">
                    {vps.map((member, index) => {
                        return <Overlay person={member}/>
                    })}
                </div>
            </Reveal>
        
            <Reveal>
                <h1 className="sectionHead"> Minions </h1>
                <div className="profileArray">
                    {researchers.map((member, index) => {
                        return <Overlay person={member}/>
                    })}
                </div>
            </Reveal>
        </>
    );
}

//{team.map((member, index) => {
//    return <User name={member.name} email={member.email} about={member.about}/>;
//})}