import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customComponents = {
    // img(image) {
    //   return (
    //   <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={props.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
export default PostContent;

// function PostContent(props) {
//   const { post } = props;
//   const imagePath = `/images/posts/${post.slug}/${post.image}`;
//   const customComponents = {
//     // img: ({ node, ...props }) => (
//     //   <Image
//     //       src={`/images/posts/${post.slug}/${props.src}`}
//     //       alt={props.alt}
//     //       width={600}
//     //       height={300}
//     //     />
//     //   ),
//     // };
//     paragraph(paragraph) {
//       const { node } = paragraph;
//       if (node.children[0].type === "image") {
//         const image = node.children[0];

//         return (
//           <div className={classes.image}>
//             <Image
//               src={`/images/posts/${post.slug}/${image.url}`}
//               alt={image.alt}
//               width={600}
//               height={300}
//             />
//           </div>
//         );
//       }

//       return <p>{paragraph.children}</p>;
//     },
//   };