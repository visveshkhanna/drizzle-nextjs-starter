import { getData } from "@/lib/actions";

export default async function Home() {
  return <div>{JSON.stringify(await getData())}</div>;
}
