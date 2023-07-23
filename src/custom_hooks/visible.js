import { useEffect, useState } from "react";

const options = {
    root:  null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
}

const useVisible = (elementref)=>{
    const [isvisible,setIsvisible] = useState(false);
    useEffect(()=>{
        if(elementref.current){
            const observer = new IntersectionObserver((entries,observer)=>{
                entries.forEach((entry)=>{
                    console.log(entry.isIntersecting);
                    if(entry.isIntersecting === true){
                        setIsvisible(true);
                        observer.unobserve(elementref.current)
                    }
                })
            },options)
            observer.observe(elementref.current);
        }
    },[elementref]);
    return isvisible;
}

export default useVisible;