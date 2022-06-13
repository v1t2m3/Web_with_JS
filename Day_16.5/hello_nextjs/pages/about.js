import Link from "next/link";
export default function About() {
    return (
        <ul>
            <li>
                <Link href="/post/abc">Go to page /post/[pid]</Link>
            </li>
            <li>
                <Link href="/post/abc?state=idii">Go to page /post/[pid]</Link>
            </li>
            <li>
                <Link href="/post/abc/xyz">
                    Go to page /post/[pidd]/[comment]
                </Link>
            </li>
        </ul>
    );
}
