import AboutBanner from "./AboutBanner";
import Experties from "./Experties";
import Makes from "./Makes";
import Map from "./Map";
import Members from "./Members";
import Ques from "./Ques";
import Read from "./Read";
import Service from "./Service";
import Tips from "./Tips";
import Us from "./Us";
import Write from "./Write";


const About = () => {
    return (
        <div>

            <AboutBanner></AboutBanner>
            <Service></Service>
            <Us></Us>
            <Experties></Experties>
            <Ques></Ques>
            <Read></Read>
            <Members></Members>
            <Makes></Makes>
            <Tips></Tips>
            <Write></Write>
            <Map></Map>            
        </div>
    );
};

export default About;