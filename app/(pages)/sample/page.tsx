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
      <br />
      <button onClick={() => setIsPreventLeave((prev) => !prev)}>
        Click me to toggle prevent leave
      </button>
      <br />
      <Link
        href="/"
        onNavigate={(e) => {
          if (isPreventLeave) {
            e.preventDefault();
            const hasConfirm = confirm("You cannot leave this page");

            if (hasConfirm) {
              setIsPreventLeave(false);
              push("/");
            }
          }
        }}
      >
        Go to home
      </Link>
    </div>
  );
}
