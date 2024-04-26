import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/184321f6-bf3a-46c3-8d49-ba674023d26c-bac2c4.jpg',
  'https://utfs.io/f/f9cb3930-69fb-43e1-a7f3-6228479b77d3-30wz71.jpeg',
  'https://utfs.io/f/475d32f4-b474-4d84-8a66-7fb2b6a8f658-iikuq5.png',
  'https://utfs.io/f/f0afdeec-3057-4b31-bef5-7417bfed725b-3z89sf.jpg.jpeg'
]

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);
  

  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {
         [...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={idx} className="w-48">
            <img src={image.url} />
          </div>
         ))  
        }
      </div>
    </main>
  );
}
