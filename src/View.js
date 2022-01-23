import { useState,useEffect } from 'react'


function View(){
    const [size, setSize] = useState(window.innerWidth)

    
    useEffect(() =>{
        window.addEventListener('resize',()=>{
            setSize(window.innerWidth)
        })

        return ()=>{
            window.removeEventListener('resize',()=>{
                setSize(window.innerWidth)
            })
        }
    })

    return(
        <>
            <div style={{marginTop:60}}>{size>768?'Đang cập nhật thông tin, vui lòng truy cập lại sau':'Trang web chỉ hỗ trợ trên máy tính'}</div>
        </>
    )
}

export default View;