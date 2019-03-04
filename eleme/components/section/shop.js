import React from "react";
import shopimg from "../../img/shop.png";
let styles = {
        "fontSize":"30px",
        "display": "flex",
        "width":"100%",
        "border":"1px solid #ccc",
        "flexShrink":0
    }
let btnstyle={
        "fontSize": "35px",
        "display":"inline-block",
        'border':"1px solid #ccc",
        'borderRadius':"5px",
        'boxSizing':"border-box",
        "padding":"10px",
        "margin":"5px"
}
class Shop extends React.Component {
    
    render() {
        return (<div style={styles}>
        <div style={{width:"30%",display:"flex","justifyContent":"center","alignItems":"center"}}>
        <img src={shopimg}  style={{width:"100%"}}/>
        </div>
        <div style={{width:"70%","boxSizing":"border-box","paddingLeft":"15px"}}>
            <h1 style={{margin:"15px 0","fontWeight":"normal"}}>一品缘分过桥米线</h1>
            <div>
            <span>评分</span><span style={{color:"red",'marginRight':'20px'}}>4.7</span>
            <span>月售</span><span>556</span>
            </div>
            <p style={{padding:0,margin:"20px 0",background:"pink",display:"inline-block"}}>
              “挺快的，货品完好”  
            </p>
            <div>
                <span style={btnstyle}>25减11</span>
                <span style={btnstyle}>46减16 </span>
                <span style={btnstyle}>65减20</span>
                <span style={btnstyle}>25减11</span>
            </div>
        </div>
        </div>);
    }

}
export default Shop;