import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Home Page</p>
      <br />
      <Link
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        href="/sample"
      >
        Sample page
      </Link>
    </div>
  );
}
