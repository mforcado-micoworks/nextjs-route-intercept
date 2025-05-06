"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [isPreventLeave, setIsPreventLeave] = useState(false);
  const { push } = useRouter();

  return (
    <div>
      <p>Sample Page</p>

      <p>Prevent leave: {isPreventLeave ? "true" : "false"}</p>
      <button
        style={{
          backgroundColor: isPreventLeave ? "red" : "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setIsPreventLeave((prev) => !prev)}
      >
        Click me to toggle prevent leave
      </button>
      <br />
      <br />
      <Link
        href="/"
        onNavigate={(e) => {
          if (isPreventLeave) {
            e.preventDefault();
            const hasConfirm = confirm("Click OK to leave this page");

            if (hasConfirm) {
              setIsPreventLeave(false);
              push("/");
            }
          }
        }}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
