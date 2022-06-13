import { useRouter } from "next/router";
export default function Post() {
    const router = useRouter();
    const { pidd, state } = router.query;
    return (
        <div>
            <p>Post: {pidd}</p>
            <p>State: {state}</p>
        </div>
    );
}
