import React from "react";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      <p>This is Products page</p>

      <Link to="/" className="underline">go to dashboard page</Link>
    </div>
  );
}
