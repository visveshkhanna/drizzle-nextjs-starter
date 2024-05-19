"use client";
import React from "react";
import { getData } from "@/lib/actions";

export default function Home() {
  const [data, setData] = React.useState<any>([]);
  async function getData() {
    const data = await fetch("/api/test", {
      method: "GET",
    });
    return data.json();
  }

  React.useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
