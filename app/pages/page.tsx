import { headers } from 'next/headers';

export default function RootLayout() {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";

  console.log("this is my header",header_url)
  return(
    <h1 className='text-white'>{header_url}</h1>
  )
}