import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import blogPosts from "@/config/blog-posts";
import { Icon } from "@iconify/react";
import { Link } from "lucide-react";
import Image from "next/image";

interface BlogPostPage {
  params: {name: string}
}

const BlogPostPage: React.FC<BlogPostPage> = ({ params }) => {
  const name = decodeURIComponent(params.name);

  const post = blogPosts.find(post => post.name === name);

  if (post === undefined) {
    return <div className="mx-auto flex h-screen w-[100vw] max-w-4xl items-center justify-center">
      <h1 className="text-xl lg:text-2xl">{"404: Could not find blog post \""}{name}{"\""}</h1>
    </div>
  }

  return (
    <div className={"mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-start gap-8 bg-background p-8"}>
      <Heading>{ post.title }</Heading>
      <Image src={post.thumbnailUrl} width={1920} height={1080} alt={`${name} Thumbnail`} className="w-full rounded-2xl border" />
      <div className="flex w-full justify-between gap-16">
        <h1 className="text-muted-foreground">{post.date}</h1>
      </div>
    </div>
  );
};

export default BlogPostPage;