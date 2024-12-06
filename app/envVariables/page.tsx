export default function env(){
    console.log(process.env.SERVER_PASSWORD)
    return(
        <main>
            {
                process.env.NODE_ENV=="development"?
                <h1>You are in development mode</h1>:
                <h1>You are in production mode</h1>
            }
            <h1>Environment Variables in Next JS</h1>
        </main>
    )
}