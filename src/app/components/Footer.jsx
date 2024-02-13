const year = new Date().getFullYear()

export default function(){

    return(
        <footer className="flex justify-center px-4 bg-black text-white h-6" >
         copyright &copy; {year}
        </footer>
    )
}