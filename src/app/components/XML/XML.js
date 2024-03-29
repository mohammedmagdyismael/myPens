import React from 'react';
import axios from 'axios';
import OutBoundXML from './outbound.xml' ;
import { Container, Panel, XMLCode, Btn } from './XML.style';

class XML extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xml: '', //# #document
            resultedTemplate: '',
            XMLForm: '',
        }
    }

    updateXML = (e, idx) => {
        const { xml } = this.state;
        let targetedParam = Array.from(xml.getElementsByTagName("ListOfParameters")[0].getElementsByTagName("Parameter"))[idx];
        targetedParam.getElementsByTagName("PlaceHolder")[0].textContent = e.target.value;
        Array.from(xml.getElementsByTagName("ListOfParameters")[0].getElementsByTagName("Parameter"))[idx] = targetedParam;
        this.setState({xml}, () => {this.print()});
    }

    xmlFileParser = data => {
        let parser = new DOMParser();
        return parser.parseFromString(data, "text/xml");
    }

    print = () => {
        const { xml } = this.state;
        var s = new XMLSerializer();
        var newXmlStr = s.serializeToString(xml);
        this.setState({ XMLForm: newXmlStr});
        console.log(newXmlStr);
    }

    componentDidMount(){
        axios.get(OutBoundXML, {
            "Content-Type": "application/xml; charset=utf-8"
         })
         .then((response) => {
            let xml = this.xmlFileParser(response.data);
            let parameterFieldsList = [];
            Array.from(xml.getElementsByTagName("ListOfParameters")[0].getElementsByTagName("Parameter")).map( (param, idx) => {
                parameterFieldsList.push(
                <div>
                    <p>
                        {Array.from(param.getElementsByTagName("Description"))[0].innerHTML}
                    </p>
                    <input onChange={e => this.updateXML(e, idx)}/>
                </div>)
            })
            this.setState({xml , parameterFieldsList }, () => { this.print(); });
         });
    }

    render(){
        const { parameterFieldsList, XMLForm } = this.state; 
        return( 
            <Container>
                <Panel>
                    <div style={{ display: 'flex', padding: '0px 15px'}}>
                        <XMLCode>
                            {parameterFieldsList}
                        </XMLCode> 
                        <p style={{ padding: '0px 35px'}}>{XMLForm}</p>
                    </div>
                    <Btn onClick={()=>this.print()}>
                        <p>Submit template</p>
                    </Btn>
                </Panel>
            </Container>
         )
    }
}
export default XML;