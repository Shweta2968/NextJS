// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// export default function Home(){
//   return(
//     <main>
//       <h1>Hello World</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard />
//     </main>
//   )
// }




import {API_BASE_URL} from './config/constant';
export default function env(){
  console.log(process.env.NODE_ENV)
  return(
      <main>
          {
              process.env.NODE_ENV == "development"?
              <h1>You are in development mode</h1>:
              <h1>You are in production mode</h1>
          }
          <h1>Environment Variables in Next JS</h1>
          <h1>{API_BASE_URL}</h1>
          {process.env.DB_PASSWORD}
      </main>
  )
}