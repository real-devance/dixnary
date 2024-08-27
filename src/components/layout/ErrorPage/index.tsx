function ErrorPage() {
   
    return (
        <main className="min-h-[100dvh] grid place-items-center 
        p-6 
        bg-slate-50 dark:bg-black" role="alert">
            <div className="text-center font-inter ">
                <p className="text-xl font-semibold text-primary-color">404</p>
                <h1 className="mt-4 
                text-3xl  md:text-5xl text-black dark:text-slate-300
                font-bold tracking-tight ">Page not found 🙁</h1>
                
            </div>
        </main>
    )
}

export default ErrorPage