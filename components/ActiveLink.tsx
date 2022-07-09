import { CSSProperties } from "react";
import { useRouter } from "next/router"
import  Link  from 'next/link';

const styles: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
}

interface Props {
  text: string
  href: string
}


export const ActiveLink: React.FC<Props> = ({ text, href })  => {

    const { asPath } = useRouter();

  return (
    <Link href={ href }>
       <a style={ asPath === href ? styles : undefined }>{ text }</a>
    </Link>
  );
};
