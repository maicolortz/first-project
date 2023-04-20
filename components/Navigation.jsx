"use-client";
import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <>
      <nav className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-sm normal-case text-xl">daisyUI</a>
        <ul className="flex justify-around">
          <li>
            <Link className=" btn btn-sm normal-case text-xl" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-sm normal-case text-xl" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="btn btn-sm normal-case text-xl" href="/services">
              {" "}
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
