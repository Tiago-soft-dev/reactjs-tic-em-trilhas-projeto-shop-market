export const Button = ({children})=>{

    return (
        <button className="w-full rounded
             bg-blue-500 py-2 px-4
             hover:bg-blue-700
             hover:text-white">
             {children}
             </button>   
    )
    
}