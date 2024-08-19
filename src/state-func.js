import React,{useState} from "react";

export default function MessageBox(){
    let [text,setText]=useState('Hello world')
    let [size,setSize]=React.useState(16)

    const onClickSetText=()=>{
        let t=prompt('ข้อความ')
        if (t){
            setText(t)
        }
    }
    const onclickZoomIn=()=>{
        let newSize=size+1
        setSize(newSize)
    }
    let msgboxStyle={
        display:'inline-block',
        width:350,
        fontSize:size,
        backgroundColor:'#ccc',
        padding:5,
        textAlign:'left'
    }
    return(
        <div div style={{textAlign:'center',marginTop:20}}>
        <div style={msgboxStyle}>{text}</div><br/>
        <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
        <button onClick={onclickZoomIn}>เพิ่มขนาด</button>&nbsp;
        <button onClick={()=>setSize(size-1)}>ข้อความ</button>&nbsp;

    </div>
    )
}