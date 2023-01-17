import React, {useEffect, useState} from 'react'

export default function Apps() {
    const [data, setData] = useState([]);
    const [dataClick, setDataClick] = useState(true);
    const [dataClickView, setDataClickView] = useState(false);
    const [dataId, setDataId] = useState({});
    useEffect(() => {
        getPost();
        // getFetchPost();
    }, [])
    // useEffect(() => {
    //     getFetchPost(dataClick);
    // }, [dataClick])
    const getPost = async () => {
        fetch('https://api.tvmaze.com/search/shows?q=all').then(res => res.json()).then(res => setData(res))
    }
    const getFetchPost = async (dataClick) => {
        fetch(`https://api.tvmaze.com/shows/${dataClick}`).then(res => res.json()).then(res => setDataId(res))
    }
    const handleClick = (data) => {
        const {id} = data?.show
        // setDataClick(id)
        getFetchPost(id)
        setDataClick(false)
        setDataClickView(true)
    }
    console.log(dataId)
  return (
    <div className='container' style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"32px"}}>
    {dataClick && data.map((res, index) => (
        <div style={{width:"220px", height:"100%", background:"#f9f9f9", padding:"15px", borderRadius:"15px"}} key={index}>
            <img src={res?.show?.image?.original} height="220px" style={{borderRadius:"5px"}}/>
            <p>{res?.show.id || '-'}</p>
            <p>{res?.show.name || "-"}</p>
            <p>{res?.show.language || "-"}</p>
            <p>{res?.show?.schedule?.days[0] || "-"}</p>
            <button onClick={() => handleClick(res)}>View Details</button>
        </div>
    ))}
    { dataClickView &&
        <div style={{width:"100%", height:"100%", background:"#f9f9f9", padding:"15px", borderRadius:"15px", display:"flex"}}>
            <img src={dataId.image?.original} height="220px" style={{borderRadius:"5px"}}/>
            <div style={{width:"100%", textAlign:"center"}}>
            <p>{dataId.id || '-'}</p>
            <p>{dataId.name || "-"}</p>
            <p>{dataId.language || "-"}</p>
            <p>{dataId.schedule?.days[0] || "-"}</p>
            <button onClick={() => {
                setDataClick(true) 
                setDataClickView(false)
            }}>Back</button>
            </div>
        </div>
    }
    </div>
  )
}
