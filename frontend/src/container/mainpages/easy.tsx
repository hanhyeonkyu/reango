import React, { useState } from 'react'
import axios from 'axios'
import './easy.scss'

function Easy() {
    const [data, setData] = useState<any>(null);
    const connecting = async () => {
        const res = await axios.get('/api/user/', {
            headers: {"Access-Control-Allow-Origin": "*"}})
        setData(res.data)
    }
    return (
        <div className="easy">
            <div className="contents">
            <button className="conbtn" onClick={connecting}>connect test</button>
            <div className="condt">{data && data.map((d: any) => {
                return <div>
                    <div style={{color: 'white'}}>{d.id}</div>
                    <div style={{color: 'white'}}>{d.email}</div>
                    <div style={{color: 'white'}}>{d.password}</div>
                    <div style={{color: 'white'}}>{d.created_at}</div>
                    </div>
            })}</div>
            </div>
        </div>
    );
}

export default Easy;