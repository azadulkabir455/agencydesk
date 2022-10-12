import React,{useEffect} from 'react'

export default function useCreat(url,contactInfo) {

    useEffect(() => {
        const createData = (url,contactInfo) => {
            let item = contactInfo
            fetch(url, {
                method:"Post",
                headers: {
                    "Accept":"application/json",
                    "Content-type":"application/json"
                },
                body:JSON.stringify(item)
            }).then((respose) => {
                respose.json().then((data) => {})
            })
        }
        return createData();
    },[url]);
}


//Need to study with custom hooks