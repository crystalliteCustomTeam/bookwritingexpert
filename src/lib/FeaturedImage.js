// import Image from "next/image";
// import Link from "next/link";


// export default function FeaturedImage({ post }) {

//     let defaultFeaturedImage = "https://wp23.pulse-force.com/bwe/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";
    
//     if (post.featuredImage) {
//         defaultFeaturedImage = `https://wp23.pulse-force.com/bwe/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`;
//     }

//     return (
//         <Link href={`${post.slug}`} >
//             <Image src={defaultFeaturedImage} width="350" height="300" alt={post.title} className="img-fluid" />
//         </Link>
//     )
// }